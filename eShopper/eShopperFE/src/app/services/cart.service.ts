import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart() {
    return this.http.get<any>(baseURL+'/users/cart');
  }

  addItemCart(item) {
    return this.http.post<any>(baseURL+'/users/cart/addItem',item);
  }

  addItemsCart(items) {
    return this.http.post<any>(baseURL+'/users/cart/addItems',items);
  }
}
