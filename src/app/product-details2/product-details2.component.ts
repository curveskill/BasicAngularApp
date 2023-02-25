import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details2',
  templateUrl: './product-details2.component.html',
  styleUrls: ['./product-details2.component.scss']
})
export class ProductDetails2Component implements OnInit {
  params:any = {};
  productDetails:any;
  constructor(private activatedRoute:ActivatedRoute, private httpClient:HttpClient) {
    this.activatedRoute.queryParams.subscribe((qParams:any)=>{
      console.log(qParams)
      this.params = qParams;
    })
  }

  ngOnInit(): void {
    this.getSingleProductDetails();
  }

  getSingleProductDetails(){
    this.httpClient.get(`https://dummyjson.com/products/${this.params.productId}`).subscribe((res:any)=>{
        this.productDetails = res;
    })
  }
}
