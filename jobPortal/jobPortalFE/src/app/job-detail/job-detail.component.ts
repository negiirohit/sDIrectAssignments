import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job : any;
  constructor(private route: ActivatedRoute,private jobService : JobService, private router: Router ) { }

  ngOnInit() {
      this.getParams();
      this.getParams();
  }

  getParams(){
    this.route.queryParams
    .subscribe(params => {
        let job_id = params.job_id;
        console.log("job _id" +job_id);
        this.getJobDetail(job_id);
    });
  }

  getJobDetail(job_id){
      this.jobService.getJobDetail(job_id)
      .subscribe( res => {
        if(res.success){
          console.log("Job Details fetched succesfuly")
          this.job = res.data;
          console.log(this.job);
        }
        else{
          console.log("error occured ")
          console.log(JSON.stringify(res));
        }

      } )
  }

  apply(){

    if(localStorage.getItem('userType')=='JobSeeker'){
      this.jobService.applyForJob(this.job._id)
      .subscribe( (res)=> {
        if(res.success){
            console.log('Job applied succesfully ');
          //  this.router.navigate() navigate User Profile
       
        }
        else
        {
          console.log(JSON.stringify(res));
        }
      } )
  }
  else {
    let url = this.router.url;
    console.log("Please login first");
    console.log(url);
    localStorage.setItem('refURL',url);
    this.router.navigate(['/login']);    
  }


  }

}
