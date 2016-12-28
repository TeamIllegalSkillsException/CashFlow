import { NgModule } from '@angular/core';
import { AboutRouterModule } from './about.router';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { AboutUsService } from '../services/about.service';


@NgModule({
    imports: [
        AboutRouterModule,
        BrowserModule
    ],
    declarations: [
        AboutComponent
    ],
    providers: [
        AboutUsService
    ],
})
export class AboutModule {}