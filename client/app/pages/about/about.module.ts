import { NgModule } from '@angular/core';
import { AboutRouterModule } from './about.router';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { AboutUsService } from './services/about.service';
import { BannerModule } from '../../shared/components/banner/banner.module';
import { ArrayFormatterPipe } from '../../shared/pipes'

@NgModule({
    imports: [
      AboutRouterModule,
      BrowserModule,
      BannerModule
    ],
    declarations: [
      AboutComponent,
      ArrayFormatterPipe
    ],
    providers: [
      AboutUsService
    ],
})
export class AboutModule {}
