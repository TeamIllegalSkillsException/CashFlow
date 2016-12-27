import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../shared/components/banner/banner.component';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  banner: BannerComponent;

  constructor() { }

  ngOnInit() {
    // this.banner = new BannerComponent('../../assets/images/banners/contact-us-background.jpg','Contact');
  }

}
