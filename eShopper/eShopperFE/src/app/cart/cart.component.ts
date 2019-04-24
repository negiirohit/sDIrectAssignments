import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Cart[];
  constructor(private cart: CartService) { }

  ngOnInit() {

      if(localStorage.getItem('cart'))
      {
        
         this.cartItems = JSON.parse(localStorage.getItem('cart'));
         console.log(this.cartItems);
         this.cart.addItemsCart(this.cartItems)
         .subscribe(
          cartItems => {
            console.log(cartItems);          
            this.cart.getCart()
            .subscribe(
              cartItems => {
                console.log(this.cartItems);          
                this.cartItems = cartItems;
                localStorage.removeItem('cart');
              },
              err => console.log(err)
            )
          },
          err => console.log(err)
          )
      }
      else
      {
        this.cart.getCart()
        .subscribe(
          cartItems => {
            console.log(this.cartItems);          
            this.cartItems = cartItems
          },
          err => console.log(err)
        )
      }
  }



}
