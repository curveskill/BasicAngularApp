import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { UtillsService } from '../services/utills.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private util: UtillsService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("http error interceptor");
    return next.handle(request).pipe(
      retry(1),
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
          this.toastrService.error(error.message);
          break;
        case 401:
          this.toastrService.error(
            'Unauthorized attempt, Please login to continue'
          );
          this.util.userLogout();
          break;
        case 500:
          this.toastrService.error('Internal Server Error');
          break;
      }
    }
    return throwError(() => new Error(errorInfo));
  }
}
