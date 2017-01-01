/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouterModule } from './dashboard.router';

/* Components */
import { DashboardComponent } from './dashboard.component';
import { DashboardSidebarComponent } from './sidebar/dashboard-sidebar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouterModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent,
    DashboardSidebarComponent,
    MenuComponent
  ]
})
export class DashboardModule { }
