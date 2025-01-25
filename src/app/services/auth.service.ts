import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import{environment}  from '../../environments/environment'
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  isLoggedIn: boolean = false;
  constructor(
    private _http: HTTP,
    private http: HttpClient,
    private _nativeStorage:NativeStorage
  ) { }

  login(data){
    // console.log();
    return this._http.post(`${environment.API_URL}v1/App/Auth/userLogin`, data, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    } )    
  }
  isAuthenticated(){
   return  localStorage.getItem('isLoggedIn')
  }
  register(data){
    // console.log();
    return this._http.post(`${environment.API_URL}v1/App/Auth/userRegistration`, data, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    } )
  }
}
