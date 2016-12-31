import {Component, OnInit, animate, style, transition, state, trigger} from '@angular/core';
import { SpinnerService } from '../../shared/services';
import { AboutUsService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('inactive', style({opacity:0})),
      state('active', style({opacity:1})),
      transition('inactive => active', [
        animate('500ms ease-in')
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {
  aboutDetails: any[];
  state: String;

  constructor(private spinnerService:SpinnerService,
              private aboutService: AboutUsService) {
    this.state = 'inactive';
  }

  ngOnInit() {
    this.spinnerService.show();

    this.aboutService.getAboutDetails()
      .map(res => res.json())
      .subscribe(response => {
        this.aboutDetails = response;
      });
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);

    this.sleep(1000).then(() => {
      this.state = 'active';
    });
  }
}
