import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { CompanyService } from 'src/app/services/company.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  jobDetails : any = {};

  //jobLocations : any;
  //jobDomains : any;
  // companyLocations: any;
  //companyDomains: any;
  constructor(private jobService : JobService, private companyService : CompanyService, private authService : AuthService) { }

  ngOnInit() {
    this.getDistinctField('location');
    this.getDistinctField('domain');
  }

  getDistinctField(field): any {

    this.jobService.getDistinct(field)
    .subscribe( (res) => {
   //     console.log(res.data);
        this.jobDetails[field]=res.data
        //console.log('job details: ' +JSON.stringify(this.jobDetails));
      } )
  }

}
