/* Modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { DashboardComponent } from './dashboard.component';
import { BillsComponent } from './bills/bills.component';
import { AccountComponent } from './account/account.component';
import { IncomesComponent } from './incomes/incomes.component';

/* Services */
import { AuthGuard } from '../shared/services/auth';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-bills', component: BillsComponent },
  { path: 'user-accounts', component: AccountComponent },
  { path: 'user-income', component: IncomesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRouterModule {

}
