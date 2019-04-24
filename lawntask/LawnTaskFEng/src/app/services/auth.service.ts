import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  registerUser(user) {
    console.log(baseURL);
    return this.http.post<any>(baseURL+'/users/register',user);
  }

  loginUser(user) {
    return this.http.post<any>(baseURL+'/users/login',user);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
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