import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { ChangeDetectorRef } from '@angular/core';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';
import {SocketIOFileUpload} from 'socketio-file-upload';

import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';
import { UploadComponent } from 'src/app/upload/upload.component';
import { FileService } from '../services/file.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  //Current User Details
  userName : string;
  userId : string;

  //Message Reciever Details
  userNameTo: string;
  userIdTo: string;
  userStatus: boolean;
  
  //fetch the chat room for two users
  chatRoom : string

  //Message Details
  message: string;
  messageArray: any = [];
  isTyping = false;
  timeOut : any;

  //file upload progress
  fileUpload : boolean = false;
  uploadStatus : any;
  uploadMetaData: any;
    
  formGroup:any;
  error : any ;
  acceptedTypes : any;

  //if files are in queue
  fileUploadQueue : boolean = false;
  file : any;

  //files
  compressedFiles :any= [];
  filesToUpload :any=[];


  constructor(private route : ActivatedRoute, private socketService : SocketService, 
              private userService : UserService, private router : Router,private dialog: MatDialog,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,private fileService : FileService, 
              private imgCompressService: ImageCompressService,) {
  }

  ngOnInit() {      
        this.joinChatRoom();
        this.checkUserStatus();
        this.checkNewMessage();
        this.isUserTyping();
        this.checkMsgStatus();
        this.getUserStatus();
        this.socketService.goOnline();
}

joinChatRoom(){
      this.userIdTo = this.route.snapshot.queryParamMap.get('id');
      this.userNameTo = this.route.snapshot.queryParamMap.get('name');
      this.userName = this.userService.getLoggedInUser();
      this.userId = this.userService.getLoggedInUserId();
      //Get the chat room by concatening User id of both users      
      if ( this.userId < this.userIdTo) {
          this.chatRoom = this.userId.concat(this.userIdTo);
      } else {
          this.chatRoom =  this.userIdTo.concat(this.userId);        
      }
      //Join chat room for 
      this.socketService.joinRoom({user: this.userService.getLoggedInUser(), room: this.chatRoom});  
      this.getChatMessages();      
}



  //Get User Status From DB
  getUserStatus(){
    this.userService.checkOnline(this.userIdTo).subscribe(res => {
      this.userStatus = res.data.online;
     })
  }

  //Check for user is online or offline on basis of socket event 
  checkUserStatus(){
      this.socketService.changeUserStatus().subscribe(data => {
        if(data.id==this.userIdTo){
          this.userStatus = data.status;
        }
      })
  }


checkNewMessage(){
 this.socketService.newMessageReceived().subscribe(message => {
   this.messageArray.push(message); 
   if(message.userNameFrom!=this.userName){
       this.socketService.changeMsgStatus(message,'read');   
  } 
 });
}
 

isUserTyping(){
 this.socketService.receivedTyping().subscribe(bool => {
   this.isTyping = bool.isTyping;
   clearTimeout(this.timeOut);
       this.timeOut = setTimeout( ()=> {
         this.isTyping = false;   
       } , 250);
 });
}
   
   
checkMsgStatus(){
  this.socketService.msgStatusChanged().subscribe(message => {
      let length = this.messageArray.length;
           for(let i=length-1;i>=0;i--){
             if(this.messageArray[i].msg_id==message.msg_id){
                  this.messageArray[i].status = message.status;
                  break;
             }
           }
  })
}

//Fetch all previous chat msg from database
getChatMessages(){
  this.userService.getChatMessages(this.chatRoom)
  .subscribe( res => {
    this.messageArray = res.data.messages;
  } )
}

//Send New Message
sendMessage(messageType:string) {
  if(this.message!=''){
    let timestamp = new Date().getUTCMilliseconds()+this.chatRoom;
    let data = { userNameTo:this.userNameTo, userIdTo:this.userIdTo, room: this.chatRoom, userNameFrom: this.userName,
       message: this.message,messageType:messageType, status:'sent',msg_id :timestamp }
    this.socketService.sendMessage(data);
    this.message = '';
  }
}

