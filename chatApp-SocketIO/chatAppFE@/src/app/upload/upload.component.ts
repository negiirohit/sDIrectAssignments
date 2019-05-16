import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";


// Socket
import { SocketService } from '../services/socket.service';
import { FileService } from '../services/file.service';

import { ChangeDetectorRef } from '@angular/core';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  //
    title = 'app';
    selectedImage: any;
    processedImages: any = [];
    showTitle: boolean = false;
  //

  formGroup:any;
  files :any = [];
  error : any ;

  acceptedTypes : any;


  constructor(public dialogRef: MatDialogRef<UploadComponent>,private fb: FormBuilder,
      private cd: ChangeDetectorRef,private fileService : FileService, 
      private socketService: SocketService,private imgCompressService: ImageCompressService,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log("msgType:", this.data.messageType);
          if(this.data.messageType=='image'){
            this.acceptedTypes  = ["image/jpg", "image/jpeg", "image/png"];
          } else if(this.data.messageType=='audio'){
            this.acceptedTypes  = ["audio/*"];
          }
      }

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
          this.cd.markForCheck();
        };
    } 
       let files:any = Array.from(event.target.files);    
       ImageCompressService.filesArrayToCompressedImageSource(files).then(observableImages => {
         observableImages.subscribe((image) => {
           console.log("image url "+image.imageDataUrl);
           this.files.push(image.imageDataUrl);
         }, (error) => {
           console.log("Error while converting");
         }, () => {
         });
       });
  } 

  
  
  onSubmit(){
    console.log(this.data);
    for(let i=0;i<this.files.length;i++){
          let msg = this.data;
          msg.messageType = 'image';
          msg.status = 'sent';
          msg.msg_id = new Date().getUTCMilliseconds()+this.data.room;
          msg.message = this.files[i];
          console.log("image id :"+msg.msg_id);
          this.socketService.sendMessage(msg);
          this.dialogRef.close();
    }
    //close dialog box
  }

  remove(index){
    this.files.splice(index,1);
  }




}