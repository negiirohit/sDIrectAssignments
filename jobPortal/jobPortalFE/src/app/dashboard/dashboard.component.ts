import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { PagerService } from '../services/pager.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jobs:any;
  // pager object
  pager: any = {};
  
  // paged items
  page_limit = 10;
  product_count : number;
  constructor(private jobService : JobService,private pagerService : PagerService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    
    
        // get objects
        this.jobService.getAllJobs(page,this.page_limit)
        .subscribe(res =>{
         // console.log(res.data.jobs)
          this.jobs = res.data.jobs;
        } )
        
        //
    
        // get pager object from service
        this.pager = this.pagerService.getPager(this.product_count, page,this.page_limit);
    
        // get current page of items
      
    }

  
}



 


