/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Input } from '@angular/core';
import { Lawn } from '../shared/lawn';

import {LawnService } from '../services/lawn.service';
import { ActivatedRoute } from '@angular/router';

//import google maps
//import { } from 'googlemaps';


@Component({
  selector: 'app-lawn-detail',
  templateUrl: './lawn-detail.component.html',
  styleUrls: ['./lawn-detail.component.css']
})
export class LawnDetailComponent implements OnInit {
  marker: google.maps.Marker;
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  google : any;
 
  lawn : Lawn;
  public lineChartDataTemp: ChartDataSets[];
  public lineChartDataPre: ChartDataSets[];
  

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: { },
  };


  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];


  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];




  constructor(private lawnService : LawnService,private route: ActivatedRoute) { }


  ngOnInit() {
    this.initMap();
    this.getLawn();
  }

  getLawn(){
    var lawn_id = this.route.snapshot.paramMap.get('lawn_id');
    this.lawnService.getLawn(lawn_id)
    .subscribe(res => {
      this.lawn = res.lawn
      //Set Location in map
      this.setCenter(this.lawn.address.geometry.lat,this.lawn.address.geometry.long)

      //Get Temperature
       this.lineChartDataTemp = [{
          data: <number[]>this.lawn.temperature, label: 'Temprature' },
       ];
      //Get Precipitation
        this.lineChartDataPre = [{
        data: <number[]>this.lawn.precipitation, label: 'Precipitation' },
        ];
    })
  }

  //Initialize Map
  initMap(){
        let mapProp = {
          center: new google.maps.LatLng(30.3164945, 78.03219179999996),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);    
  }

  // set location on map
  setCenter(lat,long) {
        this.map.setCenter(new google.maps.LatLng(lat,long));
        this.showPosition(lat,long);
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
  
}

