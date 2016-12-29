/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouterModule } from './dashboard.router';

/* Components */
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
