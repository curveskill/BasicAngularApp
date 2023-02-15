import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  userName:string = "Sajjad Razi";
  userMobileNo:number = 98798797381;
  isUserActive:boolean =  true;
  countryList:string[] = ["India","Dubai","America"];
  productImg:string = "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg";
  
  productList:any = [
    {productName:"xyz",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"slkjlasds",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"asdas", createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"asd", productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"xasdasdyz", createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"asd",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"xzcvzxv",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"zxcvxzcv",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"xvc",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"xyz",createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
    {productName:"xyz", createdAt:new Date(), productImg:"https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  updateUserName(message:string):void{
    console.log("Onclick event is executed");
    this.userName = `${message} Pradeep`;
  }
}
