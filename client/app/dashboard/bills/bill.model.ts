export class Bill {
  _id: string;
  user_id: string;
  amount: Number;
  startDueDate: Date;
  endDueDate: Date;
  accountPaidFrom: String;
  recurrence: String;
  category: String;
  notes: String;
  status: String;

  constructor(amount: Number, startDueDate: Date, endDueDate: Date, recurrence: String, category: String,
   notes: String) {
    this.amount = amount;
    this.startDueDate = startDueDate;
    this.endDueDate = endDueDate;
    this.recurrence = recurrence;
    this.category = category;
    this.notes = notes;
    this.status = 'Unpaid';
  }
}
