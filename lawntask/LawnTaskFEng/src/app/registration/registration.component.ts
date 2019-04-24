import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service'

import { Router } from '@angular/router';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  
      public handleAddressChange(address: Address) {
          console.log(address);
          let addressArray = address.formatted_address.split(', ');
          let length = addressArray.length;
          this.userRegistrationForm.patchValue({
            address: {
              country: addressArray[length-1] ,
              state : addressArray[length-2] || ' ',
              city : addressArray[length-3] || ' ',
              street : addressArray[length-4] || ' '
            }
          })
      }


  userRegistrationForm : FormGroup

  constructor(private fb: FormBuilder, private authService : AuthService, private router: Router) { 

    this.createRegistrationForm();
  }
  

  ngOnInit() {
  }


 createRegistrationForm(){
   this.userRegistrationForm = this.fb.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        country: ['']
      }),
      contact : ['']
   })
 }


//  registerUser(){
//    var User = this.userRegistrationForm.value;
//    console.log(User);

   
//  }

 registerUser()
 {
   var User = this.userRegistrationForm.value;
   console.log("user form "+User);
   this.authService.registerUser(User)
   .subscribe(
     (res) => {
         console.log("registration user: "+res.data)
         let user = {
           email : User.email,
           password : User.password
         }
        
        this.loginUser(user);
     },
     err => console.log(err)
   ) 
 }

 loginUser(user)
 {
   this.authService.loginUser(user)
   .subscribe(
     res => {
       console.log(res);
       localStorage.setItem('token',res.token);
       this.router.navigate(['/lawns']);
     },
     err => console.log(err)
   )
 }

}
