import { NgModule } from '@angular/core';
import { AboutRouterModule } from './about.router';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { AboutUsService } from './services/about.service';
import { BannerModule } from '../shared/components/banner/banner.module';

@NgModule({
    imports: [
      AboutRouterModule,
      BrowserModule,
      BannerModule
    ],
    declarations: [
      AboutComponent
    ],
    providers: [
      AboutUsService
    ],
})
export class AboutModule {}
