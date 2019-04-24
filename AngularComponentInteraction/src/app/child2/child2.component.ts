import { Component, OnInit } from '@angular/core';
import { MessagePassService } from '../services/message-pass.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  //messageToParent = "Message from Child"
  msg : string;
  
    constructor(private msgService:MessagePassService ){}
  
  
    ngOnInit(){
      this.msgService.currentMsg.subscribe(msg => this.msg = msg)
  
    }

    sendMessage(msg){
      this.msgService.sendMsg(msg);
     }
}
