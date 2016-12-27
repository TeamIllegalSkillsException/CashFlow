import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
   public firstName: string;
   public lastName: string;
   public email: string;
   public message: string;
   
  constructor() { }

  ngOnInit() {
  }

}
