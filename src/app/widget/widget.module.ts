import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbAccordionModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NgxSpinnerModule,
    NgbAlertModule,
    NgbModule,
    NgbAccordionModule
  ]
})
export class WidgetModule { }
