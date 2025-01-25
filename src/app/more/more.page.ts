import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-more',
  templateUrl: 'more.page.html',
  styleUrls: ['more.page.scss']
})
export class MorePage {
  isLoggedIn:any;
  constructor(
    private _router:Router,
    private socialSharing: SocialSharing,
    
  ) {}
  
  ionViewWillEnter(){        
   this.isLoggedIn = localStorage.getItem('isLoggedIn');
   console.log('ion', this.isLoggedIn);
  }
  login(){
   this._router.navigateByUrl('login');
  }

  sShare(){
    var options = {
      message: 'share this',    
      url: 'https://play.google.com/store/apps/details?id=hunt.property',
     
    };
    this.socialSharing.shareWithOptions(options);
  }
  rateUs(){    
    window.location.href = 'https://play.google.com/store/apps/details?id=hunt.property'
  }
  contactUs(){
    this._router.navigateByUrl('/splash/tabs/more/contact-us')
  }
  logOut(){
    localStorage.clear();
    this._router.navigateByUrl('login'); 
    this.isLoggedIn = true;   
  }
}
