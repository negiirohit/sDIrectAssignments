import { Component, OnInit } from '@angular/core';
import { AddLawnComponent } from '../add-lawn/add-lawn.component';

//Dialog 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//
import { LawnService } from '../services/lawn.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-lawn',
  templateUrl: './user-lawn.component.html',
  styleUrls: ['./user-lawn.component.css']
})
export class UserLawnComponent implements OnInit {

  userLawns: any;
  constructor(private dialog: MatDialog,private lawnService: LawnService,private router:Router) { }

  ngOnInit() {
    this.getUserLawns();
  }


  getUserLawns() {
      this.lawnService.getUserLawns()
      .subscribe( res=> {
          if(res.success==true)
          {
            this.userLawns=res.lawn;
            console.log(JSON.stringify(this.userLawns));
          }
      } )
  }

  addLawn(  ){
    const dialogRef = this.dialog.open(AddLawnComponent, {
      width: '75vw',
      height:'100vw',
      data: {},
     disableClose: true 
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.getUserLawns()
    });
  }

  showDetails(lawn){
    console.log(lawn);
    this.router.navigate(['/lawnDetail',lawn._id]);
  }

}
