/* Common */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

/* Services */
import { NotificationsService } from 'angular2-notifications';
import { AccountService } from '../services/account.service';
import { Account } from './account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account: Account;

  public accounts: any[];
  public form:FormGroup;
  public name:AbstractControl;
  public amount:AbstractControl;
  public submitted:boolean = false;

  @ViewChild('childModal') public childModal:ModalDirective;

  constructor(private fb:FormBuilder,
              private accountService: AccountService,
              private notificationService: NotificationsService) {
    this.initFormFieldsAndValidation();
  }

  initFormFieldsAndValidation(): void {
    this.form = this.fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'amount': ['', Validators.compose([Validators.required])],
    });

    this.name = this.form.controls['name'];
    this.amount = this.form.controls['amount'];
  }

  ngOnInit() {
    this.accountService.getUserAccounts()
      .map(res => res.json())
      .subscribe(response => {
        console.log(response);

      });
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {

      this.account = new Account(values['name'], values['ammount']);

      this.accountService.addAccountToCurrentUser(this.account)
        .subscribe(response => {
          this.hideChildModal();

          const successTitle = "Success!";
          const successMessage = "You have added a new account successfully!";
          this.notificationService.success(successTitle, successMessage);
        })
    }
  }

  public showChildModal(): void {
    this.childModal.show();
  }
  public hideChildModal():void {
    this.childModal.hide();
  }

}
