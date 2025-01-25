import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from './main.service';
import { LoginService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  getToken:string;
  constructor(private _mainSVC:MainService, private _router:Router, private _auth:LoginService){
    this.getToken = sessionStorage.getItem('token')
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn:any = this._auth.isAuthenticated();
      if(isLoggedIn === "true"){
        console.log('trueeee', isLoggedIn)
        return true;
      } else {
        this._router.navigate(['/login']);
      }
    return true;
  }
  

  
}
