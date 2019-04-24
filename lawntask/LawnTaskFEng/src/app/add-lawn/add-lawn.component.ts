/// <reference types="@types/googlemaps" />
import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import { Lawn } from '../shared/lawn'
import { LawnService } from '../services/lawn.service';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ViewChild } from '@angular/core';

//import { } from 'googlemaps';

@Component({
  selector: 'app-add-lawn',
  templateUrl: './add-lawn.component.html',
  styleUrls: ['./add-lawn.component.css']
})
export class AddLawnComponent implements OnInit {
  marker: any;
 
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  google : any;

  latitude: any;
  longitude: any;
  
  months : String[] =  ['January','February','March','April','May','June','July','August','September','October','November','December']
  public handleAddressChange(address: Address) {
    console.log(address);
    //Get coordinate here and change in address 

    //patch address with form
    let addressArray = address.formatted_address.split(', ');
    let length = addressArray.length;
    this.lawnForm.patchValue({
      address: {
        country: addressArray[length-1] ,
        state : addressArray[length-2] || ' ',
        city : addressArray[length-3] || ' ',
        street : addressArray[length-4] || ' ',
        geometry :{
          lat : address.geometry.location.lat(),
          long : address.geometry.location.lng()
        }
      }

    })

    console.log(this.lawnForm.value);
    this.setCenter(address.geometry.location.lat(), address.geometry.location.lng());
    this.showPosition(address.geometry.location.lat(), address.geometry.location.lng());
  }

  lawnDetails : Lawn;
  lawnForm : FormGroup;
  constructor(private fb:FormBuilder,private lawnService: LawnService, public dialogRef: MatDialogRef<AddLawnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        
     }

  ngOnInit() {
   
    this.createForm();
    this.initMap();

  }

  createForm(){
      this.lawnForm = this.fb.group({
        silty : [''],
        grass : [''],
        squareFoot : [''],
        address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          country: [''],
          geometry: this.fb.group({
              lat : [''],
              long : ['']
          })
        }),
        temperature:[''],
        precipitation:['']
        
      })    
  }

  // Initialize ma
  initMap(){

    let mapProp = {
      center: new google.maps.LatLng(30.3164945, 78.03219179999996),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }


  setCenter(lat,long) {
     this.map.setCenter(new google.maps.LatLng(lat,long));
  }

  //update the product
  addLawn(){
    let lawn= this.lawnForm.value;
    lawn.temprature = this.lawnForm.value.temperature.split(',').map((item) => {
      return parseFloat(item);
      });
      lawn.precipitation = this.lawnForm.value.precipitation.split(',').map((item) => {
        return parseFloat(item);
        });
    lawn.temperature =  JSON.parse("[" + lawn.temperature + "]");
    lawn.precipitation =  JSON.parse("[" + lawn.precipitation + "]");
    console.log("lawn details from form"+ JSON.stringify(lawn));
    //call add lawn service
    this.lawnService.addLawn(lawn)
    .subscribe((res)=> {
      if(res.success==true)
      {
        console.log("created lawn: "+JSON.stringify(res.lawn))
        this.close()
      }
      
    })
    
  }

  //Handle Marker on Google Map
  showPosition(lat,long) {
    let location = new google.maps.LatLng(lat,long);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }





  //close dialog Box
  close() { 
      this.dialogRef.close();
  }


}
