import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, forkJoin, Subscription, throwError } from 'rxjs';
import { UtillsService } from 'src/app/services/utills.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-with-api',
  templateUrl: './product-with-api.component.html',
  styleUrls: ['./product-with-api.component.scss'],
})
export class ProductWithApiComponent implements OnInit, OnDestroy {
  productList: any = [];
  productCategoriesList: any = [];
  productsData: any;
  usersData: any;
  postsData: any;
  isClearShow: boolean = false;

  paginationConfig: any = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0,
  };
  productsSubscription!: Subscription;
  productsDeleteSubscription!: Subscription;
  productsAllSubscription!: Subscription;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private utillsService: UtillsService
  ) {}

  ngOnInit(): void {
    this.getAllProduct();
    this.getDataFromMultipleApis();
    this.getAllProductCategories();
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
    this.productsSubscription = this.httpClient.get(`${environment.apiBaseUrl}products?limit=100&skip=0`)
      .subscribe((result: any) => {
        console.log(result);
        this.productList = result.products;
      });

    // this.productsSubscription = this.httpClient.get(`${environment.apiBaseUrl}21313product2323s?limit=100&skip=0`).pipe(catchError((error:HttpErrorResponse)=>{
    //   return this.handleHttpError(error);
    // }))
    //   .subscribe((result: any) => {
    //     console.log(result);
    //     this.productList = result.products;
    //   });
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
      this.productsDeleteSubscription = this.httpClient
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
    this.productsAllSubscription = apiResult.subscribe((res: any) => {
      console.log(res);
      this.productsData = res[0].products;
      this.usersData = res[1].users;
      this.postsData = res[2].posts;
    });
  }

  getAllProductCategories() {
    this.httpClient
      .get(`${environment.apiBaseUrl}products/categories`)
      .subscribe((res: any) => {
        this.productCategoriesList = res;
      });
  }

  getProductByCategory(event: any): void {
    const selectedValue = event.target.value;
    this.httpClient
      .get(`${environment.apiBaseUrl}products/category/${selectedValue}`)
      .subscribe((res: any) => {
        this.productList = res.products;
      });
  }
  getProductByCategoryOnKeyUp(event: any): void {
    const selectedValue = event.target.value;
    if (selectedValue.length == 1 || selectedValue.length > 1) {
      this.isClearShow = true;
    } else {
      this.isClearShow = false;
    }
    console.log(selectedValue);
    // this.httpClient.get(`${environment.apiBaseUrl}products/category/${selectedValue}`).subscribe((res:any)=>{
    //   this.productList = res.products;
    // })
  }
  clearInput() {
    const inputEl: any = document.getElementById('searchInput');
    inputEl.value = '';
    this.isClearShow = false;
    this.getAllProduct();
  }
  getProductByCategoryOnClick(event: any) {
    const inputEl: any = document.getElementById('searchInput');
    const selectedValue = inputEl.value;
    if (selectedValue.length == 1 || selectedValue.length > 1) {
      this.httpClient
        .get(`${environment.apiBaseUrl}products/category/${selectedValue}`)
        .subscribe((res: any) => {
          this.productList = res.products;
        });
    }
  }

  pageChanged($event: any) {
    // console.log($event)
    this.paginationConfig.currentPage = $event;
  }
  
  handleHttpError(error: HttpErrorResponse) {
    let errorInfo = '';
    if (error.error instanceof ErrorEvent) {
      errorInfo = `Client Side Error ${error.message}`;
    } else {
      errorInfo = `Server Side Error -Status ${error.status}- MSG ${error.message}`;
      switch (error.status) {
        case 404:
          this.toastr.error(error.message);
          break;
        case 401:
          this.toastr.error(
            'Unauthorized attempt, Please login to continue'
          );
          break;
        case 500:
          this.toastr.error('Internal Server Error');
          break;
      }
    }
    return throwError(() => new Error(errorInfo));
  }
  
  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
    this.productsDeleteSubscription?.unsubscribe();
    this.productsAllSubscription?.unsubscribe();
  }
}
