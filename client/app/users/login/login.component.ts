import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {SpinnerService} from "../../shared/services/spinner/spinner.service";
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,
              private spinnerService:SpinnerService,
              private userService: UserService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit():void {
    this.spinnerService.show();
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    
    if (this.form.valid) {
      this.userService.loginUser(values)
        // .subscribe(response => {
        //   if (!response.username || !response.auth_token) {
        //     throw new Error('Incorrect response');
        //   }
        // });
    }
  }

}
