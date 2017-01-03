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

  public currentCategory: any;
  public currentRecurrence: any; 
  public currentAmount: any; 
  public currentStartDueDate: any; 
  public currentEndDueDate: any; 
  public currentNotes: any; 
   
  public isEditEnabled = false;
  public amountModel = 0;
  public startDateModel = new Date();
  public endDateModel = new Date();
  public notesModel = '';
  public currentBillId = '';

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 3;

  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('editModal') public editModal:ModalDirective;  

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
        // console.log(response);
        this.data = response.bills;
      });

      this.billsService.getBillsCategories()
      .map(res => res.json())
      .subscribe(response => {
          this.billCategories = response.categories;
      });

      this.billsService.getBillsRecurrences()
      .map(res => res.json())
      .subscribe(response => {
          this.billRecurrences = response.recurrences;
      });
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {
      this.bill = new Bill(values['amount'], values['startDueDate'].formatted,
                          values['endDueDate'].formatted, this.recModel, this.catModel, values['notes']);

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
    this.catModel = '';
    this.recModel = '';
    this.childModal.show();    
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  public toInt(num: string) {
      return +num;
  }

  public sortByWordLength = (a: any) => {
     // return a.city.length;
  }

  public edit(item) {
    this.editModal.show();
    console.log(item);
    this.catModel = item.category;
    this.recModel = item.recurrence;
    this.amountModel = +item.amount;
    // this.startDateModel = item.startDueDate.formatted;
    // this.endDateModel = item.endDueDate.formatted;
  //  console.log(this.endDateModel);
    this.notesModel = item.notes;
    this.currentBillId = item._id;
    // console.log(this.currentBillId);

    // RESET ngMODELS
  }

  public OnUpdateClick() {
    let updatedBill = new Bill(this.amountModel, this.startDateModel, this.endDateModel,
                        this.recModel, this.catModel, this.notesModel);
    
    updatedBill._id = this.currentBillId;

    this.billsService.updateBill(updatedBill)
      .subscribe(response => {
        console.log(response);
        this.editModal.hide();
         const successTitle = "Success!";
          const successMessage = "You have updated a bill successfully!";
          this.notificationsService.success(successTitle, successMessage);
      });

    this.catModel = '';
    this.recModel = '';
    this.amountModel = 0;
    this.startDateModel = new Date();
    this.endDateModel = new Date();
    this.notesModel = ''; 
  }
}
