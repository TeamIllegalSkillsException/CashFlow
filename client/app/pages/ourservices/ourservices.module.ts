import { NgModule } from '@angular/core';
import { OurServicesRouterModule } from './ourservices.router';
import { BrowserModule } from '@angular/platform-browser';
import { OurservicesComponent } from './ourservices.component';
import { OurServicesService } from './services/ourservices.services';
import { BannerModule } from '../../shared/components/banner/banner.module';

@NgModule({
    imports: [
      OurServicesRouterModule,
      BrowserModule,
      BannerModule
    ],
    declarations: [
      OurservicesComponent
    ],
    providers: [
      OurServicesService
    ],
})
export class OurServicesModule {}
