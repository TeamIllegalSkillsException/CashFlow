/* App modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

/* Custom Modules */
import { HomeModule } from './home/home.module';
<<<<<<< Updated upstream
import { AboutModule } from './about/about.module';
=======
import { ContactUsModule } from './contact-us/contact-us.module';
>>>>>>> Stashed changes

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

/* Services */
import { PreloaderService } from './shared/services/preloader';
import { SpinnerService } from './shared/services/spinner';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    NavigationComponent,
    ContactUsComponent,
=======
    NavigationComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
<<<<<<< Updated upstream
    AboutModule,
=======
    ContactUsModule,
>>>>>>> Stashed changes
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
