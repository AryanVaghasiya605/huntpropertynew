import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator.service';
import { HTTP } from '@ionic-native/http/ngx';
import { MainService } from './services/main.service';
import { LoginService } from './services/auth.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { UtilService } from './services/util.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AuthInterceptor } from './services/jwt.interceptor';
import { AuthGuard } from './services/auth.guard';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [
    CalculatorService,
    HTTP,
    MainService,
    LoginService,
    NativeStorage,
    Camera,
    UtilService,
    Geolocation,
    SplashScreen,
    AuthGuard,
    SocialSharing,
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
