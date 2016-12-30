/* App modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';

/* Custom Modules */
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { AboutModule } from './about/about.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { BannerModule } from './shared/components/banner/banner.module';
import { TestimonialModule } from './testimonials/testimonials.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OurServicesModule } from './ourservices/ourservices.module';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

/* Services */
import { PreloaderService } from './shared/services/preloader';
import { SpinnerService } from './shared/services/spinner';
import { HttpRequesterOptionsFactoryService } from './shared/services/http/http-requester-options-factory.service';
import { HttpRequester } from './shared/services/http/http-requester.service';
import { AboutUsService } from './about/services/about.service';
import { TestimonialService } from './testimonials/services/testimonial.service';
import { AuthService, AuthGuard } from './shared/services/auth';
import { OurServicesService } from './ourservices/services/ourservices.services';

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
    HomeModule,
    UsersModule,
    AboutModule,
    ContactUsModule,
    BannerModule,
    TestimonialModule,
    DashboardModule,
    OurServicesModule,
    SimpleNotificationsModule,
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
    AboutUsService,
    TestimonialService,
    AuthService,
    AuthGuard,
    OurServicesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
