import { Component, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { SpinnerService } from '../shared/services';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public bannerModel: Banner;
  constructor(private spinnerService:SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.show();

    this.bannerModel = new Banner('../../assets/images/banners/contact-us-background.jpg','CONTACT');
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }

}
