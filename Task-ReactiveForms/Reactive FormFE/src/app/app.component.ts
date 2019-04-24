import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import  { ProductService } from '../services/product.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Product } from '../shared/Product';

import { UpdateProductComponent } from './update-product/update-product.component';

//Dialog 

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  
  title = 'TaskReactive';


  nestedProductForm: FormGroup;
  productArray : FormArray;
  products: any = [];
  limit=5;

  fetchedProducts: any =[];

  disableAddButton: boolean = false;

  constructor(private _fb: FormBuilder,private productService : ProductService,private dialog: MatDialog) {
    this.createproductFormArray();
  }

  
 ngOnInit() {  
      
      this.addProduct();
      this.getProducts();
  }

  
  createproductFormArray(){
    this.nestedProductForm = this._fb.group({
      product: this._fb.array([])
    })
  }


  
  addProduct() {
    this.productArray = this.nestedProductForm.controls.product as FormArray;

    if(this.productArray.length < 5)
    {
      this.productArray.push(this._fb.group({      
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(12)] ],
        SKU:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(12)] ],
        quantity:  ['', [Validators.required] ]
        
      }));
    
      if(this.productArray.length == 5)
      {
        this.disableAddButton = true
      }
    }
  }



  getProducts() {
    this.productService.getProducts()
    .subscribe( products => {
        this.products = products;
    })
  }

  
     
  removeProduct(index) {
    console.log("asdf");
     console.log(index);
     console.log(this.productArray);
     this.productArray.removeAt(index);
     if(this.productArray.length < 5)
     {
       this.disableAddButton = false
     }
 }
  
  
  submitProducts() {    
     var productData = this.nestedProductForm.get("product").value
     this.productService.createProducts(productData)
     .subscribe( prod => {
      this.nestedProductForm.reset();
      this.getProducts();
     } )
     
  }



  trackByFn(index, item) {
    return index; // or item.id
  }

  // Remove Product From DB
  removeProductDB(SKU,index) {
    this.productService.removeProduct(SKU)
    .subscribe( product => {
      this.products.splice(index,1);
    } )
    ;
  }

  editProduct( product ){
    console.log(product)
    this.openDialog(product);
  }


  //Open Dialog Box for updation
  openDialog(productData) {
    
          
            const dialogRef = this.dialog.open(UpdateProductComponent, {
              width: '250px',
              data: {product:productData}
            });
        
            dialogRef.afterClosed().subscribe(() => {
              console.log('The dialog was closed');
              this.getProducts();
            });
        }



}


