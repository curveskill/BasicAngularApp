import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtillsService {
  // isUserLoggedIn = new Subject<any>();
  isUserLoggedIn = new BehaviorSubject<any>(false);
  userDetails = new BehaviorSubject<any>(null);
  constructor(private router:Router) { }

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
}
