import { NgModule } from '@angular/core';
import { NgEnquiryComponent } from './ng-enquiry.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';



@NgModule({
  declarations: [
    NgEnquiryComponent,
    EnquiryFormComponent
  ],
  imports: [
  ],
  exports: [
    NgEnquiryComponent
  ]
})
export class NgEnquiryModule { }
