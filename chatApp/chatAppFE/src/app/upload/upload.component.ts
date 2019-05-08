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

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  err: boolean = false;
  errMessage = "";
  uploadPrecentage: number = 0;
  uploadForm: FormGroup;
 
  //Accepted File Types
  acceptedTypes : any = ["image/jpg", "image/jpeg", "image/png"]
 
  public imagePath;
  imageURLs: any ;
  public message: string;
  uploadedImages : any ;
  uploadedImagesURL : any ;

  //itemAlias for backend file match
  public uploader: FileUploader = new FileUploader({
    isHTML5: true,
    itemAlias: "images",
  });


  constructor(private socketService : SocketService,public dialogRef: MatDialogRef<UploadComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
   private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    console.log(this.data);
    this.uploadForm = this.fb.group({
      inputImage: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
  }


  //update event on selecting images
  update($event) {
    this.uploadPrecentage = 0;
    this.imageURLs=[];
    this.err = false;
    //console.log(event);

    // Check for number of files
    if (this.uploader.queue.length > 10  ) {
      this.err = true;
      this.errMessage = "Can't send More than 10 files"
      this.uploader.clearQueue();
      return;
    }


    //Check for types of Selected Files And Size 
    for(let i = 0; i < this.uploader.queue.length; i++) {
      
        let fileItem = this.uploader.queue[i]._file;
        console.log(fileItem);

        if (this.acceptedTypes.indexOf(fileItem.type) < 0) {
          this.err = true;
          this.errMessage = "Only jpg/png files are supported"
          this.uploader.clearQueue();
          return;
        }


      if (fileItem.size > 10000000) {
        this.err = true;
        this.errMessage = "File Size can't exceed up to 1 MB"
        this.uploader.clearQueue();
        return;
      }

      this.preview(fileItem);


    //   var reader = new FileReader();
    //   reader.readAsDataURL(fileItem);
    //     reader.onload = (_event) => {
    //  //   this.uploader.queue[i].url =reader.result;
    //     console.log("uploader quews: " +this.uploader.queue[i])
    //   }
     
    }
  }


  //preview images before upload
preview(file) {
    console.log("preview");
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
        reader.onload = (_event) => {
        console.log(reader);
        let  data = {
          'name':file.name,
          'file':reader.result
        }
        this.imageURLs.push(data);
        console.log("file created");
      }      
}

      
//remove image from uploader queue
removeImage( index) {
  //console.log("remove image id"+image_id);
  this.imageURLs.splice(index , 1);
  return;
}



send() {
  this.uploadedImagesURL = [];
  
  let data = new FormData();
  for (let j = 0; j < this.uploader.queue.length; j++) {
    let fileItem = this.uploader.queue[j]._file;
    data.append('images', fileItem);
    data.append('fileSeq', 'seq' + j);
    data.append('dataType', this.uploadForm.controls.type.value);
    //this.preview(fileItem);
  }

  this.uploadFile(data);
  console.log(data);
  this.uploader.clearQueue();
}

uploadFile(data: FormData) {
  console.log(data);    
  this.dialogRef.close(data);
}
  



  close() { 
  }

}
