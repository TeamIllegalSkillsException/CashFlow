import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'location-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title: string = 'Our place';
  lat: number = 42.650847;
  lng: number = 23.3772423;
  zoom: number = 16;

  constructor() { }

  ngOnInit() {
  }

}
