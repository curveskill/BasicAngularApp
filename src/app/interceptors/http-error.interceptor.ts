import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UtillsService } from '../services/utills.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private util: UtillsService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleHttpError(error);
      })
    );
  }
  handleHttpError(error: HttpErrorResponse) {
    let errorInfo = '';
    if (error.error instanceof ErrorEvent) {
      errorInfo = `Client Side Error ${error.message}`;
    } else {
      errorInfo = `Server Side Error -Status ${error.status}- MSG ${error.message}`;
      switch (error.status) {
        case 404:
          console.log('invalid API');
          break;
        case 500:
          console.log('Internal Server Error');
          break;
        case 401:
          console.log('unauthorized');
          break;
        default:
          console.log('Unknown Error');
      }
    }
    console.log(errorInfo);
    return throwError(() => new Error(errorInfo));
  }
}
