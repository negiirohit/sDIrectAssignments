import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/app/shared/baserurl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient,private router: Router) { }


  getTweets(){

  }

  getMentions(){

  }

}
