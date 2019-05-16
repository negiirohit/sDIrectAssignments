import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegistrationForm : FormGroup
  registrationError : any;
  constructor(private fb: FormBuilder, private authService : AuthService, private router: Router) { 
  
  }
    
  
  ngOnInit() {
    this.createRegistrationForm();    
  }

  createRegistrationForm(){
    this.userRegistrationForm = this.fb.group({
       name : [''],
       handle : [''],
       password : ['']
    })
    this.userRegistrationForm.valueChanges
    .subscribe( data=> {
        this.registrationError='';
    })
  }



  registerUser()
  {
    let User = this.userRegistrationForm.value;
    
    this.authService.registerUser(User)
    .subscribe( (res) => {
        if(res.success){
          console.log('Registration success');
          this.loginUser(User);
        }
        else{
          this.registrationError = res.message;
        }
         
    },err => {

    }) 
 }

 loginUser(user)
 {
   this.authService.loginUser(user)
   .subscribe(
     res => {
       console.log('login success');      
       localStorage.setItem('token',res.data.token);
       this.router.navigate(['/user/mytweets']);
     },
     err => console.log("error occured: "+err)
   )
}

}
