import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  constructor(private http: HttpClient,private router: Router) { }
  

  updateSeekerProfile(user){
    return this.http.post<any>(baseURL+'/seeker/updateProfile',user);
  }

  getSeekerProfile() {
    return this.http.get<any>(baseURL+'/seeker/getProfile' );
  }
  removeApplication(job_id){
    return this.http.post<any>(baseURL+'/seeker/removeApplication',job_id);    
  }

}
