import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

import { MessagePassService } from './services/message-pass.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(ChildComponent) child;
  title = 'AngularComponentInteraction';

  // messageToChild = "Message from Parent"
  // messageFromChild : any;
  // messageFromChild2 : any;
  // receivedMsg : string;
  msg : string;

  constructor(private msgService:MessagePassService ){}


  ngOnInit(){
    this.msgService.currentMsg.subscribe(msg => this.msg = msg)

  }

  sendMessage(msg){
    this.msgService.sendMsg(msg);
   }


  // child to parent using view bchild
  // ngAfterViewInit(){
  //   this.messageFromChild = this.child.messageToParent
  
  // }
  // receiveMsg(msg :string){
  //   this.receivedMsg=msg;
  // }

}
