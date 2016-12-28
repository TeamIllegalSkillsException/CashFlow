import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SpinnerService } from '../shared/services';
import { AboutUsService } from './../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  aboutDetails: any[];
  result:Array<Object>;
  
  constructor(private spinnerService:SpinnerService,private aboutService: AboutUsService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.aboutService.getAboutDetails()
    .map(res => res.json())
      .subscribe(response => {      
        this.aboutDetails = response;
      });
    /*this.http.get('/api/about')
    .map(response => response.json())
    .subscribe(
        result => this.result = result.json()
        //(x => this.aboutDetails = x)
    );*/

    //this.aboutService.getAboutDetails().map(x => x.json()).subscribe(x => this.aboutDetails = x);
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }
}
