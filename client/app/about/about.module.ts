import { NgModule } from '@angular/core';
import { AboutRouterModule } from './about.router';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';


@NgModule({
    imports: [
        AboutRouterModule,
        BrowserModule
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule {}