import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }
  

  registerSeeker(user){
    console.log("registering job seeker: "+user)
    return this.http.post<any>(baseURL+'/seeker/register',user);
  }

  registerCompany(user) {
    return this.http.post<any>(baseURL+'/company/register',user);
  }

  loginSeeker(user) {
    return this.http.post<any>(baseURL+'/seeker/login',user);
  }

  loginCompany(user) {
    return this.http.post<any>(baseURL+'/company/login',user);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  logOutUser()
  {
    localStorage.removeItem('userType');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  checkUserType(): String{

    //Check for token if not token return
    if(!localStorage.getItem('token'))
      return;
    let userType = localStorage.getItem('userType');
    if(userType=='Company') 
      return 'Company'; 
    if(userType=='JobSeeker') 
      return 'JobSeeker'

    return;
  }

  isAuthenticated() {
    // get the auth token from localStorage
    let token = localStorage.getItem('token');

    // check if token is set, then...
    if (token) {
        return true;
    }

    return false;
}
}