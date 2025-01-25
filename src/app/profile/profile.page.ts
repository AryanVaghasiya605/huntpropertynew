import { Component} from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { faCoffee, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage{
  // faPercent = faUser;
  faUser=faUser;
  faCoffee = faCoffee;
  email:string;
  name:string;
  constructor(private _nativeStorage:NativeStorage) {}

  ionViewWillEnter() {
  this._nativeStorage.getItem('email').then((data)=>{
    this.email = data;
   });
   this._nativeStorage.getItem('name').then((data)=>{
    this.name = data;
   })
  }

}
