import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';

import { HttpErrorService } from './http-error.service';
//Observables
import {Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient, private processHTTPErrorService : HttpErrorService) { }
  mailUser(mailid) {
    console.log("service  "+mailid);
    return this.http.post<any>(baseURL+'/send',mailid)
    .pipe(catchError(this.processHTTPErrorService.handleError));
  }
}
