import { Injectable } from '@angular/core';
import { BehaviorSubject } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagePassService {

  private msgSrc = new BehaviorSubject('default msg');
  currentMsg = this.msgSrc.asObservable();
  constructor() { }

  sendMsg(msg : string){
    this.msgSrc.next(msg);
  }
  
}
