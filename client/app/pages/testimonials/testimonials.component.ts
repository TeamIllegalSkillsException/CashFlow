import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../shared/services';
import { TestimonialService } from './services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
    testimonialDetails: any[];

  constructor(private spinnerService:SpinnerService, private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.testimonialService.getTestimonialDetails()
      .map(res => res.json())
      .subscribe(response => {
        this.testimonialDetails = response;
      });
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }

}
