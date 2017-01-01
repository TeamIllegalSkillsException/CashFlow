import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../../shared/services/auth';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private appRouter: Router,
              private authService: AuthService,
              private userService: UserService,
              private notificationsService: NotificationsService) { }

  ngOnInit() {
    
    this.userService.logoutUser()
      .subscribe((response) => {
        
        const successTitle = "Success!";
        const successMessage = "Redirecting you to dashboard!";
        this.notificationsService.success(successTitle, successMessage);

        this.authService.clearLoggedUser();
      }, (err) => {
        
        const errorTitle = "Oops! Something went wrong..";
        const errorMessage = err.json().message;
        this.notificationsService.error(errorTitle, errorMessage)
      }, () => {
        
        this.appRouter.navigateByUrl('/');
      });
  }

}
