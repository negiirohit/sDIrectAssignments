
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';
import { SeekerService } from 'src/app/services/seeker.service';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  user: { name: string; };
  domains = ['IT','Management','Art']
  profileForm : FormGroup;
  constructor(private fb: FormBuilder, private jobService : JobService , 
    private seekerService : SeekerService) { }

  ngOnInit() {
    this.createProfileForm()
    this.addEventListner()
   
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

      this.getUser();
  }

  //Get User
  getUser(){
    this.seekerService.getSeekerProfile()
    .subscribe( res => {
      console.log("get seeker res: "+JSON.stringify(res));
      if(res.success){
          this.user = res.data
      }
    })
    
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
      console.log(res);
      if(res.success)
      {
        console.log(res.data);
      }
    })
  }


}
