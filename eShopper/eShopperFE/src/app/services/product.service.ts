import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(baseURL+'/products');
  }

  getFeaturedProducts() {
    return this.http.get<any>(baseURL+'/products/featured');
  }

  //For Pagination
  getFeaturedProductsPagination(page_no,page_limit) {
    return this.http.get<any>(baseURL+'/products/featured/pagination/'+page_no+'/'+page_limit);
  }
}
