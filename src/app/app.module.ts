import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserTransactionHistoryComponent } from './user-transaction-history/user-transaction-history.component';
import { UserTaskComponent } from './user-task/user-task.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { MakeJsonPipe } from './make-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    UsersComponent,
    ProductsComponent,
    EnquiryComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    UserAddressComponent,
    UserTransactionHistoryComponent,
    UserTaskComponent,
    HeaderComponent,
    EmployeesComponent,
    MakeJsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
