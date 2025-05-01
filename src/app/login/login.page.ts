import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/auth.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginData:any
  token:any;
  register:FormGroup;
  showregisterModal:boolean = true;
  @ViewChild(IonModal) modal: IonModal;
  steps:number = 1;
  model = { option: 'option3' };
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  isLoggedIn = "false";
  constructor(
    private fb:FormBuilder,
    private authSVC: LoginService,
    private _nativeStorage: NativeStorage,
    private _router:Router,
    private _utilService:UtilService

  ) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
      })
      // builder@huntproperty.com
      // builder
      this.register = this.fb.group({
        type:[],        
        name:['', [Validators.required]],
        email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password:['', [Validators.required]],        
        mobile:['', [Validators.required]]
      })
  }

  onSubmit(){
    let formData = this.loginForm.value;
  //   let data= {
  //    "email": 'inspector@greenfundindia.com',
  //    "password": '123456'
  //  }
   // console.log(formData);
    this.authSVC.login(formData).then(data=>{     
     let Newdata = data;
     this.loginData = JSON.parse(Newdata.data); 
    // console.log("loginD", this.loginData);
     if(this.loginData.status === false) {      
      this._utilService.presentToast('Invalid credentials','toaster-background');
    }
    //  this.token = this.loginData.data.token;
    this.token = this.loginData.data.AuthToken;
   //  console.log('token',this.token);
      if(this.loginData.status === true){     
         this._nativeStorage.setItem('token', {tokenPara:this.token})
         this._nativeStorage.setItem('userType', this.loginData.data.Type);
         this._nativeStorage.setItem('email', this.loginData.data.Email);
         this._nativeStorage.setItem('name', this.loginData.data.Name);
         this._nativeStorage.setItem('userId', this.loginData.data.Id);
         localStorage.setItem('token', this.token);
         this.isLoggedIn = "true"
         localStorage.setItem('isLoggedIn', this.isLoggedIn);          
        this._utilService.presentToast('login success','toaster-background');
        this._router.navigateByUrl('/splash/tabs/Profile');       
      }      
    }, (err)=>{
      //console.log(err)
      let errorType = JSON.parse(err.error);
      //console.log('error', errorType)
      if(errorType.success != true){       
        this._utilService.presentToast('Invalid credentials','toaster-background');
      }
    })
 
   }
   
   registerWith(){
    this.showregisterModal = true;
    this.steps = 1;
   // console.group('clicked')
   }
   onRegister(){
  console.group(this.register.value)
  this.steps++;
  let pass = this.register.get('password').value;
 // console.log(pass);
  if(pass != ""){
  this.authSVC.register(this.register.value).then((data=>{
  //  console.log(data);
    let parseData = JSON.parse(data.data);
  //  console.log(parseData)
    if(parseData.status === true){
      this.showregisterModal = false;
      this._utilService.presentToast(parseData.msg,'toaster-background');
    } else {
      this._utilService.presentToast(parseData.msg,'toaster-background');
    }    
  }))
}
   }

   cancel() {
    this.modal.dismiss(null, 'cancel');
    this.steps= 1;
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
