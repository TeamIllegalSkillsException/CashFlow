export class Contact {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;

    constructor(firstName: string, lastName: string, email: string, subject:string, message: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
};