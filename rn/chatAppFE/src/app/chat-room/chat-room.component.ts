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


  username: String;
  email: String;
  chatroom;
  message: String;
  //messageArray: Array<{user: String, message: String}> = [];
  isTyping = false;
 

  constructor(private route : ActivatedRoute, private socketService : SocketService, 
              private userService : UserService, private router : Router) {

      // this.socketService.newMessageReceived().subscribe(data => {
      // this.messageArray.push(data);
      // this.isTyping = false;
      // });
      // this.socketService.receivedTyping().subscribe(bool => {
          // this.isTyping = bool.isTyping;
      // });
 }

  ngOnInit() {
    this.username = this.route.snapshot.queryParamMap.get('name');
    this.email = this.route.snapshot.queryParamMap.get('id');
    

   const currentUser = this.userService.getLoggedInUser();
     if ( currentUser < this.username) {
         this.chatroom = currentUser + this.username;
     } else {
         this.chatroom = this.username + currentUser;
     }

     console.log(this.chatroom);
     this.socketService.joinRoom({user: this.userService.getLoggedInUser(), room: this.chatroom});
    // this.userService.getChatRoomsChat(this.chatroom).subscribe(messages => {
    // this.messageArray = messages.json();
}
  

  sendMessage() {
    this.socketService.sendMessage({room: this.chatroom, user: this.userService.getLoggedInUser(), message: this.message});
    this.message = '';
  }

  typing() {
    this.socketService.typing({room: this.chatroom, user: this.userService.getLoggedInUser()});
}

}
