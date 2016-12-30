/* Modules */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsModule} from "./contact-us/contact-us.module";
import {AboutModule} from "./about/about.module";
import {TestimonialModule} from "./testimonials/testimonials.module";
import {OurServicesModule} from "./ourservices/ourservices.module";
import {HomeModule} from "./home/home.module";

/* Services */
import {OurServicesService} from "./ourservices/services/ourservices.services";
import {AboutUsService} from "./about/services/about.service";
import {TestimonialService} from "./testimonials/services/testimonial.service";

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    OurServicesModule,
    TestimonialModule,
    AboutModule,
    ContactUsModule
  ],
  declarations: [],
  providers: [
    OurServicesService,
    AboutUsService,
    TestimonialService
  ],
})
export class PagesModule { }
