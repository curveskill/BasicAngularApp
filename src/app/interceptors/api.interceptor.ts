import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtillsService } from '../services/utills.service';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private utillsService:UtillsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("API interceptor");
      request = request.clone({
        setHeaders:{
          'Authorization':`Bearer ${this.utillsService.getToken()}`,
          'Content-Type': 'application/json',
          'My-Name': 'Sajjad razi',
        }
    })
    return next.handle(request);
  }
}
