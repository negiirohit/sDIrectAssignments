import { Component, OnInit } from '@angular/core';
// import jquery
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jquerNgTask';

  public ngOnInit ()
  {
    $(document).ready(function(){
      $("button").click(function(){
            var parentElement = $(this).parent() 
            var prvSibling = $(this).prev()
            if(prvSibling.length) {
                  prvSibling.animate({
                    opacity: '0.5',
                    height: '150px',
                    width: '150px'
                  },2000,
                  ()=>{
                      prvSibling.hide(2000,()=>{
                            prvSibling.remove();
                      })
                  })
            }
            else{
                console.log("else")
                var div = $('<div class="box"></div>');            
             //   var div = $compile('<div class="box"></div>');
            //  div.prependTo($(this).parent()).css({
            //   "width":"150px",
            //   "height":"150px",
            //   "background-color": "cyan","opacity":"0.5"});
            
             
                div.prependTo($(this).parent()).css({
                  "width":"150px",
                  "height":"150px",
                  "background-color": "cyan","opacity":"0.5"})
                .animate({
                    opacity: '1',
                    height: '300px',
                    width: '90vw'
                },2000);

             }
      });
    });
  }
}
