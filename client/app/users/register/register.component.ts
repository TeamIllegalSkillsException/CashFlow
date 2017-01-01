/* Modules */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../shared/validators';

/* Services */
import {SpinnerService} from "../../shared/services/spinner/spinner.service";
import {UserService} from '../services/user.service';
import {UserFactoryService} from './../services/user.factory.service';
import {User} from './../models/user.model';
import {AuthService} from '../../shared/services/auth';
import {NotificationsService} from 'angular2-notifications';

const MIN_FIELD_LENGTH = 3,
  MAX_FIELD_LENGTH = 20,
  ALPHA_PATTERN = '^[A-Za-zА-Яа-я0-9]+$';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user: User;

  public form:FormGroup;
  public username:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private appRouter: Router,
              private spinnerService: SpinnerService,
              private userService: UserService,
              private userFactoryService: UserFactoryService,
              private notificationsService: NotificationsService) {
    this.initRegistrationFormAndValidation();
  }

  initRegistrationFormAndValidation():void {
    this.form = this.fb.group({
      'username': ['',
        Validators.compose([
          Validators.required,
          Validators.pattern(ALPHA_PATTERN),
          Validators.minLength(MIN_FIELD_LENGTH),
          Validators.maxLength(MAX_FIELD_LENGTH)])
      ],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': this.fb.group({
        'password': ['',
          Validators.compose([
            Validators.required,
            Validators.minLength(MIN_FIELD_LENGTH),
            Validators.maxLength(MAX_FIELD_LENGTH)])
        ],
        'repeatPassword': ['', 
          Validators.compose([
            Validators.required])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.username = this.form.controls['username'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
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

      this.user = this.userFactoryService.createUser(
        values['username'],
        values['passwords']['password'],
        values['email']);

      this.userService.registerUser(this.user)
        .subscribe(response => {
            const successTitle = "Success!";
            const successMessage = "You have registered successfully!";
            this.notificationsService.success(successTitle, successMessage);

          }, err => {
            this.spinnerService.hide();

            const errorTitle = "Oops! Something went wrong..";
            const errorMessage = err.json().message;
            this.notificationsService.error(errorTitle, errorMessage)
        }, () => {
          setTimeout(() => this.appRouter.navigateByUrl('/login'), 500);
        });
    }
  }

}
