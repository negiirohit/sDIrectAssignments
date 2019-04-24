import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    username:"",
    password:""
  };

  registerUserData = {
    name:"",
    username:"",
    password:""
  };
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }

  loginUser()
  {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

  registerUser()
  {
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      (res) =>{
          console.log(res)
          this.loginUserData.username = this.registerUserData.username;
          this.loginUserData.password = this.registerUserData.password;
          this.loginUser();
      },
      err => console.log(err)
    )
  }
}