import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import {PostRoutingModule  } from "./post-routing.module";
import { PostComponent } from "./post.component";
import {PostService } from '../services/post.service';


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers:[PostService]
})
export class PostModule { }
