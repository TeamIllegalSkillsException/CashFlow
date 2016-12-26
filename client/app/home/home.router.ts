import { HomeComponent } from './home.component';
import { NavigationComponent } from "../navigation/navigation.component";
import { SliderComponent } from "./slider/slider.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NavigationComponent, outlet: 'header' },
  { path: '', component: SliderComponent, outlet: 'presentation' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRouterModule {

}
