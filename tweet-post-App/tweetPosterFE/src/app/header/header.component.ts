import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService : AuthService,private title : Title, private meta : Meta) { }

  ngOnInit() {
    this.title.setTitle('Tweet app header');
    this.meta.addTag({name:'description', content:'tweet app header'});
  }

}
