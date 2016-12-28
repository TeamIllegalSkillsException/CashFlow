export class Contact {
    firstName: string;
    secondName: string;
    email: string;
    subject: string;
    message: string;

    constructor(firstName: string, secondName: string, email: string, subject:string, message: string) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
};