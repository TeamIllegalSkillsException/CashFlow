import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs/Rx';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, StringValidator } from '../../shared/validators';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactModel: Contact;
  public form: FormGroup;
  public firstName: AbstractControl;
  public lastName: AbstractControl;  
  public email: AbstractControl;
  public subject: AbstractControl;
  public message: AbstractControl;  

  public submitted:boolean = false;

  constructor(private contactService: ContactService, private fb:FormBuilder) { 
    this.form = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(4), StringValidator.validate])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(4), StringValidator.validate])],      
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate, StringValidator.validate])],
      'subject': ['', Validators.compose([Validators.required])],
      'message': ['', Validators.compose([Validators.required, Validators.minLength(10), StringValidator.validate])]   
    });

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];    
    this.email = this.form.controls['email'];
    this.subject = this.form.controls['subject'];
    this.message = this.form.controls['message'];    

  }

  ngOnInit() {
     this.contactModel = new Contact('', '', '','', '');
  }

  onSubmit(values:Object): void {
    
    let contactOperation:Observable<Contact[]>;

    this.contactModel = new Contact(this.firstName.value.trim(), 
                  this.lastName.value.trim(), this.email.value.trim(), this.subject.value.trim(), this.message.value.trim());

    contactOperation = this.contactService.send(this.contactModel);

    this.form.reset();     
  
    contactOperation.subscribe(
    (contacts) => {
      this.contactModel = new Contact('','','','','');
    }, error => console.log(error));
  };
}
