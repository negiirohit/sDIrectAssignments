import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { baseURL } from '../shared/baseurl';
 



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  imgURL = baseURL;

  @HostListener("window:scroll", [])
  onScroll(): void {
  console.log("innerHeight :" +window.innerHeight + " scrolly "+ window.scrollY + "body  height "+ document.body.offsetHeight)
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          console.log("at bottom");
          // console.log("innerHeight :" +window.innerHeight + " scrolly "+ window.scrollY + "body  height "+ document.body.offsetHeight)
          //code for check total posts
          console.log("OK");
          this.getPosts();
      }

      //Scroll percentage
      //var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      //var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      //var scrolled = (winScroll / height) * 100;
      //loaded posts
      var scrolled = (this.posts.length/this.totoalPosts)*100;
      document.getElementById("myBar").style.width = scrolled + "%";
  }
 
  posts : Post[] = [];
 // posts : any =[] ;
 // posts : Array<Post> = []; 
 totoalPosts : number = 0;

  postPerScroll : number = 5;
  scroll_no : number = 1;
 

  constructor(private postService : PostService) { }

  ngOnInit() {
       this.getPosts();
  }

  getPosts(){
    this.postService.getPost(this.scroll_no,this.postPerScroll)
    .subscribe( res => {
        if(res.success){

        for (let post of res.data.posts)  
            this.posts.push(post);
            this.totoalPosts=res.data.count;
     //     console.log(typeof(this.posts))
      //    this.posts =this.posts.concat(res.data.posts)
          this.scroll_no++;
          this.totoalPosts = res.data.count;
        }

    } )
  }

}
