import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactModel: Contact;

  @Output('sent') emitter: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contactModel = new Contact('', '', '','', '');
  }

  contact() {
    let contactOperation:Observable<Contact[]>;
    
    contactOperation =  this.contactService.send(this.contactModel);

    window.alert('sent mail');      
  
    contactOperation.subscribe(
    (contacts) => {
      this.contactModel = new Contact('','','','','');
    }, error => console.log(error));
  };
}
