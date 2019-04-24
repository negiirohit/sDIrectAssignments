import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient,private router: Router) { }
  
  uploadImages(images) {
    return this.http.post<any>(baseURL+'images/uploadImage',images, {
        reportProgress: true, observe: 'events'
       });
  }

  removeImage(image_id) {
    console.log("remove image service :"+image_id)
    return this.http.delete<any>(baseURL+'images/removeImage/'+image_id);
  }
}
