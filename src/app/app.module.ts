import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductDetails2Component } from './pages/product-details2/product-details2.component';
import { ProductWithApiComponent } from './pages/product-with-api/product-with-api.component';
import { ProductsComponent } from './pages/products/products.component';
import { RxjsExamplesComponent } from './pages/rxjs-examples/rxjs-examples.component';
import { UserAddressComponent } from './pages/user-address/user-address.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserTaskComponent } from './pages/user-task/user-task.component';
import { UserTransactionHistoryComponent } from './pages/user-transaction-history/user-transaction-history.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './pages/header/header.component';
import { MakeJsonPipe } from './pipes/make-json.pipe';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ChangeColorDirective } from './directives/change-color.directive';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    MakeJsonPipe,
    RxjsExamplesComponent,
    ProductWithApiComponent,
    ProductDetailsComponent,
    ProductDetails2Component,
    AddEmployeeComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    LoginComponent,
    ChangeColorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgbAlertModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [EmployeeService],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
