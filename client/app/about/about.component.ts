import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../shared/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private spinnerService:SpinnerService) { }

  ngOnInit():void {
    this.spinnerService.show();
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1500);
  }

}
