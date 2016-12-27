/* App modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

/* Custom Modules */
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactUsModule } from './contact-us/contact-us.module';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

/* Services */
import { PreloaderService } from './shared/services/preloader';
import { SpinnerService } from './shared/services/spinner';

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
    AboutModule,
    ContactUsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ], { useHash: true }),
  ],
  providers: [
    PreloaderService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
