import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    WidgetModule
  ]
})
export class UsersModule { }
