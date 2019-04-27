import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/app/shared/baserurl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }
  
  //Check if any user is logged in or not
  checkLoggedin(){
    return !!localStorage.getItem('token')    
  }
  //verifyUser from backend
  isAuthenticatedUser(){
      if(this.checkLoggedin()){
        let token = localStorage.getItem('token');
          // check if token is set, then...
          if (token) {
              //.......check from backend
              return true;
          }
      
          return false;
    }
  }   
  //Register User
  registerUser(user){
    return this.http.post<any>(baseURL+'/users/register',user);
  }
  //Login User
  loginUser(user) {
    return this.http.post<any>(baseURL+'/users/login',user);
  }
  //Log out User
  logOutUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }  
}
