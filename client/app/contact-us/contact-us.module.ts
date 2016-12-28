import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsRouterModule } from './contact-us.router';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { FormsModule } from '@angular/forms'
import { ContactService } from '../services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ContactUsRouterModule,
    FormsModule
  ],
  declarations: [
    ContactFormComponent,
    ContactUsComponent,
    BannerComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactUsModule { }
