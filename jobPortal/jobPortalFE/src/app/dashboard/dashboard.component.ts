import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { PagerService } from '../services/pager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search : any;
  
  constructor(private router: Router){
    
  }
  ngOnInit() {
  }

    searchJobs(){
      console.log(this.search);  
      this.router.navigate(['/jobs'],{ queryParams : {field:'search',value: this.search } });
  }

  
}



 


