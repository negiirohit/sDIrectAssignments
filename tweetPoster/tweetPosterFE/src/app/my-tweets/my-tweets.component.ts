import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { URL } from 'url';

let url : string = './my-tweets.component.html';

//let v = 'a';
@Component({
  selector: 'app-my-tweets',
  //templateUrl: url,
  //templateUrl:`./my-tweets.component.html?v=`+`${new Date().getTime()}`,
  templateUrl: './my-tweets.component.html',
  styleUrls: [`./my-tweets.component.css?v=${new Date().getTime()}`]
})
export class MyTweetsComponent implements OnInit {
  tweetPost : any;
  tweets : any;

  flag : boolean = false;
  handles : any;
  searchString : String = '';
  myHtmlString : any;
  input : any;  
  timeOut : any;
  




  htmlData:any[];
  constructor(private router:Router,private sanitizer: DomSanitizer,private tweetService: TweetService) {
  }

  ngOnInit() {
    this.fetchTweets();
    this.input = <HTMLInputElement>document.getElementById('tweet');  
  }

  //(change)="valuechange('event')" working but....
  //on any key press in tweet box 
  valuechange(event){
    this.handles = '';
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout( ()=> {
      this.fetchMentions(event)
    } , 250);
  }


  //Check if there is any need to fetch handles for mention 
  fetchMentions(event){
      let i = this.input.selectionEnd;
      let j;
      if(event[this.input.selectionEnd]!=' '){
         j = this.findPrvAt(i-1);
         if(j!=-1&&j<i-1){
         let searchStr = this.input.value.substr(j+1,i-1);
         console.log("search Str: "+searchStr);
         this.getMentions(searchStr)
         }
      }
  }


  //find previous @ from current input position in post input field
  findPrvAt(i){
    while(i>=0){
          if(this.input.value[i]=='@'){
            return i;
          }
          if(this.input.value[i]==' '){
            return -1;
          }
           i--;
    }
    return i;
  }



  //Get Suggestion for Handles mentioned in tweet
  getMentions(handle){
  this.tweetService.getHandles(handle)
  .subscribe( res => {
    if(res.success){
      this.handles = res.data.handles;
      let names = this.handles.map(function(item) {
        return item['handle'];
      });
      this.handles = names;
      console.log(res.data);
    }
  })
  }

//Fetch all the tweets by User
  fetchTweets(){
    this.tweetService.getTweets()
    .subscribe(res => {
      console.log('Fetch Tweet Success ')
      this.tweets= res.data.tweets;
     // this.updateMentions();      
    } )
}

/*
//add anchor tags to the mentioned handels
updateTweet(){
   //console.log("element: "+JSON.stringify(this.el));
   //console.log(this.el.nativeElement);
   for(let i in this.tweets){
       // console.log(this.tweets[i].content);
        let text = this.tweets[i].content;
        let regex = /[@].+/g;
        let found = text.split(' ')
              let flag : boolean = false;
              let div;
                   
              div = this.renderer.createElement('div');              
              for(let i in found){
                  if(found[i].match(regex)){
                      
                      //extract handle name
                      let handle = found[i].substring(1,found[i].length);
                      //create anchor tag
                      let anchor = this.renderer.createElement('a',);
                      //text for anchor element
                      let anchorText =  this.renderer.createText(handle);
                      //append text to anchor 
                      this.renderer.appendChild(anchor,anchorText);
                      //fetch the text before @
                      let index = text.indexOf(found[i]);
                      let divText = text.substring(0,index);
                      divText = this.renderer.createText(divText);
                      //append the text befor @
                      this.renderer.appendChild(div,divText);
                      //append the anchor tag
                      this.renderer.appendChild(div,anchor);
                      
                      //text after append tag
                      console.log("text after append tag: "+text)
                      console.log(found[i].length)
                      console.log(text.substring(index+found[i].length,text.length));
                                       
                      if(index+found[i].length+1<text.length){
                        let afterdivText = text.substring(index+found[i].length,text.length);
                        console.log("divText: "+afterdivText);
                        afterdivText = this.renderer.createText(afterdivText);
                        this.renderer.appendChild(div,afterdivText);  
                      }
                      flag = true;                      
                }
              }

              // if(flag)
              //  this.renderer.appendChild(this.hostElement.nativeElement, div);
              
   }
}
*/

//update mentions in tweet with link to profils
updateMentions(){
  for(let i in this.tweets){
      let text = this.tweets[i].content;
      let regex = /[@].+/g;
      let found = text.split(' ')  
      let flag : boolean = false;              
      for(let i in found){
          if(found[i].match(regex)){
              let handle = found[i].substring(1,found[i].length);
              flag=true;
              let anchorString = '<strong> <a class="test"  [routerLink]="/user/profile/'+handle+'" style="color:black">'+handle+'</a> </strong>'
              console.log(anchorString);
              text = text.replace(found[i],anchorString);
            }
      
      
      }

      if(flag){
         this.tweets[i].content = ' <p>'+text+'</p> '
         //this.sanitizer.bypassSecurityTrustHtml('<p>'+text+'</p>');
         setTimeout( ()=>{
          this.addEvent();
         },100); 
      } 
  }    
  
    setTimeout( ()=>{
     //this.addEvent();
    },100);   
 // this.addEvent();    
}    
  
  //Add click function on anchar tages containing handels
  addEvent(){
    console.log("add event");
    let doc =document.getElementsByClassName('test') as any as Array<HTMLElement>
    for(let ele of doc){
      ele.addEventListener('click',(event)=>{
          let userHandle = event.srcElement.innerHTML;
          this.router.navigate(['/user/profile/'+userHandle]);          
      },true)
    }
  }
  
   
  

/*
  fetchAllHandles(){
    this.tweetService.getAllHandles()
    .subscribe( res => {
      if(res.success){
        this.handles = res.data.handles;
          let names = this.handles.map(function(item) {
             return item['handle']; 
          });
        
        this.handles = names;
      }
    })
  }
*/

viewProfile(){
  console.log("ViewProfile Called");
}






postTweet(){
  let newTweet = {content : this.tweetPost};
  this.tweetService.postTweet(newTweet)
  .subscribe( res => {
    if(res.success){
      this.tweetPost = '';
      console.log('Post Tweet success');        
      this.fetchTweets();
    }
  })
}




}





  


