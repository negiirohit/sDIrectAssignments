import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baserurl';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router,public localStorage: LocalStorageService) { }
  
  //Check if any user is logged in or not
  loggedIn(){
    return !!this.localStorage.getItem('token')    
  }
  //verifyUser from backend
  isAuthenticatedUser(){
      if(this.loggedIn()){
        let token = this.localStorage.getItem('token');
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
    console.log("login user: "+JSON.stringify(user));
    return this.http.post<any>(baseURL+'/users/login',user);
  }
  //Log out User
  logOutUser() {
    this.localStorage.removeItem('user');
    this.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }  
}
