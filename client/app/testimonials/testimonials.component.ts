import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/services';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(private spinnerService:SpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }

}
