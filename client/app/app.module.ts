/* App modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

/* Custom Modules */
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { AboutModule } from './about/about.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { BannerModule } from './shared/components/banner/banner.module';
import { TestimonialModule } from './testimonials/testimonials.module';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

/* Services */
import { PreloaderService } from './shared/services/preloader';
import { SpinnerService } from './shared/services/spinner';
import { HttpRequesterOptionsFactoryService } from './services/http-requester-options-factory.service';
import { HttpRequester } from './services/http-requester.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PreloaderComponent,
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
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ], { useHash: true }),
  ],
  providers: [
    PreloaderService,
    SpinnerService,
    HttpRequesterOptionsFactoryService,
    HttpRequester
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
