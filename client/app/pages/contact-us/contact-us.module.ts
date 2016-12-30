import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsRouterModule } from './contact-us.router';
import { BannerModule } from '../../shared/components/banner/banner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ContactService, SiteSettingsService } from './services';
import { AgmCoreModule } from '../../../../node_modules/angular2-google-maps/core';
import { MapComponent } from './map/map.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ContactUsRouterModule,
    FormsModule,
    BannerModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDN-_oub4aZ1Ql607_wbx2eoRqwAHHFeS0'
    })
  ],
  declarations: [
    ContactFormComponent,
    ContactUsComponent,
    MapComponent,
    ContactInfoComponent
  ],
  providers: [
    ContactService,
    SiteSettingsService
  ]
})
export class ContactUsModule { }
