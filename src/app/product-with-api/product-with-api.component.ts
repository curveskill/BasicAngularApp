import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-with-api',
  templateUrl: './product-with-api.component.html',
  styleUrls: ['./product-with-api.component.scss']
})
export class ProductWithApiComponent implements OnInit {
  productList:any = [];
  productsData:any;
  usersData:any;
  postsData:any;
  constructor(private httpClient:HttpClient,private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.getDataFromMultipleApis();
  }

  getAllProduct(){
    this.httpClient.get("https://dummyjson.com/products").subscribe((result:any)=>{
      console.log(result);
      this.productList = result.products;
    })
  }

  viewProduct(item:any){
    //navigate 
    this.router.navigate([`/edit-product/${item.id}`]);
  }
  navigateToViewProductDetails(id:number){
    //navigate 
    this.router.navigate([`/product-details/${id}`]);
  }
  navigateToViewProductDetails2(item:any){
    //navigate 
    this.router.navigate([`/product-details2`],{ queryParams: {  productId: item.id, brand: item.brand}});
  }

  deleteProduct(item:any){
    const isConfirmed = confirm("Are you sure wwant to delete this record?");
    if(isConfirmed){
      this.httpClient.delete(`https://dummyjson.com/products/${item.id}`).subscribe((result:any)=>{
      console.log(result);
      if(result){
        this.toastr.success("Product deleted successfully","Success");
      }else{
        this.toastr.error("Error Occure","Error");
      }
    })
    }
  }


  getDataFromMultipleApis(){
    const productApi = this.httpClient.get('https://dummyjson.com/products');
    const userApi = this.httpClient.get('https://dummyjson.com/users');
    const postsApi = this.httpClient.get('https://dummyjson.com/posts');

    const apiResult = forkJoin([productApi,userApi,postsApi]); //retuns observable
    apiResult.subscribe((res:any)=>{
      console.log(res);
      this.productsData = res[0].products
      this.usersData = res[1].users
      this.postsData = res[2].posts
    })
  }
}
