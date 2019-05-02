import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';

@Pipe({
  name:"linkhandle"
})
//import { LinkHandlePipe } from 'src/app/pipes/link-handle.pipe';

export class LinkHandlePipe implements PipeTransform{

    
    constructor(private sanitizer : DomSanitizer,private renderer : Renderer2){

    }
    transform(value: any){
            
            let text = value;
            let regex = /[@].+/g;
            let found = text.split(' ')  
            let flag : boolean = false;              
            for(let i in found){
                if(found[i].match(regex)){

                    let handle = found[i].substring(1,found[i].length);
                    flag=true;
                    let anchorString = '<strong> <a id="'+handle+'" (click)="viewProfile()" [routerLink]="/user/profile/'+handle+'" style="color:black">'+handle+'</a> </strong>'
                    console.log(anchorString);
                    text = text.replace(found[i],anchorString);

                    let index = text.indexOf(found[i]);
                    let divText = text.substring(0,index);
                    let div = this.renderer.createElement('div');
                    let anchor = this.renderer.createElement('a',);
                    /* Test 
                    let anchorText =  this.renderer.createText(handle);
                    this.renderer.appendChild(anchor,anchorText);
                    divText = this.renderer.createText(divText);
                    this.renderer.appendChild(div,divText);
                    this.renderer.appendChild(div,anchor);                                     
                    if(index+found[i].length+1<text.length){
                      let afterdivText = text.substring(index+found[i].length,text.length);
                      console.log("divText: "+afterdivText);
                      afterdivText = this.renderer.createText(afterdivText);
                      this.renderer.appendChild(div,afterdivText);  
                                       }
                                       flag = true; 

                    //test  */                  
                                       

                  }
            
            
            }
      
            if(flag){
               // let sanitizer : DomSanitizer
                //this.renderer.createElement()
                value = this.sanitizer.bypassSecurityTrustHtml('<p>'+text+'</p>'); 
                //' <p>'+text+'</p> '
               /*
               setTimeout( ()=>{
                           this.addEvent()     
                },100);
            */
                 
            } 
            return value;
        }    

        /*
        addEvent(handle){
            console.log("add event");
            let doc =document.getElementsByClassName('test') as any as Array<HTMLElement>
            
              ele.addEventListener('click',(event)=>{
                  let userHandle = event.srcElement.innerHTML;
                  this.router.navigate(['/user/profile/'+userHandle]);          
              },true)
            
          }
          */
}