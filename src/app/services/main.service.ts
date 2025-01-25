import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import{environment}  from '../../environments/environment'


@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(
    private _http: HTTP,
    private http: HttpClient,
    private _nativeStorage: NativeStorage
  ) {}

  getToken(){
    return localStorage.getItem('token');
  }
  getAssociate() {
    // console.log();
    return this._http.get(
      `${environment.API_URL}v1/App/Associates/associates`,
      '',
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    );
  }
  getMessageInbox(data){
    return this._nativeStorage.getItem('token').then((_token) => {
     // console.log(_token)
      let http = this._http.post(
        `${environment.API_URL}v1/App/ChatConversation/inbox`,
        data,
        {     
          Authorization: _token.tokenPara,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      );
    //  console.log(http)
      return http;
    });
  }
  getChatBoxList(data){
    return this._nativeStorage.getItem('token').then((_token) => {
    //  console.log(_token)
      let http = this._http.post(
        `${environment.API_URL}v1/App/ChatConversation/chatBox`,
        data,
        {     
          Authorization: _token.tokenPara,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      );
    //  console.log(http)
      return http;
    });
  }
  sendMessage(data) {      
    return this._nativeStorage.getItem('token').then((_token) => {
    //  console.log(_token)
      let http = this._http.post(
        `${environment.API_URL}v1/App/ChatConversation/sendMessage`,
        data,
        {     
          Authorization: _token.tokenPara,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      );
     // console.log(http)
      return http;
    });
  }
  postProperty(data){     
    return this._nativeStorage.getItem('token').then((_token) => {
     // console.log(_token)
      let http = this._http.post(
        `${environment.API_URL}v1/App/PostProperty/postproperty`,
        data,
        {     
          Authorization: _token.tokenPara,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      );
     // console.log(http)
      return http;
    });
  }
  getResidentialPropertyList(data) { 
   // console.log('residencitail', data)  
    this._http.setDataSerializer('json');         
      return this._http.post(
        `${environment.API_URL}v1/App/PropertyAttributes/propertyList`,
        data,
        {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      );    
  }

  getCommercialPropertyList(data) {   
    this._http.setDataSerializer('json');        
      return this._http.post(
        `${environment.API_URL}v1/App/PropertyAttributes/propertyList`,
        data,
        {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      );
    
  }

  getAttributeListById(data) {   
    this._http.setDataSerializer('json');        
      return this._http.post(
        `${environment.API_URL}v1/App/PropertyAttributes/attributesListById`,
        data,
        {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      );
    
  }

listProjectTypeSubCatageory(data:any){
  const payload:any = {
    projectcategoryid:data
  }
  return this._http.post(
    `${environment.API_URL}v1/App/ClientRegistration/projecttypesubcatageory`,
    payload,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  );
}

searchProperty(data:any){  
  return this._http.post(
    `${environment.OTHER_API_URL}property/get_loation`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  );
}

getPropertyList(data:any){  
  return this._http.post(
    `${environment.API_URL}v1/App/Search/filterProperty`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  );
}

getPostedPropertyList(){     
  return this._nativeStorage.getItem('token').then((_token) => {
   // console.log(_token)
    let http = this._http.post(
      `${environment.API_URL}v1/App/Property/userpostedproperty`,
      {},
      {     
        Authorization: _token.tokenPara,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    );
   // console.log(http)
    return http;
  });
}

getPropertyDetails(data:any){  
  return this._http.post(
    `${environment.API_URL}v1/App/Property/propertydetails`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  );
}

getStateList(){
  return this._http.post(
    `${environment.API_URL}v1/App/Property/state`,
    {},
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )
}

getCityList(data){  
  return this._http.post(
    `${environment.API_URL}v1/App/Property/city`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )
}

clientListing(data){    
  let http = this._http.get(
    `${environment.API_URL}v1/App/ClientRegistration/index/` + data,
    '',
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )  
  return http;
}
clientDetails(data){    
  let http = this._http.get(
    `${environment.API_URL}v1/App/ClientRegistration/viewclient/` + data,
    '',
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )  
  return http;
}
projectType(){    
  let http = this._http.get(
    `${environment.API_URL}v1/App/ClientRegistration/projecttype/`,
    '',
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )  
  return http;
}
getProjectCatogery(data){  
  return this._http.post(
    `${environment.API_URL}v1/App/ClientRegistration/projecttypecatageory`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )
}
getProjectSubCatogery(data){  
  return this._http.post(
    `${environment.API_URL}v1/App/ClientRegistration/projecttypesubcatageory`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )
}
projectListing(data){     
  let http = this._http.get(
    `${environment.API_URL}v1/App/PostProject/index/` + data,
    '',
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )
 // console.log('http', http);
  return http;
}
clientRegistration(data){  
 let http = this._http.post(
    `${environment.API_URL}v1/App/ClientRegistration/registerclient`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )
 // console.log(http)
  return http;
}

postProject(data){  
  return this._http.post(
    `${environment.API_URL}v1/App/PostProject/PostProject`,
    data,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  )
}




}
