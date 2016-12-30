/* App modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';

/* Custom Modules */
import { UsersModule } from './users/users.module';
import { BannerModule } from './shared/components/banner/banner.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesModule } from './pages/pages.module';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';


/* Services */
import {
  PreloaderService,
  SpinnerService,
  HttpRequesterOptionsFactoryService,
  HttpRequester,
  AuthService,
  AuthGuard
} from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    BannerModule,
    SimpleNotificationsModule,
    DashboardModule,
    PagesModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ], { useHash: true }),
  ],
  providers: [
    PreloaderService,
    SpinnerService,
    HttpRequesterOptionsFactoryService,
    HttpRequester,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
