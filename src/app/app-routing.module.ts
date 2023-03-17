import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
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
import { UsersResolver } from './resolver/users.resolver';
import { TdfComponent } from './pages/tdf/tdf.component';



const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {
    path:"home", 
    component:HomeComponent,
    resolve:{
      listOfUser:UsersResolver
    },
    canActivate:[AuthGuard]},
  {path:"users", component:UsersComponent, canActivate:[AuthGuard], children:[
    {path:"", component:UserProfileComponent},
    {path:"user-profile", component:UserProfileComponent},
    {path:"user-address", component:UserAddressComponent},
    {path:"user-trans-history", component:UserTransactionHistoryComponent},
    {path:"user-task", component:UserTaskComponent},
  ]},
  {path:"tdf", component:TdfComponent, canActivate:[AuthGuard]},
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
  { path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'feature-users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes,{
    //   preloadingStrategy:PreloadAllModules
    // })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
