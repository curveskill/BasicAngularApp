import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  params:any;
  productDetails:any;
  constructor(private activatedRoute:ActivatedRoute, private httpClient:HttpClient) {
    this.activatedRoute.params.subscribe((paramsResult:any)=>{
      this.params = paramsResult;
      console.log(this.params);
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
