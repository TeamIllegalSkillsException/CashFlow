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

/* Services */
import { UserService } from './services/user.service';
import { UserFactoryService } from './services/user.factory.service';

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
  ],
  providers: [
    UserService,
    UserFactoryService
  ]
})
export class UsersModule { }
