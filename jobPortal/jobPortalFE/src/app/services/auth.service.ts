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

  loginUser(){
    
  }
  logOutUser()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
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