//On Typing msg
typing() {
    this.socketService.typing({room: this.chatRoom, user: this.userService.getLoggedInUser()});
}

//Send on enter
keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.sendMessage('text');
    }
}

//If new msg arrived mark as read
markRead(msg){
      if(msg!='read'){
          console.log("msg after : ",msg)  
          this.socketService.changeMsgStatus(msg,'read');
      }
}

//Send Multimedia
uploadMedia( msgType ){

    this.uploadMetaData = { userNameTo:this.userNameTo, userIdTo:this.userIdTo, room: this.chatRoom, userNameFrom: this.userName,messageType:msgType }     
  
    if(this.uploadMetaData.messageType=='image'){
        this.acceptedTypes  = ["image/jpg", "image/jpeg", "image/png"];
    } else if(this.uploadMetaData.messageType=='audio'){
        this.acceptedTypes  = ["audio/*"];
    }

    this.formGroup = this.fb.group({
      files: [null, Validators.required]
    });

    this.fileUpload = true;
    this.fileService.currentPercent.subscribe(res =>{
        this.uploadStatus = res;
    })
}

  


//upload methods
onFileChange(event) {
    if(event.target.files && event.target.files.length) {
        let length = event.target.files.length;
        if(length > 3){
          this.error="can't upload more than 10 files at a time";
          return;
         }
        for(let i=0;i<length;i++){
          let file = event.target.files[i];
          if (this.acceptedTypes.indexOf(file.type) < 0) {
            this.error = "Only jpg/png files are supported"
            return;
          }
          if (file.size > 10000000) {
            this.error = "File Size can't exceed up to 1 MB"
            return;
          }
          this.cd.markForCheck();
        };
    } 
       //options for image resize
       const resizeOptions = {
          Resize_Max_Height: 100,
          Resize_Max_Width: 100,
          Resize_Quality: 25,
          Resize_Type: 'jpeg'
      }
  
      this.filesToUpload = Array.from(event.target.files);    
      ImageCompressService.filesArrayToCompressedImageSourceEx( this.filesToUpload,resizeOptions).then(observableImages => {
            observableImages.subscribe((image) => {
              this.compressedFiles.push(image.compressedImage);
            }, (error) => {
                console.log("Error while converting");
            }, () => {
            });
      });            
} 

  
  
  onSubmit(){
    for(let i=0;i<this.compressedFiles.length;i++){          

          let msg = this.uploadMetaData;
          msg.messageType = 'image';
          msg.status = 'sent';
          msg.msg_id = new Date().getUTCMilliseconds()+this.uploadMetaData.room;
          msg.message = this.compressedFiles[i].imageDataUrl; //store thumbnail directly in db
         
          msg.uploading=true;
          
          //show in msg array of chat box
          this.messageArray.push(msg);
          let index = this.messageArray.indexOf(msg);

          //fileupload formdata
          let data = new FormData();
          data.append('image', this.filesToUpload[i],'test');
          data.append('fileSeq', 'seq' + i);
          this.fileService.uploadImage(data).subscribe( event => {
            if (event.type == HttpEventType.UploadProgress) {
                console.log("upload progress");
                const percentDone = Math.round(100 * event.loaded / event.total);
            }

            if(event.type == HttpEventType.Response){
               if(event.body.status=='true'){
                    msg.uploading=false 
                    msg.filePath=event.body.filePath   
                    this.messageArray[index]=msg;              
                    this.socketService.sendMessage(msg);
                }
                else{
                }
            }
           });
          this.fileUpload = false;          
    }
  }

  remove(index){
    this.filesToUpload.splice(index,1);
    this.compressedFiles.splice(index,1);
  }


  preview(event){
    const modal = <HTMLDivElement>document.getElementById('myModal');
    console.log(event.srcElement);
    const modalImg = <HTMLImageElement>document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = event.srcElement.src;
    const span = <HTMLSpanElement>document.getElementsByClassName("close")[0];
     span.onclick = function() { 
       modal.style.display = "none";
     }
  }


}

