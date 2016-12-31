import {Component, OnInit, style, state, animate, transition, trigger} from '@angular/core';
import { SpinnerService } from '../../shared/services';
import { OurServicesService } from './services/ourservices.services';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss'],
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
export class OurservicesComponent implements OnInit {
  ourServicesDetails: {};
  state: String;

  constructor(private spinnerService:SpinnerService,
              private ourServicesService: OurServicesService) {
    this.state = 'inactive';
  }

  ngOnInit() {
    this.spinnerService.show();

    this.ourServicesService.getOurServicesDetails()
      .map(res => res.json())
      .subscribe(response => {
        this.ourServicesDetails = response;
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
