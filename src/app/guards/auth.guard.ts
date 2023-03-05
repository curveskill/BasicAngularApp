import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private toastr:ToastrService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const checkTokenInLS = localStorage.getItem('JWTtoken');
      // const isAuthenticated = true;
      if(checkTokenInLS && checkTokenInLS != null){
        return true;
      }else{
        this.toastr.error("You are not authorized to access please login");
        this.route.navigate(['/login'])
        return false
      }
  }
  
}
