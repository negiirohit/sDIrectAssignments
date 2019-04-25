import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient,private router: Router) { }

  getAllJobs(page_no,page_limit){
    return this.http.get<any>(baseURL+'/jobs/getAllJobs/'+page_no+'/'+page_limit);
  }

  updateSeekerProfile(user){
    return this.http.post<any>(baseURL+'/seeker/updateProfile',user);
  }

  //get all availabe fields such as domain or location
  getDistinct(field){
    return this.http.get<any>(baseURL+'/jobs/getDistinct/'+field)   
  }

  getJobs(field,value,page_no,page_limit){
   // console.log("in side service: "+field+"value ")
    return this.http.get<any>(baseURL+'/jobs/getJobs/'+field+'/'+value+'/'+page_no+'/'+page_limit);
  }

  applyForJob(job_id){
    console.log('job_id: '+job_id);
    return this.http.post<any>(baseURL+'/jobs/apply',{'job_id':job_id});
  }

  getJobDetail(job_id){
    return this.http.get<any>(baseURL+'/jobs/getJobDetail/'+job_id);
  }


  checkAppliedJob(job_id){
    
  }
  
}
