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

  constructor(fb:FormBuilder,
              private authService: AuthService,
              private appRouter: Router,
              private spinnerService: SpinnerService,
              private userService: UserService,
              private userFactoryService: UserFactoryService) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
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
      this.spinnerService.show();
      this.user = this.userFactoryService.createUser(
        values['username'],
        values['passwords']['password'],
        values['email']);

      this.userService.registerUser(this.user)
        .subscribe(response => {
            console.log(response);

            this.spinnerService.hide();
            setTimeout(() => this.appRouter.navigateByUrl('/login'), 1500);
          },
          err => console.log(err));


    }
  }

}
