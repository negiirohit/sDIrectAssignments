import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id : any;
  profile: any;
  constructor(private tweetService : TweetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParam();    
  }

  getParam(){
        this.id = this.route.snapshot.paramMap.get('id')
        this.getProfile();
  }

  getProfile(){
    console.log("getting profile");
    this.tweetService.getProfile(this.id).subscribe
    (res => {
      if(res.success){
        this.profile = res.data.user;
        console.log(this.profile);
      }
      console.log(res);
    })
  }
}
