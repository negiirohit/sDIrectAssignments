import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userLoginForm : FormGroup
  
  constructor(private fb: FormBuilder,  private authService : AuthService, private router : Router) { 
  
  }
    
  
  ngOnInit() {
    this.createLoginForm();    
  }
  
  
  createLoginForm(){
    this.userLoginForm = this.fb.group({
      handle : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      password : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
    })
  }
  

  loginUser() {
    let user = this.userLoginForm.value;
    this.authService.loginUser(user)
    .subscribe(
       res => {
         localStorage.setItem('token',res.data.token);
         this.router.navigate(['/user/mytweets']);
    },
    err => console.log(err))
  }

}
