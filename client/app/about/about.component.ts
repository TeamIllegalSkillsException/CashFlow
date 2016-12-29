import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/services';
import { AboutUsService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  aboutDetails: any[];

  constructor(private spinnerService:SpinnerService, private aboutService: AboutUsService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.aboutService.getAboutDetails()
      .map(res => res.json())
      .subscribe(response => {
        this.aboutDetails = response;
      });
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }
}
