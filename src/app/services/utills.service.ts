import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtillsService {
  // isUserLoggedIn = new Subject<any>();
  isUserLoggedIn = new BehaviorSubject<any>(false);
  userDetails = new BehaviorSubject<any>(null);
  constructor(private router:Router,private toastrService:ToastrService) { }

  getIsloggedIn(){
    return this.isUserLoggedIn.asObservable();
  }
  
  getToken(){
    return localStorage.getItem("JWTtoken");
  }

  getHttpRequestHeaders(){
    let headersOptions = new HttpHeaders();
    headersOptions = headersOptions.set('Authorization', `Bearer ${this.getToken()}`);
    headersOptions = headersOptions.set('Content-Type', 'application/json');
    return headersOptions
  }

  userLogout(){
    localStorage.removeItem('JWTtoken');
    localStorage.clear();
    this.isUserLoggedIn.next(false)
    this.router.navigate(['/login']);
  }

  showSuccess(message:string, title?:string):void{
    this.toastrService.success(message, title);
    //show sweetalert
  }
  showError(message:string, title?:string):void{
    this.toastrService.error(message, title);
  }
  showWarning(message:string, title?:string):void{
    this.toastrService.warning(message, title);
  }
  showInfo(message:string, title?:string):void{
    this.toastrService.info(message, title);
  }
}
