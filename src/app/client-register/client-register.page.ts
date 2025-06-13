import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.page.html',
  styleUrls: ['./client-register.page.scss'],
})
export class ClientRegisterPage implements OnInit {
  clientList:any;
  constructor(
    private _router:Router,
    private _nativeStorage: NativeStorage,
    private _mainSvc: MainService
  ) { }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    this._nativeStorage.getItem('userId').then((data)=>{       
      this._mainSvc.clientListing(46).then((data)=>{
       // console.log('dsadsa',data);
        if(data.status == 200){
          let parseData = JSON.parse(data.data);
          this.clientList = parseData.data;
       //   console.log(parseData.data);
        }
       
      })
    })
  }

  clientRegistration() {
   // console.log('clicked')
    this._router.navigateByUrl('client-register/client-registeration-form');
  }

}
