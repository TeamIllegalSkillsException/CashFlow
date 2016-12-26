/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouterModule } from './home.router';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ng2-bootstrap/carousel';

/* Components */
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  declarations: [HomeComponent, SliderComponent]
})
export class HomeModule { }
