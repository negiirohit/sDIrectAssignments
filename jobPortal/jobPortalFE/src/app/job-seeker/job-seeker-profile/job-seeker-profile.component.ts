import { Component, OnInit } from '@angular/core';
import { SeekerService } from 'src/app/services/seeker.service';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css']
})
export class JobSeekerProfileComponent implements OnInit {
  user: any;


  constructor(private jobService : JobService , 
    private seekerService : SeekerService, private router: Router) { }

  ngOnInit() {
      this.getUser();
  }

  //Get User
  getUser(){
    this.seekerService.getSeekerProfile()
    .subscribe( res => {
      //console.log("get seeker res: "+JSON.stringify(res));
      if(res.success){
          this.user = res.data
          console.log(this.user.appliedJobs);
      }
    })
    
  }

  viewJob(job_id){
    console.log(job_id);
    this.router.navigate(['/jobDetail'], { queryParams: { job_id: job_id } });      
}

}
