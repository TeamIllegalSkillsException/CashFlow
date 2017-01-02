import { Component, OnInit, ViewChild } from '@angular/core';
import { IncomeService } from '../services/income.service';
import { ModalDirective } from 'ng2-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Income } from './models/income.model';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnInit {
  public incomes: any[];
  public incomeRecurrences: any[];
  public accounts: any[];
  income: Income;
  public form:FormGroup;
  public company: AbstractControl;
  public amount:AbstractControl;
  public startDate:AbstractControl;
  public catModel = '';
  public recModel = '';

  public submitted:boolean = false;

  @ViewChild('childModal') public childModal:ModalDirective;

  constructor(private incomeService: IncomeService, fb:FormBuilder, private notificationsService: NotificationsService) {
    this.form = fb.group({
      'company':['', Validators.compose([Validators.required])],
      'amount': ['', Validators.compose([Validators.required])],
      'startDate': ['', Validators.compose([Validators.required])],
    });

    this.company = this.form.controls['company'];
    this.amount = this.form.controls['amount'];
    this.startDate = this.form.controls['startDate'];

   }

  ngOnInit() {
    this.incomeService.getUserIncome()
    .map(res => res.json())
    .subscribe(response => {
      this.incomes = response;
    })
  }
  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {
      
      this.income = new Income(values['company'], values['amount'], values['startDate'], values['accounts'], values['recurrence']);

      this.incomeService.addIncomeToCurrentUser(this.income)
        .subscribe(response => {
          const successTitle = "Success!";
            const successMessage = "You have added an income successfully!";
            this.hideChildModal();
            this.notificationsService.success(successTitle, successMessage);
        })      
    }
  }

  public showChildModal(): void {
    this.childModal.show();

    this.incomeService.getIncomeRecurrences()
    .map(res => res.json())
    .subscribe(response => {
        this.incomeRecurrences = response.recurrences;
        console.log(this.incomeRecurrences);
    });
  }
  public hideChildModal():void {
    this.childModal.hide();
  }

}
