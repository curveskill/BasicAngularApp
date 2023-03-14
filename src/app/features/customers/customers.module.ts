import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    WidgetModule
  ]
})
export class CustomersModule { }
