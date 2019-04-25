import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class JPRegistrationComponent implements OnInit {

  registrationForm : FormGroup;
  constructor(private fb: FormBuilder, private authService : AuthService, private router: Router) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm(){
      this.registrationForm = this.fb.group({
        company_title : [''],
        company_type : [''],
        year_founded : [''],
        size:[],
        website:[],
        description:[],
        UIN : [''],
        password : [''],
        domain : ['']
        
      })
  }

 
  registerCompany(){
    let user = this.registrationForm.value;
    console.log(user);
    this.authService.registerCompany(user)
    .subscribe(res => {
        if(res.success){
          console.log('user created');
          console.log(res.data)
          this.authService.loginCompany(user)        
        }
        else
        {
          console.log("error occured");
          console.log(JSON.stringify(res));
        }
      })
    
  }

}
