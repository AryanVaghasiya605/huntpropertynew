import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform,
    private  splash: SplashScreen, private alertCtrl: AlertController, private router: Router) {
    this.isPlatformReady();
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.handleBackButton();
    });
  }
  handleBackButton() {
    // Subscribe to the back button event
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentRoute = this.router.url;
     // console.log('Currentroute', currentRoute)
      // Check if the current route is '/home' or any specific route where you want to close the app
      if (currentRoute === '/splash/tabs/home') {
        // Show a confirmation dialog before closing the app
        const alert = await this.alertCtrl.create({
          header: 'Exit App',
          message: 'Do you want to close the app?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Exit canceled');
              }
            },
            {
              text: 'Close',
              handler: () => {
                navigator['app'].exitApp(); // This will close the app
              }
            }
          ]
        });

        await alert.present();
      } else {
        // Navigate back in the app (normal back button behavior)
        window.history.back();
      }
    });
  }

  isPlatformReady(){
    this.platform.ready().then(()=>{      
      this.splash.hide();
    })
  }
}
