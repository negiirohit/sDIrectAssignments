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
    
      this.setTitle();    
      this.setPage(1);
    });
    
  }

  setTitle(){
    if(this.field == 'search')
      this.title ='Showing related jobs to ' + this.value;       
    else if(this.field!='all')
      this.title = 'Jobs By ' + this.field + ' in ' + this.value; 
    else   
      this.title = 'Showing All Jobs'
  }

  setPage(page: number) {
        this.jobService.getJobs(this.field,this.value,page,this.page_limit)    
        .subscribe(res =>{
          if(res.data.jobs.length>0)
          {
            this.jobs = res.data.jobs;
            console.log(this.jobs);
            this.job_count=res.data.count;
            this.pager = this.pagerService.getPager(this.job_count, page,this.page_limit);   
          }
        } )
      
    }


  apply(job_id){
    console.log('Job Id: '+job_id);
    this.router.navigate(['/jobDetail'], { queryParams: { job_id: job_id } });
  }

  //routerLink="/jobs" 


}



 


