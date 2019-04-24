import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { FileUploadModule } from "ng2-file-upload";


import { baseURL } from '../shared/baseurl';
import { ImageUploadService } from '../services/image-upload.service';
//import { read } from 'fs';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

 
  err: boolean = false;
  errMessage = "";
  uploadPrecentage: number = 0;

  uploadForm: FormGroup;
  //Accepted File Types
  acceptedTypes : any = ["image/jpg", "image/jpeg", "image/png"]


  public imagePath;
  imageURLs: any ;
  public message: string;

  uploadedImages : any 
  ;
  uploadedImagesURL : any ;
  public uploader: FileUploader = new FileUploader({
    isHTML5: true,
    itemAlias: "images",
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private uploadImageService: ImageUploadService) { }

  ngOnInit() {
  
    this.uploadForm = this.fb.group({
      inputImage: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
  }


  //On submit button
  submitImages() {
    this.uploadedImagesURL = [];
    
    let data = new FormData();
    for (let j = 0; j < this.uploader.queue.length; j++) {

      
      let fileItem = this.uploader.queue[j]._file;
      data.append('images', fileItem);
      data.append('fileSeq', 'seq' + j);
      data.append('dataType', this.uploadForm.controls.type.value);
   //   this.preview(fileItem);
    }
    this.uploadFile(data);
   
    this.uploader.clearQueue();
  }




  uploadFile(data: FormData) {

    this.uploadPrecentage = 0;
    this.uploadImageService.uploadImages(data)
      .subscribe(event => {
        console.log("event");
        if (event.type == HttpEventType.UploadProgress) {
          console.log("upload progress");
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.uploadPrecentage = percentDone;
          console.log(`File is ${percentDone}% uploaded.`);
        }

        if(event.type == HttpEventType.Response) {
           this.uploadedImages = event.body;
           this.createURL();
        }
      });
    return;
  }





  update($event) {
    this.uploadPrecentage = 0;
    this.imageURLs=[];
    this.err = false;
    console.log(event);
    // Check for file length
    if (this.uploader.queue.length > 10  ) {
      this.err = true;
      this.errMessage = "Can't Upload More than 10 files"
      this.uploader.clearQueue();
      return;
    }

    if (this.uploader.queue.length < 3 ) {
      this.err = true;
      this.errMessage = "Please select minimum 3"
      this.uploader.clearQueue();
      return;
    }

    //Check for types of Selected Files And Size 
    for (let i = 0; i < this.uploader.queue.length; i++) {
      
        let fileItem = this.uploader.queue[i]._file;
        console.log("file rn");
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
      }
      
      //console.log(reader.result)
     // console.log("image url");this.uploadedImages[i].imageURL= this.uploadedImages[i].path.split('/')[2];
     // console.log("URL generated: "+this.uploadedImages[i].imageURL)
     // console.log(this.imageURLs);
    }


    removeImage(image_id, index) {
      console.log("remove image id"+image_id);
      this.uploadedImages.splice(index , 1);
      this.uploadImageService.removeImage(image_id).subscribe((res)=> {
        console.log("response iamge" + res)
      });
      return;
    }
    



      createURL()
      {
          for(let i=0; i<this.uploadedImages.length ; i++)
          {
              let url=this.uploadedImages[i].path.split('/')[2];
              let tempURL = {
                thumb10x10url : baseURL+"images/thumbnail/20x20/"+url,
                thumb80x80url :baseURL+"images/thumbnail/40x40/"+url,
                thumb100x100url : baseURL+"images/thumbnail/100x100/"+url,
                url :baseURL+"images/"+url
              }
              this.uploadedImagesURL.push(tempURL);
          
          }
          console.log("images Uploaded")
          console.log(this.uploadedImagesURL);
      }
}



  
  

