import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { PagerService } from '../services/pager.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  value: void;
  field: any;
  
  job_count: any;  
  jobs:any;
  // pager object
  pager: any = {};
  // paged items
  page_limit = 10;
  
  title : any;
  constructor(private jobService : JobService,private pagerService : PagerService,
  private route: ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.field = params.field;
      this.value = params.value;  
      if(this.field!='all')
        this.title = 'Jobs By ' + this.field + ' in ' + this.value; 
      else  
        this.title = 'Showing All Jobs'
      this.setPage(1);
    });
    
  }

  setPage(page: number) {
        this.jobService.getJobs(this.field,this.value,page,this.page_limit)    
        .subscribe(res =>{
          if(res.data.jobs.length>0)
          {
            this.jobs = res.data.jobs;
            this.job_count=res.data.count;
            this.pager = this.pagerService.getPager(this.job_count, page,this.page_limit);   
          }
        } )
      
    }


  apply(job_id){
    console.log('Job Id: '+job_id);
    if(localStorage.getItem('userType')=='JobSeeker'){
        this.jobService.applyForJob(job_id)
        .subscribe( (res)=> {
          if(res.success){
              console.log('Job applied succesfully ');
            //  this.router.navigate() navigate User Profile
              
          }
        } )
    }
    else {
      console.log("Please login first");
    }
  }

}



 


