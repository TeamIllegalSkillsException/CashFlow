/* Modules */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

/* Services */
import {SpinnerService} from "../../shared/services/spinner/spinner.service";
import {UserService} from '../services/user.service';
import {User} from './../models/user.model';
import {AuthService} from '../../shared/services/auth';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,
              private authService: AuthService,
              private appRouter: Router,
              private spinnerService:SpinnerService,
              private userService: UserService,
              private notificationsService: NotificationsService) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  ngOnInit():void {
    this.spinnerService.show();

    if(this.authService.isLoggedIn()){
      this.appRouter.navigateByUrl('/dashboard');
    }
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {

      this.userService.loginUser(this.form.value)
        .map((res) => res.json())
        .subscribe(response => {

          if(!response.auth_token){
            throw new Error('Invalid login');
          }

          localStorage.setItem('user', JSON.stringify(response));
          this.userService.setLoggedUser(response);

          const successTitle = "Welcome!";
          const successMessage = "You have logged in successfully!";
          this.notificationsService.success(successTitle, successMessage);
        }, (err) => {

          const errorTitle = "Invalid credentials!";
          const errorMessage = "Wrong username or password! Please try again.";
          this.notificationsService.error(errorTitle, errorMessage);
        }, () => {

          setTimeout(() => this.appRouter.navigateByUrl('/dashboard'), 500);
        });
    }
  }

}
