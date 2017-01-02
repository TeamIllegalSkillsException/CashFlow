export class Income {
    _id: string;
    user_id: string;
    company: string;
    amount: Number;
    startDate: Date;
    accounts: string;
    recurrence: string;

    constructor (company: string, amount: Number, startDate: Date, recurrence: string) {
        this.company = company;
        this.amount = amount;
        this.startDate = startDate;
        this.recurrence = recurrence;
    }

}