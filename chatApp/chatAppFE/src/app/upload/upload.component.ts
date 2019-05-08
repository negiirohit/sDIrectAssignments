import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { FileUploadModule } from "ng2-file-upload";

// Socket
import { SocketService } from '../services/socket.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  formGroup:any;
  files :any = [];
  error : any ;

  acceptedTypes : any = ["image/jpg", "image/jpeg", "image/png"];


  constructor(private fb: FormBuilder,  private cd: ChangeDetectorRef) {}

  ngOnInit(){
      this.  formGroup = this.fb.group({
        file: [null, Validators.required]
      });
  }


  onFileChange(event) {
  
    if(event.target.files && event.target.files.length) {
        let length = event.target.files.length;

        if(length > 10){
          this.error="can't upload more than 10 files at a time";
          return;
         }

        for(let i=0;i<length;i++){

          let file = event.target.files[i];
          if (this.acceptedTypes.indexOf(file.type) < 0) {
            this.error = "Only jpg/png files are supported"
            this.files = [];
            return;
          }
          if (file.size > 10000000) {
            this.error = "File Size can't exceed up to 1 MB"
            this.files = [];    
            return;
          }
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (result) => {
              this.files.push(reader.result);
          }
          this.cd.markForCheck();
        };
    } 
     console.log(this.files);
  } 

  onSubmit(){
    console.log(JSON.stringify(this.files))
  }

  remove(index){
    this.files.splice(index,1);
  }

  //Compress files before sending
  compress(){

  
  }

}