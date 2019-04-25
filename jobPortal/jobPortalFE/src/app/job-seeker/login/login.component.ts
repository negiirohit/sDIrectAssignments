import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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
        email : [''],
        password : [''],
     })
   }
  
  
   loginUser(){
     var User = this.userLoginForm.value;
     console.log(User);
     this.authService.loginSeeker(User)
    //  .subscribe(
      //  res => {
        //  if(res.success)
          // {
            // console.log(JSON.stringify(res));
            // localStorage.setItem('token',res.token);
            // localStorage.setItem('userType','JobSeeker');
            // this.router.navigate(['/seekerProfile']);   
          // }
          // else
            // console.log(JSON.stringify(res));
          
        // },
      //  err => console.log(err)
    //  )
}

}
