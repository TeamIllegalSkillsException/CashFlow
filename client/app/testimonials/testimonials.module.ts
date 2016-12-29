import { NgModule } from '@angular/core';
import { TestimonialsRouterModule } from './testimonials.router';
import { BrowserModule } from '@angular/platform-browser';
import { TestimonialsComponent } from './testimonials.component';
import { BannerModule } from '../shared/components/banner/banner.module';
import { TestimonialService } from './services/testimonial.service';

@NgModule({
    imports: [
      TestimonialsRouterModule,
      BrowserModule,
      BannerModule
    ],
    declarations: [
      TestimonialsComponent
    ],
    providers: [
      TestimonialService
    ],
})
export class TestimonialModule {}