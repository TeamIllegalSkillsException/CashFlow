import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactFormComponent,
    ContactUsComponent
  ]
})
export class ContactUsModule { }
