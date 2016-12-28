import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private spinnerService:SpinnerService) {}

  ngOnInit():void {
    this.spinnerService.show();
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1500);
  }
}
