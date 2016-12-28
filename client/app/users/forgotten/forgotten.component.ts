import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {SpinnerService} from "../../shared/services/spinner/spinner.service";
import {EmailValidator} from "../../shared/validators/email.validator";

@Component({
  selector: 'app-forgotten',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.scss']
})

export class ForgottenComponent implements OnInit {

  public form:FormGroup;
  public email:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private spinnerService: SpinnerService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])]
    });

    this.email = this.form.controls['email'];
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
      // your code goes here
      console.log(values);


    }
  }
}
