import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EmployeesComponent } from './employees/employees.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetails2Component } from './product-details2/product-details2.component';
import { ProductWithApiComponent } from './product-with-api/product-with-api.component';
import { ProductsComponent } from './products/products.component';
import { RxjsExamplesComponent } from './rxjs-examples/rxjs-examples.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTaskComponent } from './user-task/user-task.component';
import { UserTransactionHistoryComponent } from './user-transaction-history/user-transaction-history.component';
import { UsersComponent } from './users/users.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent,canActivate:[AuthGuard]},
  {path:"users", component:UsersComponent,canActivate:[AuthGuard], children:[
    {path:"", component:UserProfileComponent},
    {path:"user-profile", component:UserProfileComponent},
    {path:"user-address", component:UserAddressComponent},
    {path:"user-trans-history", component:UserTransactionHistoryComponent},
    {path:"user-task", component:UserTaskComponent},
  ]},
  {path:"products", component:ProductsComponent, canActivate:[AuthGuard]},
  {path:"contact-us", component:ContactUsComponent,canActivate:[AuthGuard]},
  {path:"enquiry", component:EnquiryComponent,canActivate:[AuthGuard]},
  {path:"employees", component:EmployeesComponent,canActivate:[AuthGuard]},
  {path:"add-employee", component:AddEmployeeComponent,canActivate:[AuthGuard]},
  {path:"rxjs", component:RxjsExamplesComponent,canActivate:[AuthGuard]},
  {path:"product-with-api", component:ProductWithApiComponent,canActivate:[AuthGuard]},
  {path:"add-product", component:AddProductComponent,canActivate:[AuthGuard]},
  {path:"edit-product/:id", component:EditProductComponent,canActivate:[AuthGuard]},
  {path:"view-product/:id", component:ViewProductComponent,canActivate:[AuthGuard]},
  {path:"product-with-api", component:ProductWithApiComponent,canActivate:[AuthGuard]},
  {path:"product-details/:productId", component:ProductDetailsComponent,canActivate:[AuthGuard]},
  {path:"product-details2", component:ProductDetails2Component,canActivate:[AuthGuard]},
  {path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
