import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-with-api',
  templateUrl: './product-with-api.component.html',
  styleUrls: ['./product-with-api.component.scss']
})
export class ProductWithApiComponent implements OnInit {
  productList:any;
  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.httpClient.get("https://dummyjson.com/products").subscribe((result:any)=>{
      console.log(result);
      this.productList = result.products;
    })
  }

  navigateToViewProductDetails(id:number){
    //navigate 
    this.router.navigate([`/product-details/${id}`]);
  }
}
