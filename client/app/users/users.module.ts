/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRouterModule } from './users.router';

/* Components */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgottenComponent } from './forgotten/forgotten.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ForgottenComponent
  ]
})
export class UsersModule { }
