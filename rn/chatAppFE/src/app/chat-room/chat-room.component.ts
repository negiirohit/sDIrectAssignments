import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';

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
  
  //fetch the chat room for two users
  chatRoom : string

  //Message Details
  message: string;
  messageArray: any = [];
  isTyping = false;
 

  constructor(private route : ActivatedRoute, private socketService : SocketService, 
              private userService : UserService, private router : Router) {

      //On receiving new message
      this.socketService.newMessageReceived().subscribe(data => {
        this.messageArray.push(data);
        this.isTyping = false;
      });

       //When other user is typing
      this.socketService.receivedTyping().subscribe(bool => {
        this.isTyping = bool.isTyping;
      });

      // this.socketService.
 }

  ngOnInit() {

    //fetch user id and name from query param
    this.userIdTo = this.route.snapshot.queryParamMap.get('id');
    this.userNameTo = this.route.snapshot.queryParamMap.get('name');
    this.userName = this.userService.getLoggedInUser();
    //Get the chat room from 


    this.userId = this.userService.getLoggedInUserId();
      if ( this.userId < this.userIdTo) {
          this.chatRoom = this.userId.concat(this.userIdTo);
      } else {
        this.chatRoom =  this.userIdTo.concat(this.userId);        
      }

     this.socketService.joinRoom({user: this.userService.getLoggedInUser(), room: this.chatRoom});
     this.getChatMessages();
}

  getChatMessages(){
    this.userService.getChatMessages(this.chatRoom)
    .subscribe( res => {
      this.messageArray = res.data.messages;
      console.log("chat message res "+JSON.stringify(this.messageArray))
    } )
  }

  sendMessage() {
    let data = {userNameTo:this.userNameTo, userIdTo:this.userIdTo, room: this.chatRoom, userNameFrom: this.userName, message: this.message}
    console.log(data);
    this.socketService.sendMessage(data);
    this.message = '';
  }

  typing() {
    this.socketService.typing({room: this.chatRoom, user: this.userService.getLoggedInUser()});
  }

}
