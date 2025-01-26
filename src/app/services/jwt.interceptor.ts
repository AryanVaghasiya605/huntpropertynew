import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _nativeStorage:NativeStorage){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add Authorization header to the request
    this._nativeStorage.getItem('token').then((token)=>{
     // console.log('token', token);
      
    })
    
    const getToken = 'token';
    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${getToken}` }
    });
  //  console.log(authRequest)
    return next.handle(authRequest);
  }
}
