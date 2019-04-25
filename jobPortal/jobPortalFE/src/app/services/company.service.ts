import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl' 
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient,private router: Router) { }

  getCompanyProfile() {
    return this.http.get<any>(baseURL+'/companies/getCompanyProfile');
  }

  createJob(job){
    return this.http.post<any>(baseURL+'/jobs/createJob',job);
  }

  getDistinct(field){
    return this.http.get<any>(baseURL+'/companies/getDistinct/'+field)   
  }
  
  getCompanies(field,value,page_no,page_limit){
    // console.log("in side service: "+field+"value ")
     return this.http.get<any>(baseURL+'/companies/getCompanies/'+field+'/'+value+'/'+page_no+'/'+page_limit);
   }

   getCompanyDetail(company_id){
    return this.http.get<any>(baseURL+'/companies/getCompanyDetail/'+company_id);
   }
}
