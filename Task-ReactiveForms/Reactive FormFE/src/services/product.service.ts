import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';
import { Product } from '../shared/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }


  getProducts(){
	  return this.http.get<any>(baseURL+'/products');
  }

  createProducts(products){
	   return this.http.post<Product[]>(baseURL+'/products',products);
  }

  removeProduct(SKU) {
    return this.http.delete<Product[]>(baseURL+'/products/remove/'+SKU);
  }

  updateProduct(product,SKU) {
    return this.http.put<Product>(baseURL+'/products/update/'+SKU,product);
  }
}
