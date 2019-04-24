import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userLoginForm : FormGroup
  
    constructor(private fb: FormBuilder,  private authService : AuthService, private router : Router) { 
  
      this.createLoginForm();
    }
    
  
    ngOnInit() {
    }
  
  
   createLoginForm(){
     this.userLoginForm = this.fb.group({
        email : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
        password : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
     })
   }
  
  
   loginUser(){
     var User = this.userLoginForm.value;
     console.log(User);
     this.authService.loginUser(User)
     .subscribe(
       res => {
         console.log(JSON.stringify(res));
         localStorage.setItem('token',res.token);
         this.router.navigate(['/lawns']);
       },
       err => console.log(err)
     )
   }
  
  

}