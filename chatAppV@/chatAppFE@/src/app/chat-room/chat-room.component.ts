import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';

import { UploadComponent } from 'src/app/upload/upload.component';
//Dialog 
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


  constructor(private route : ActivatedRoute, private socketService : SocketService, 
              private userService : UserService, private router : Router,private dialog: MatDialog) {

  }

  ngOnInit() {      
        this.joinChatRoom();
        this.socketService.goOnline();
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
   console.log("new msg received");
   this.messageArray.push(message); 
   if(message.userNameFrom!=this.userName){
       this.socketService.changeMsgStatus(message,'delivered');   
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
          console.log(length)
           for(let i=length-1;i>=0;i--){
             if(this.messageArray[i].msg_id==message.msg_id){
                  this.messageArray[i].status = message.status;
                  console.log(this.messageArray[i]);
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

  markRead(i){
      console.log(this.messageArray[i]);
      if(this.messageArray[i].status!='read'){
          this.socketService.changeMsgStatus(this.messageArray[i],'read');
      }
  }


  //Multimedia upload Dialog
  uploadMedia(  ){
    let data = { userNameTo:this.userNameTo, userIdTo:this.userIdTo, room: this.chatRoom, userNameFrom: this.userName} 
    const dialogRef = this.dialog.open(UploadComponent, {
      width: '100vw',
      height:'100vw',
      data: data,
     disableClose: true 
    });

    dialogRef.afterClosed().subscribe(() => {
      //console.log('The dialog was closed');
      this.getChatMessages(); 
    });
  }
  


  //Open Image for preview
  preview(){
    let modal = document.getElementById('myModal');    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let img = <HTMLImageElement>document.getElementById('myImg');
    let modalImg = <HTMLImageElement>document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = <HTMLElement>document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
  }
}
