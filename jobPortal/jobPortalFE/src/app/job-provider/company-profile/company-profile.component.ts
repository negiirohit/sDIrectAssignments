import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  company:any;
  constructor(private companyService:CompanyService,private router : Router) { }

  ngOnInit() {
    console.log('on init called');
    this.getCompanyDetails();
  }

  getCompanyDetails(){
    this.companyService.getCompanyProfile()
    .subscribe(res => {
      if(res.success)
      {
        console.log(res.data);
        this.company = res.data;
        
      }
      else
      {
        console.log("error occured ");
        console.log(JSON.stringify(res));
      }
    })
  }

  viewMore(job_id){
    console.log(job_id);
    this.router.navigate(['/company/jobDetails'],{ queryParams: { job_id: job_id } });
  }
}
