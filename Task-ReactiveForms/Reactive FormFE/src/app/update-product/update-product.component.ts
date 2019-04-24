import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { ProductService } from 'src/services/product.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Product  {
  name: string,
  SKU: string,
  quantity: number
}


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})


export class UpdateProductComponent implements OnInit {

  product : Product;
  productForm : FormGroup;
  constructor(private fb:FormBuilder,private productService : ProductService,  public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        this.product = data.product;
     }

  ngOnInit() {
   
    this.createForm();

  }

  createForm(){
      this.productForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(12)] ],
        SKU:  [{ disabled: true}, [Validators.required, Validators.minLength(2), Validators.maxLength(12)] ],
        quantity:  ['', [Validators.required] ]
      })
      //Patch Values
      this.productForm.patchValue({
        name: this.product.name,
        SKU:this.product.SKU,
        quantity : this.product.quantity
      })
  }

  //update the product
  updateProduct(){
    let product= this.productForm.value;
    console.log(product);
    // console.log("updated product:  "+ product);
    // this.close();
    this.productService.updateProduct(product,this.product.SKU).subscribe(product => {
       console.log("updated product:  "+ product);
       this.close();
     });
  }

  //close dialog Box
  close() { 
      this.dialogRef.close();
  }

}
