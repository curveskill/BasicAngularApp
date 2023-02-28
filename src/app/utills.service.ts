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
}
