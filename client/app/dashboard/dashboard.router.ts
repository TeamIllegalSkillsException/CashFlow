/* Modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { DashboardComponent } from './dashboard.component';

/* Services */
import { AuthGuard } from '../shared/services/auth';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-bills', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-income', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRouterModule {

}
