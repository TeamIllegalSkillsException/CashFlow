import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../shared/services';
import { OurServicesService } from './services/ourservices.services';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss']
})
export class OurservicesComponent implements OnInit {
  ourServicesDetails: {};

  constructor(private spinnerService:SpinnerService,
              private ourServicesService: OurServicesService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.ourServicesService.getOurServicesDetails()
      .map(res => res.json())
      .subscribe(response => {
        this.ourServicesDetails = response;
      });
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }
}
