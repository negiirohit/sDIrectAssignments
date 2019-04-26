import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { CompanyService } from 'src/app/services/company.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  search : any = 'jobs';
  jobFields : any = {};
  companyFields : any = {};
  //jobLocations : any;
  //jobDomains : any;
  // companyLocations: any;
  //companyDomains: any;
  constructor(private router: Router,private jobService : JobService, private companyService : CompanyService, private authService : AuthService) { }

  ngOnInit() {
    this.getDistinctField('location');
    this.getDistinctField('domain');
  }

  getDistinctField(field): any {

    this.jobService.getDistinct(field)
    .subscribe( (res) => {
   //     console.log(res.data);
        this.jobFields[field]=res.data
        console.log('job details: ' +JSON.stringify(this.jobFields));
      } )
  
    this.companyService.getDistinct(field)
    .subscribe( (res) => {
        console.log(res);
        this.companyFields[field]=res.data
        console.log('company details: ' +JSON.stringify(this.companyFields));
        
      } )

      
  }



  searchJobs(){
      console.log(this.search);  
      this.router.navigate(['/jobs'],{ queryParams : {field:'search',value: this.search } });
  }
  

}
