import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {


  company : any;
  constructor(private route: ActivatedRoute,private companyService : CompanyService, private router: Router ) { }

  ngOnInit() {
      this.getParams();
  }

  getParams(){
    this.route.queryParams
    .subscribe(params => {
        let company_id = params.company_id;
        console.log("company_id" +company_id);
        this.getCompanyDetail(company_id);
    });
  }

  getCompanyDetail(company_id){
      this.companyService.getCompanyDetail(company_id)
      .subscribe( res => {
        if(res.success){
          console.log("Job Details fetched succesfuly")
          console.log("companiy res "+JSON.stringify(res));
          this.company = res.data;
          console.log(this.company);
        }
        else{
          console.log("error occured ")
          console.log(JSON.stringify(res));
        }

      } )
  }

  viewJob(job_id){
      console.log(job_id);
      this.router.navigate(['/jobDetail'], { queryParams: { job_id: job_id } });      
  }



}