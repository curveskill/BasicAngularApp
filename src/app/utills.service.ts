import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtillsService {
  isUserLoggedIn = new Subject<any>();
  // isUserLoggedIn = new BehaviorSubject<any>(null);
  userDetails = new BehaviorSubject<any>(null);
  constructor() { }

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
}
