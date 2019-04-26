import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-job-detail',
  templateUrl: './company-job-detail.component.html',
  styleUrls: ['./company-job-detail.component.css']
})
export class CompanyJobDetailComponent implements OnInit {

  job : any;
  constructor(private jobService : JobService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  getParams(){
    this.route.queryParams
    .subscribe(params => {
        let job_id= params.job_id;
        this.getJobDetails(job_id);
    });
  }


  getJobDetails(job_id){
    this.jobService.getJobDetail(job_id)
    .subscribe(res => {
      if(res.success){
          console.log("Job Details fetched succesfuly")
          this.job = res.data;
          console.log(this.job);
      }
      console.log(JSON.stringify(res));
    })
  }

  approveUser(user_id){
      console.log(user_id);
      let details = {
        user_id :user_id,
        job_id : this.job._id
      }
      this.jobService.approveUser(details)
      .subscribe(res => {
        if(res.success){
            console.log("Approved Succesfuly")
            this.job = res.data;
            console.log(this.job);
        }
        console.log(JSON.stringify(res));
      })

  }

  declineUser(user_id){
    console.log(user_id);
    let details = {
      user_id :user_id,
      job_id : this.job._id
    }
    this.jobService.declineUser(details)
    .subscribe(res => {
      if(res.success){
          console.log("User Declined");
          this.job = res.data;
          console.log(this.job);
      }
      console.log(JSON.stringify(res));
    })

}

}
