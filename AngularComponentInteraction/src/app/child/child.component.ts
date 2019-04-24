import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessagePassService } from '../services/message-pass.service';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() message :string;
  // @Output() msgEmitter = new EventEmitter<string>();
  // constructor() { }
  // messageToParent = "Message from Child"
  // ngOnInit() {
  // }

  // sendMessage(msg){
  //   this.msgEmitter.emit(msg);
  // }


    msg : string;
  
    constructor(private msgService:MessagePassService ){}

    
  
    ngOnInit(){
      this.msgService.currentMsg.subscribe(msg => this.msg = msg)
    }

   sendMessage(msg){
    this.msgService.sendMsg(msg);
   }
}
