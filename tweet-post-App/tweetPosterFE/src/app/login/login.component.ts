import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service'
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userLoginForm : FormGroup
  loginError : string;
  constructor(private fb: FormBuilder,  private authService : AuthService, private router : Router
  ,  private title: Title,private meta: Meta) { 
  
  }
    
  
  ngOnInit() {
    this.title.setTitle('Tweet app login');
    this.meta.updateTag({
        'description': 'login twitter'
    });

    this.createLoginForm();    
  }
  
  
  createLoginForm(){
    this.userLoginForm = this.fb.group({
      handle : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      password : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
    })

    this.userLoginForm.valueChanges
    .subscribe( data=> {
        this.loginError='';
    })
  }
  

  loginUser() {
    this.loginError = "";
    let user = this.userLoginForm.value;
    this.authService.loginUser(user)
    .subscribe(
       res => {
         if(res.success){
          console.log('login success');
          localStorage.setItem('token',res.data.token);
          this.router.navigate(['/user/mytweets']);
         }
         //console.log(res);
         if(res.success===false){
           this.loginError = res.message; 
         }
    },
    err => console.log(err))
  }

}
