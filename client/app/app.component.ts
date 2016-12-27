import {Component, HostBinding} from '@angular/core';
import {PreloaderService, SpinnerService } from './shared/services';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') public cssClass = 'homepage';

  constructor(private spinner: SpinnerService){}

  public ngAfterViewInit(): void {
    PreloaderService.load()
      .then((values) => {
        this.spinner.hide(1500);
      })
  }
}
