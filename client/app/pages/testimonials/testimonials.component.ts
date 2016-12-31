import {Component, OnInit, animate, style, state, transition, trigger, Input} from '@angular/core';
import { SpinnerService } from '../../shared/services';
import { TestimonialService } from './services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
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
export class TestimonialsComponent implements OnInit {
  testimonialDetails: any[];
  state: String;

  constructor(private spinnerService:SpinnerService, private testimonialService: TestimonialService) {
    this.state = 'inactive';
  }

  ngOnInit() {
    this.spinnerService.show();

    this.testimonialService.getTestimonialDetails()
      .map(res => res.json())
      .subscribe(response => {
        this.testimonialDetails = response;
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
