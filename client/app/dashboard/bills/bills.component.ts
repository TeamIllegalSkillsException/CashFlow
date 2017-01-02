import { Component, OnInit, ViewChild } from '@angular/core';
import { BillsService } from '../services/bills.services';
import { ModalDirective } from 'ng2-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Bill } from './bill.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  public bills: any[];
  public billCategories: any[];
  public billRecurrences: any[];  
  bill: Bill;
  public form:FormGroup;
  public amount:AbstractControl;
  public startDueDate:AbstractControl;
  public endDueDate:AbstractControl;
  public notes:AbstractControl;
  public catModel = '';
  public recModel = '';

  public submitted:boolean = false;

  @ViewChild('childModal') public childModal:ModalDirective;

  constructor(private billsService: BillsService, fb:FormBuilder, private notificationsService: NotificationsService) { 
    this.form = fb.group({
      'amount': ['', Validators.compose([Validators.required])],
      'startDueDate': ['', Validators.compose([Validators.required])],
      'endDueDate': ['', Validators.compose([Validators.required])],
      'notes': ['', Validators.compose([Validators.required])],      
    });

    this.amount = this.form.controls['amount'];
    this.startDueDate = this.form.controls['startDueDate'];
    this.endDueDate = this.form.controls['endDueDate'];
    this.notes = this.form.controls['notes'];    
  }
  

  ngOnInit() {
    this.billsService.getUserBills()
    .map(res => res.json())
    .subscribe(response => {
      console.log(response);
      
    });
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {
      
      this.bill = new Bill(values['amount'], values['startDueDate'],
                          values['endDueDate'], this.recModel, this.catModel, values['notes']);

      this.billsService.addBillToCurrentUser(this.bill)
        .subscribe(response => {
          const successTitle = "Success!";
            const successMessage = "You have added a bill successfully!";
            this.hideChildModal();
            this.notificationsService.success(successTitle, successMessage);
        })      
    }
  }

  public showChildModal(): void {
    this.childModal.show();
    this.billsService.getBillsCategories()
    .map(res => res.json())
    .subscribe(response => {
        this.billCategories = response.categories;
        console.log(this.billCategories); 
    });

    this.billsService.getBillsRecurrences()
    .map(res => res.json())
    .subscribe(response => {
        this.billRecurrences = response.recurrences;
        console.log(this.billRecurrences);
    });
  }
  public hideChildModal():void {
    this.childModal.hide();
  }
}
