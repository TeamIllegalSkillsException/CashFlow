import {Component, HostBinding, OnInit} from '@angular/core';
import {SpinnerService} from './shared/services';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @HostBinding('class') public cssClass = 'homepage';

  constructor(private spinnerService:SpinnerService){}

  ngOnInit():void {
    this.spinnerService.show();
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1500);
  }
}
