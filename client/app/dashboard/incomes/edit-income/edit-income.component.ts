/* Common */
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

/* Custom */
import { Income } from '../models/income.model';
import { IncomeService } from '../../services/income.service';

const MIN_FIELD_LENGTH = 3,
  MAX_FIELD_LENGTH = 20,
  LETTERS_PATTERN = '^[A-Za-zА-Яа-я]+$';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.scss']
})
export class EditIncomeComponent implements OnInit {
  userIncome: Income;
  public editUserIncomeForm: FormGroup;
  public company: AbstractControl;
  public amount: AbstractControl;
  public startDate: AbstractControl;
  public account: AbstractControl;
  public recurrence: AbstractControl;

  public inEditMode:boolean = false;
  public submitted:boolean = false;

  constructor(private fb: FormBuilder,
              private incomeService: IncomeService) {
    this.initEditUserIncomeFormValidation();
    this.initEditUserIncomeFormFields();
  }
  
  initEditUserIncomeFormValidation(): void {
    this.editUserIncomeForm = this.fb.group({
      'company': ['', Validators.compose([
        Validators.required,
        Validators.minLength(MIN_FIELD_LENGTH),
        Validators.maxLength(MAX_FIELD_LENGTH),
        Validators.pattern(LETTERS_PATTERN)
      ])],
      'amount': ['', Validators.compose([
        Validators.required,
        Validators.minLength(MIN_FIELD_LENGTH),
        Validators.maxLength(MAX_FIELD_LENGTH),
        Validators.pattern(LETTERS_PATTERN)
      ])],
      'startDate': ['', Validators.compose([Validators.required])],
      'account': ['', Validators.compose([Validators.required])],
      'recurrence': ['', Validators.compose([Validators.required])],
    });
  }

  initEditUserIncomeFormFields(): void {
    this.company = this.editUserIncomeForm.controls['company'];
    this.amount = this.editUserIncomeForm.controls['amount'];
    this.startDate = this.editUserIncomeForm.controls['startDate'];
    this.account = this.editUserIncomeForm.controls['account'];
    this.recurrence = this.editUserIncomeForm.controls['recurrence'];
  }

  toggleEditMode(value:boolean): void {
    this.inEditMode = value;
  } 
           
  ngOnInit() {
    this.incomeService.getUserIncome()
      .map(res => res.json())
      .subscribe(response => {
        this.userIncome = response;
      });
  }

  updateUserIncomeData() {
    this.incomeService.updateUserIncome(this.userIncome)
      .subscribe(response => {

        console.log(response);

        const successTitle = "Success!";
        const successMessage = "You have updated your profile!";
      
      }, err => {

        const errorTitle = "Oops! Something went wrong..";
        const errorMessage = err.json().message;
      }, () => {
        // setTimeout(() => this.appRouter.navigateByUrl('/login'), 500);
      });
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.editUserIncomeForm.valid) {
      this.updateUserIncomeData();
    }
  }

}
