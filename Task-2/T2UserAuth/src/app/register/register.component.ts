import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm : FormGroup;
  registerUser : any;

  formErrors = {
    'firstName':'',
    'lastName':'',
    'email':'',
    'gender':'',
    'DOB':'',
    'password':''
  };

  validationMessages = {
    'firstName': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastName': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'email': {
      'required':      'email  is required.',
      'pattern':       'Please enter a valid email address'
    },
    'password':{
      'required': 'Password is required',
      'minlength': 'Password must contain 8 characters'
    }
  }

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createRegistrationForm();
  }


  createRegistrationForm() {
      this.registrationForm = this.fb.group({
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        password: ['', [Validators.required, Validators.minLength(8)] ],
        email: ['', [Validators.required, Validators.email] ],
        gender: [''],
        DOB:''

      })
  


  this.registrationForm.valueChanges
  .subscribe(field => this.onValueChange(field));
  }
  
  
  onValueChange(field? : any) {

    const form = this.registrationForm
    for (const field in this.formErrors) {
      
              if (this.formErrors.hasOwnProperty(field)) {
                    this.formErrors[field] = '';
                    const control = form.get(field);
               
               
                    if (control && control.dirty && !control.valid) {
                              const messages = this.validationMessages[field];
                             
                             
                              for (const key in control.errors) {
                                          if (control.errors.hasOwnProperty(key)) {
                                            this.formErrors[field] += messages[key] + ' ';
                                          }
                              }
                }
              }
            
            
            }
  }
}