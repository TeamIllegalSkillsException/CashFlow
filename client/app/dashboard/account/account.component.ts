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
  public accountForEdit: Account;

  public accounts: any[];
  public form:FormGroup;
  public name:AbstractControl;
  public amount:AbstractControl;
  public submitted:boolean = false;

  public inEditMode = false;
  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 10;

  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('childModalEdit') public childModalEdit:ModalDirective;

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
    this.getUserAccountsData();
  }

  getUserAccountsData() {
    this.accountService.getUserAccounts()
      .map(res => res.json())
      .subscribe(response => {
        this.data = response.accounts;
      },(err) => {
        const infoTitle = "Hey there! : )";
        const infoMessage = err.json().message;
        this.notificationService.info(infoTitle, infoMessage);
      });
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {

      this.account = new Account(values['name'], values['amount']);

      this.accountService.addAccountToCurrentUser(this.account)
        .subscribe(response => {
          this.hideChildModal();
          this.getUserAccountsData();

          const successTitle = "Success!";
          const successMessage = "You have added a new account successfully!";
          this.notificationService.success(successTitle, successMessage);
        }, (err) => {

          const errorTitle = "An error occured..";
          const errorMessage = err.json().message;
          this.notificationService.error(errorTitle, errorMessage);
        })
    }
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  public toggleEditMode(editMode) {
    this.inEditMode = editMode;
  }

  public updateAccount(){
    this.accountService.updateUserAccountData(this.accountForEdit)
      .subscribe(response => {
        const successTitle = "Success!";
        const successMessage = "You have updated your account!";
        this.notificationService.success(successTitle, successMessage);
      }, err => {

        const errorTitle = "Oops! Something went wrong..";
        const errorMessage = err.json().message;
        this.notificationService.error(errorTitle, errorMessage)
      }, () => {
        this.childModalEdit.hide();
      });
  }

  public edit(accountId) {
    let accountObj = this.data.filter(doc => doc._id == accountId)[0];
    this.accountForEdit = accountObj;
    console.log(this.accountForEdit);

    this.childModalEdit.show();
  }
}
