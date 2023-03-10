import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // providers:[EmployeeService]
})
export class ProductsComponent implements OnInit {
  userName:string = "Sajjad Razi";
  userMobileNo:number = 98798797381;
  isUserActive:boolean =  true;
  countryList:string[] = ["India","Dubai","America"];
  productImg:string = "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg";
  
  productList:any = [
    {productName:"xyz",createdAt:new Date(), isActive:true, productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"slkjlasds",createdAt:new Date(),isActive:false, productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"asdas", createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"asd", productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"xasdasdyz", createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"asd",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"xzcvzxv",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"zxcvxzcv",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"xvc",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"xyz",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    // {productName:"xyz", createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
  ]

  empData: any = [];
  empDetaile:any;
  constructor(private employeeService:EmployeeService) { 
    console.log(this.employeeService);
    // this.empData = this.employeeService.empList;
   
    this.empDetaile = this.employeeService.getEmpDataBasedOnIndex(1);
    setTimeout(()=>{
      this.productList.push({productName:"Sajjad",isActive:true, createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"})
    },3000)
  }

  ngOnInit(): void {
    console.log("ngOnInit is called");
    this.loadEmployeesData();
  }

  loadEmployeesData(){
    this.empData = this.employeeService.getAllEmpData();
  }

  updateUserName(message:string):void{
    console.log("Onclick event is executed");
    this.userName = `${message} Pradeep`;
  }
  
  trackProducts(index:number, item:any):any{
    // console.log(index)
    // console.log(item)
    return index
  }
}
