export class Account {
  _id: string;
  user_id: string;
  name: string;
  amount: Number;
  type: string;
  currency: string;
  dateCreated: Date;

  constructor(name: string = '', amount: Number = 0, type: string = 'Normal', currency: string = '$USD') {
    this.name = name;
    this.amount = amount;
    this.type = type;
    this.currency = currency;
  }
}
