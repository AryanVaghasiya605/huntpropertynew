import { Injectable, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import{environment}  from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})

export class CalculatorService {
    constructor(
             private _http: HTTP
    ) { }

    httpOption = {
        
           'Access-Control-Allow-Origin':'*',
           'Content-Type': 'application/json' 
        
    }
    ngOnInit(): void {
     
        
    }

    LoanCalculator(data){
      console.log(data);
      return this._http.post(`${environment.API_URL}/v1/App/Auth/loaneligibility`, data, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      } )
    }
   
    emiCalculator(data){
      console.log(data);
      return this._http.post(`${environment.API_URL}/v1/App/Auth/emicalculator`, data, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      } )
    }

    rentalValueCal(data){
      console.log(data);
      return this._http.post(`${environment.API_URL}v1/App/Auth/rentalvaluecal`, data, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      } )
    }

    futureValueCal(data){
      console.log(data);
      return this._http.post(`${environment.API_URL}v1/App/Auth/futurevaluecal`, data, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      } )
    }
   
    getResidentialPropertyList(data) {
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      };
      return this._http.post(
        `${environment.API_URL}v1/App/ClientRegistration/projecttypecatageory`,
        data,
        {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      );
      
    }

}