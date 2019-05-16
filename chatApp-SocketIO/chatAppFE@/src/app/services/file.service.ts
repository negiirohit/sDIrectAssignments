import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baserurl';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  private uploadPercentage = new BehaviorSubject(0);
  currentPercent = this.uploadPercentage.asObservable();

  constructor(private http: HttpClient) { }



  uploadImages(images) {
     this.http.post<any>(baseURL+'images/uploadImage',images, {
        reportProgress: true, observe: 'events'
       })
       .subscribe( event => {
        if (event.type == HttpEventType.UploadProgress) {
          console.log("upload progress");
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.uploadPercentage.next(percentDone) ;
          //console.log(`File is ${percentDone}% uploaded.`);
        }

        if(event.type == HttpEventType.Response) {
           //this.uploadedImages = event.body;
           //this.createURL();
           if(event.body.status=='true'){
            
           }
        }

       })
       
  }

  uploadImage(image) {
     console.log("upload image service : ");
    //  return this.http.post<any>(baseURL+'files/uploadImage',image, {
    //    reportProgress: true, observe: 'events'
    //   })      
    console.log(typeof(image));
    console.log(image);
    return this.http.post<any>(baseURL+'/files/uploadImage',image)      
 }


}
