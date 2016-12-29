import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Banner } from '../../models/banner';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  @Input() public banner: Banner;
  
  constructor() {
  }

  ngOnInit() {
  }

}
