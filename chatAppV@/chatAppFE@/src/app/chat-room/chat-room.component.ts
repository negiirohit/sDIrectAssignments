import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';

import { UploadComponent } from 'src/app/upload/upload.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
  uploadStatus : any;

  constructor(private route : ActivatedRoute, private socketService : SocketService, 
              private userService : UserService, private router : Router,private dialog: MatDialog) {

  }

  ngOnInit() {      
        this.joinChatRoom();
        this.checkUserStatus();
        this.checkNewMessage();
        this.isUserTyping();
        this.checkMsgStatus();
        this.getUserStatus();
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
   //console.log("new msg received");
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
        //  console.log(length)
           for(let i=length-1;i>=0;i--){
             if(this.messageArray[i].msg_id==message.msg_id){
                  this.messageArray[i].status = message.status;
          //        console.log(this.messageArray[i]);
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
    console.log("sending msg");
    let timestamp = new Date().getUTCMilliseconds()+this.chatRoom;
    console.log(timestamp);
    let data = { userNameTo:this.userNameTo, userIdTo:this.userIdTo, room: this.chatRoom, userNameFrom: this.userName,
       message: this.message,messageType:messageType, status:'sent',msg_id :timestamp }
    //console.log(data);
    this.socketService.sendMessage(data);
    this.message = '';
  }
}



  typing() {
    this.socketService.typing({room: this.chatRoom, user: this.userService.getLoggedInUser()});
  }


  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.sendMessage('text');
    }
  }

  markRead(msg){
    //  console.log("msg status on hover : ",msg.msg_id)
      if(msg!='read'){
          console.log("msg after : ",msg)  
          this.socketService.changeMsgStatus(msg,'read');
      }
  }


  //Multimedia upload Dialog
  uploadMedia( msgType ){
    let data = { userNameTo:this.userNameTo, userIdTo:this.userIdTo, room: this.chatRoom, userNameFrom: this.userName,messageType:msgType } 
    
    const dialogRef = this.dialog.open(UploadComponent, {
      width: '100vw',
      height:'100vw',
      data: data,
     disableClose: true 
    });

    dialogRef.afterClosed().subscribe(() => {
      //console.log('The dialog was closed');
      //this.getChatMessages(); 
    });
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


//Spinner for image uploading
/*
    uploadFile(data: FormData) {

    this.uploadPrecentage = 0;
    this.uploadImageService.uploadImages(data)
      .subscribe(event => {
        console.log("event");
        if (event.type == HttpEventType.UploadProgress) {
          console.log("upload progress");
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.uploadPrecentage = percentDone;
          console.log(`File is ${percentDone}% uploaded.`);
        }

        if(event.type == HttpEventType.Response) {
           this.uploadedImages = event.body;
           this.createURL();
        }
      });
    return;
  }
*/


}

