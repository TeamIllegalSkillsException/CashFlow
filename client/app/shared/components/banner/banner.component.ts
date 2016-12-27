import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'page-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public imgUrl: string;
  public caption: string;

  constructor(imgUrl: string, caption: string) {
    this.imgUrl = imgUrl;
    this.caption = caption;
  }

  ngOnInit() {
  }

}
