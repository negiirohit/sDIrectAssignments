
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {


  userLoginForm : FormGroup
  
    constructor(private fb: FormBuilder,  private authService : AuthService, private router : Router) { 
  
      this.createLoginForm();
    }
    
  
    ngOnInit() {
    }
  
  
   createLoginForm(){
     this.userLoginForm = this.fb.group({
        UIN : [''],
        password : [''],
     })
   }
  
  
   loginUser(){
     var User = this.userLoginForm.value;
     console.log(User);
     this.authService.loginCompany(User)
     .subscribe(
       res => {
        if(res.success)
        {
         console.log(JSON.stringify(res));
         localStorage.setItem('token',res.token);
         localStorage.setItem('userType','Company');
         this.router.navigate(['/company/profile']);
        }
        else 
        {
          console.log(res);
        } 
        },
       err => console.log(err)
     )
}

}
