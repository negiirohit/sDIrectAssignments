import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { PagerService } from '../services/pager.service';


import { Product } from '../shared/product';
import { Cart } from '../shared/cart';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 
  errMess: "";
 
  cartItem : {};
  cartArray: any[] = [];
  
   // array of all items to be paged
   private allItems: any[];
   private allFeaturedProducts: any[];

   // pager object
   pager: any = {};
   
   // paged items
   pagedFeaturedProducts: any[];
   page_limit = 9;
   product_count : number;

  constructor(private productService: ProductService, private pagerService : PagerService) { }

  ngOnInit() {

    //if we are not using pagination and fetching all data at startup
    // this.productService.getFeaturedProducts()
    // .subscribe(products => {      
    //       // set items to json response
    //       // initialize to page 1
    //       this.allFeaturedProducts = products
    //       this.setPage(1);

         
    // },
    //   errmess => this.errMess = <any>errmess);




      // this.productService.getFeaturedProductsPagination(1,this.page_limit)
      // .subscribe(product => {      
      //       // set items to json response
      //       // initialize to page 1
      //       console.log("getting products");
      //       console.log(product.products);
      //       this.allFeaturedProducts = product.products
      //       this.product_count = product.count
      //       this.setPage(1,this.page_limit);
  
           
      // },
      //   errmess => this.errMess = <any>errmess);
        this.setPage(1);

  } 


  setPage(page: number) {
    
    
        // get objects
        this.productService.getFeaturedProductsPagination(page,this.page_limit)
        .subscribe(product =>{
          console.log(product.products)
          this.pagedFeaturedProducts = product.products




        } )
        
        //
    
        // get pager object from service
        this.pager = this.pagerService.getPager(this.product_count, page,this.page_limit);
    
        // get current page of items
      
    }


  addToCart(product){

      if(localStorage.getItem('cart'))
             this.cartArray=JSON.parse(localStorage.getItem('cart'));
      this.cartItem = { product_id:product._id ,
                        product_name:product.name, 
                        product_price:product.price };
      console.log(this.cartItem);
      this.cartArray.push(this.cartItem);
      localStorage.setItem("cart",JSON.stringify(this.cartArray));
      console.log(localStorage.getItem("cart"));
  }


}
