import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baserurl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient,private router: Router) { }


  getTweets(){
    return this.http.get<any>(baseURL+'/users/getTweets');    
  }

  getMentions(){
    return this.http.get<any>(baseURL+'/users/getMentions');    
  }

  postTweet(tweet){
    console.log("tweet post service: "+tweet);
    return this.http.post<any>(baseURL+'/users/createTweet',tweet);    
  }

  getHandles(handle){
    return this.http.get<any>(baseURL+'/users/findHandles/'+handle);    
  }

  getAllHandles(){
    return this.http.get<any>(baseURL+'/users/findAllHandles/');        
  }

  getProfile(user_id){
    return this.http.get<any>(baseURL+'/users/getProfile/'+user_id);
  }

}
