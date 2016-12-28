import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {SpinnerService} from '../shared/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  result:Array<Object>;
  constructor(private http: Http, private spinnerService:SpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.http.get('/api/about')
    .map(response => response.json())// Map will change your response ot json()
    .subscribe(
        result => this.result = result.json()
    );
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }
}
