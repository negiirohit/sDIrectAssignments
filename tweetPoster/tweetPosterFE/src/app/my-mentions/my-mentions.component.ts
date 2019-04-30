import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';



@Component({
  selector: 'app-my-mentions',
  templateUrl: './my-mentions.component.html',
  styleUrls: ['./my-mentions.component.css']
})
export class MyMentionsComponent implements OnInit {

  constructor(private tweetService: TweetService) { }


  mentionedTweets : any;
  ngOnInit() {
    this.fetchMentionedTweets();
  }

  fetchMentionedTweets(){
      this.tweetService.getMentions()
      .subscribe(res => {
        if(res.success){
          console.log("Fetch mentioned tweet success ");
          this.mentionedTweets= res.data.tweets;          
        }
        console.log(res);     
      } )
  }
}
