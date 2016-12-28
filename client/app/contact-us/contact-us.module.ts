import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsRouterModule } from './contact-us.router';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { FormsModule } from '@angular/forms'
import { ContactService } from '../services/contact.service';
import { AgmCoreModule } from '../../../node_modules/angular2-google-maps/core';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ContactUsRouterModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDN-_oub4aZ1Ql607_wbx2eoRqwAHHFeS0'
    })
  ],
  declarations: [
    ContactFormComponent,
    ContactUsComponent,
    BannerComponent,
    MapComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactUsModule { }
