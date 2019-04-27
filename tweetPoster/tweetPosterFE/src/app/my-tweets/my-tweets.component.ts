import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css']
})
export class MyTweetsComponent implements OnInit {

  tweetPost : any;
  tweets : any;
  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.fetchTweets();
  }

  fetchTweets(){
      this.tweetService.getTweets()
      .subscribe(res => {
        this.tweets= res.data.tweets;
      } )
  }


  postTweet(){
    console.log("post " +this.tweetPost)
    this.tweetService.postTweet(this.tweetPost)
    .subscribe( res => {
      if(res.success){
          this.fetchTweets();
      }
    })
  }

}






  


