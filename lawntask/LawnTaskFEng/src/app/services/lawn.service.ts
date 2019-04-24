import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LawnService {

  constructor(private http: HttpClient,private router: Router) { }
  
    addLawn(lawn) {
      console.log("add Lawn service calledL "+lawn);
      return this.http.post<any>(baseURL+'/lawns/addLawn',lawn);
    }
  
    getUserLawns() {
      return this.http.get<any>(baseURL+'/users/getUserLawns');
    }

    getLawn(lawn_id) {
      return this.http.get<any>(baseURL+'/lawns/getLawnDetails/'+lawn_id);
    }


}
