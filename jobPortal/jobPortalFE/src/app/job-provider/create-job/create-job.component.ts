import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Provider } from '@angular/core/src/render3/jit/compiler_facade_interface';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  jobForm : FormGroup;
  constructor(private fb: FormBuilder,private companyService: CompanyService,private router: Router) { }

  ngOnInit() {
    this.createJobForm();
  }

  createJobForm(){
      this.jobForm = this.fb.group({
        post:[],
        location:[],
        description:[],
        requiredSkills:[],
        domain:[''],
        email:[''],
        salary: [''],
        experience :[]
      })
  }


 createJob(){
    let job =  this.jobForm.value;
    console.log(job);
    this.companyService.createJob(job)
    .subscribe(res => {
      console.log(res);
       if(res.success)
       {
         console.log(res.data);
         this.router.navigate(['/company/profile']);
       }
       else
       {
         console.log("error occured ");
         console.log(JSON.stringify(res));
       }
    })
  }
}
