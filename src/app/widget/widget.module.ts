import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbAccordionModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const materialModule = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NgxSpinnerModule,
    NgbAlertModule,
    NgbModule,
    NgbAccordionModule,
    ...materialModule
  ]
})
export class WidgetModule { }
