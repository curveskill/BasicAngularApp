import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeesComponent } from './employees/employees.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTaskComponent } from './user-task/user-task.component';
import { UserTransactionHistoryComponent } from './user-transaction-history/user-transaction-history.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"users", component:UsersComponent, children:[
    {path:"", component:UserProfileComponent},
    {path:"user-profile", component:UserProfileComponent},
    {path:"user-address", component:UserAddressComponent},
    {path:"user-trans-history", component:UserTransactionHistoryComponent},
    {path:"user-task", component:UserTaskComponent},
  ]},
  {path:"products", component:ProductsComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"enquiry", component:EnquiryComponent},
  {path:"employees", component:EmployeesComponent},
  {path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
