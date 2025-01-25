import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';




@Injectable()
export class UtilService {
  _toast: any;  

  constructor(
    private _toastCtrl: ToastController,
    ) { 
    
  }

  public  async presentToast(msg: string, cssClass:string) {
    this._toast = await this._toastCtrl.create({
        message:msg,
        duration: 3000,
        cssClass:'toaster-background'
    });
    this._toast.present();
}
}
