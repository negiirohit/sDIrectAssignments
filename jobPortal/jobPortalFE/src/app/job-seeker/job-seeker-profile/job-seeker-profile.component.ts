import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';



@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css']
})
export class JobSeekerProfileComponent implements OnInit {
  user: { name: string; };

  domains = ['IT','Management','Art']
  profileForm : FormGroup;
  constructor(private fb: FormBuilder, private jobService : JobService ) { }

  ngOnInit() {
    this.createProfileForm()
    this.addEventListner()
    this.getUser()
  }

  createProfileForm(){
      this.profileForm = this.fb.group({
        domain:[''],
        keySkills:this.fb.array([ this.fb.control('')]),
        qualifications:this.fb.group({
            HighSchool : this.fb.group({
                year : [''],
                board :[''],
                subjects :[''],
                percentage :['']
            }),
            InterMediate : this.fb.group({
              year : [''],
              board :[''],
              subjects :[''],
              percentage :['']
           }),
           Graduation : this.fb.group({
              year : [''],
              university :[''],
              percentage :[''],
              course:['']
           }), 
           PG: this.fb.group({
            year : [''],
            university :[''],
            percentage :[''],
            course:['']
           })
        }),

      })

  }

  //Get User
  getUser(){
    this.user = {name:'Rohit Negi' }
  }

  //form Array Manipulation
  get keySkills(){
    return this.profileForm.get('keySkills') as FormArray;
  }

  addKeySkill() {
    this.keySkills.push(this.fb.control(''));
    console.log(this.keySkills);
  }

  removeSkill(index:number){
    this.keySkills.removeAt(index);    
  }

  addEventListner(){
    var buttons = document.querySelectorAll(".qualBtn");
    
    // Loop through the resulting array
    for(var i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click", function(e) {
          console.log(e.srcElement.nextElementSibling);
          var ele = e.srcElement.nextElementSibling as HTMLElement;
     //     console.log(ele);
          
           if (ele.style.display == "none") {
           ele.style.display = "block";
           } else {
           ele.style.display = "none";
           }
      });
    }
  }

  //update user
  updateUser(){
    let userProfile = this.profileForm.value;
    console.log("updating user");
    console.log(userProfile);
    this.jobService.updateSeekerProfile(userProfile)
    .subscribe(res => {
      if(res.success)
      {
        console.log(res.data);
      }
    })
  }


}
