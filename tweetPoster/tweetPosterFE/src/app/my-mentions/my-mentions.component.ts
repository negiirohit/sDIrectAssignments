import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';



@Component({
  selector: 'app-my-mentions',
  templateUrl: './my-mentions.component.html',
  styleUrls: ['./my-mentions.component.css']
})
export class MyMentionsComponent implements OnInit {

  constructor(private tweetService: TweetService) { }


  tweets : any;
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
    let tweet: any;
    this.tweetService.postTweet(tweet)
    .subscribe( res => {
      if(res.success){
          this.fetchTweets();
      }
    })
  }


}
