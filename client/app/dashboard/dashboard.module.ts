/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouterModule } from './dashboard.router';
import { ModalModule } from 'ng2-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { DashboardComponent } from './dashboard.component';
import { DashboardSidebarComponent } from './sidebar/dashboard-sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { BillsComponent } from './bills/bills.component';
import { IncomesComponent } from './incomes/incomes.component';

/* Services */
import { BillsService } from '../dashboard/services/bills.services';
import { IncomeService } from './services/income.service';


@NgModule({
  imports: [
    CommonModule,
    DashboardRouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent,
    DashboardSidebarComponent,
    MenuComponent,
    BillsComponent,
    IncomesComponent
  ],
  providers: [
    BillsService,
    IncomeService
  ]
})
export class DashboardModule { }
