import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtillsService } from '../utills.service';
@Component({
  selector: 'app-product-with-api',
  templateUrl: './product-with-api.component.html',
  styleUrls: ['./product-with-api.component.scss'],
})
export class ProductWithApiComponent implements OnInit {
  productList: any = [];
  productsData: any;
  usersData: any;
  postsData: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private utillsService:UtillsService
  ) {}

  ngOnInit(): void {
    this.getAllProduct();
    this.getDataFromMultipleApis();
  }

  getAllProduct() {
    // let headersOptions = new HttpHeaders();
    // headersOptions = headersOptions.set('Authorization', `Bearer ${this.utillsService.getToken()}`);
    // headersOptions = headersOptions.set('Content-Type', 'application/json');
    // let params = new HttpParams();
    // params=params.set('page', 12); 
    // this.httpClient.get(`${environment.apiBaseUrl}/api/users`,{params :params}).subscribe((res:any)=>{
    //   console.log(res)
    // })
    
    // this.httpClient
    //   .get(`${environment.apiBaseUrl}products`,{headers:this.utillsService.getHttpRequestHeaders()})
    //   .subscribe((result: any) => {
    //     console.log(result);
    //     this.productList = result.products;
    //   });
    this.httpClient
      .get(`${environment.apiBaseUrl}products`)
      .subscribe((result: any) => {
        console.log(result);
        this.productList = result.products;
      });
  }

  viewProduct(item: any) {
    //navigate
    this.router.navigate([`/edit-product/${item.id}`]);
  }
  navigateToViewProductDetails(id: number) {
    //navigate
    this.router.navigate([`/product-details/${id}`]);
  }
  navigateToViewProductDetails2(item: any) {
    //navigate
    this.router.navigate([`/product-details2`], {
      queryParams: { productId: item.id, brand: item.brand },
    });
  }

  deleteProduct(item: any) {
    const isConfirmed = confirm('Are you sure wwant to delete this record?');
    if (isConfirmed) {
      this.httpClient
        .delete(`${environment.apiBaseUrl}products/${item.id}`)
        .subscribe((result: any) => {
          console.log(result);
          if (result) {
            this.toastr.success('Product deleted successfully', 'Success');
          } else {
            this.toastr.error('Error Occure', 'Error');
          }
        });
    }
  }

  getDataFromMultipleApis() {
  
    const productApi = this.httpClient.get(
      `${environment.apiBaseUrl}/products`
    );
    const userApi = this.httpClient.get(`${environment.apiBaseUrl}users`);
    const postsApi = this.httpClient.get(`${environment.apiBaseUrl}posts`);

    const apiResult = forkJoin([productApi, userApi, postsApi]); //retuns observable
    apiResult.subscribe((res: any) => {
      console.log(res);
      this.productsData = res[0].products;
      this.usersData = res[1].users;
      this.postsData = res[2].posts;
    });
  }
}
