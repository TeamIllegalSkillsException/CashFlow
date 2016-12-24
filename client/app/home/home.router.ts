import { HomeComponent } from './home.component';
import { NavigationComponent } from "../navigation/navigation.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NavigationComponent, outlet: 'header' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRouterModule { }
