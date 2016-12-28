import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
 result:Array<Object>;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/about')
    .map(response => response.json())// Map will change your response ot json()
    .subscribe(
        result => this.result = result.json()
    );
  }

}
