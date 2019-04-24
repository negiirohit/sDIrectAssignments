import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(page_no:number,page_limit:number){
    return this.http.get<any>(baseURL+'/posts/getPostsPagination/'+page_no+'/'+page_limit);
  }
}
