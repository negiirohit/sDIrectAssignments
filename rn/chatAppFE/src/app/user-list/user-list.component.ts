import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : any;

  constructor(private userService : UserService, private router : Router) { }
  
  ngOnInit() {
      this.getAllUsers();
  }
  
  getAllUsers(){
      this.userService.getUsers()
      .subscribe( (res) => {
          if(res.success){
            this.users = res.data.users;
          }
      })
  }

  goToChatRoom(user){
    console.log(user);
    this.router.navigate(['user/chatroom'], { queryParams: { name: user.name, id: user._id} });
  }

}
