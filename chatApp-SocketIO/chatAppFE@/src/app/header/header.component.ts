import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService : AuthService,public socketService : SocketService) { }

  ngOnInit() {
    this.checkNewUser();
  }

  checkNewUser(){
    this.socketService.newUserLoggedIn().subscribe(data => {
      console.log("new user logged in :",JSON.stringify(data));
    });
   }
    
}
