/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouterModule } from './dashboard.router';
import { ModalModule } from 'ng2-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';

/* Components */
import { DashboardComponent } from './dashboard.component';
import { DashboardSidebarComponent } from './sidebar/dashboard-sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent} from './account/account.component';
import { BillsComponent } from './bills/bills.component';
import { IncomesComponent } from './incomes/incomes.component';

/* Services */
import { AccountService } from '../dashboard/services/account.service';
import { BillsService } from '../dashboard/services/bills.services';
import { IncomeService } from './services/income.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouterModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule,
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
    AccountComponent,
    IncomesComponent
  ],
  providers: [
    AccountService,
    BillsService,
    IncomeService
  ]
})
export class DashboardModule { }
