import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  jobSeekerRegistrationForm : FormGroup
  constructor(private fb: FormBuilder,private router: Router,private authService : AuthService) { }

  ngOnInit() {
      this.createSeekerRegistrationForm()
  }

  createSeekerRegistrationForm(){
    this.jobSeekerRegistrationForm = this.fb.group({
       firstName : [''],
       lastName : [''],
       email : [''],
       password : [''],
       confirmPassword : ['']
    })
  }

  registerJobSeeker(){
    
    let user=this.jobSeekerRegistrationForm.value;
    console.log("register user "+ JSON.stringify(user));    
    this.authService.registerSeeker(user)
    .subscribe( res => {
      if(res.success){
          console.log('job seeker registration succesful');
          console.log(JSON.stringify(res));
          localStorage.setItem('newUser','true');
          this.loginUser(user);
      }
      else  
        console.log('job Seeker registration failed');
        console.log(JSON.stringify(res));
    })

  }


  loginUser(user){
    this.authService.loginSeeker(user);
    // .subscribe(
    //   res => {
    //     if(res.success)
    //      {
    //        console.log('login success');
    //        console.log(JSON.stringify(res));
    //        localStorage.setItem('token',res.token);
    //        localStorage.setItem('userType','JobSeeker');
    //        this.router.navigate(['/seekerProfile']);   
    //      }
    //      else{
    //         console.log('login success');
    //         console.log(JSON.stringify(res));
    //       }

    //    },
    //   err => console.log(err)
    // )
}
}