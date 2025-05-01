"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 90795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 93721);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 77641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 90795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 93721);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 93721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 46221);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 20070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util.service */ 91944);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);










let LoginPage = class LoginPage {
    constructor(fb, authSVC, _nativeStorage, _router, _utilService) {
        this.fb = fb;
        this.authSVC = authSVC;
        this._nativeStorage = _nativeStorage;
        this._router = _router;
        this._utilService = _utilService;
        this.showregisterModal = true;
        this.steps = 1;
        this.model = { option: 'option3' };
        this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
        this.isLoggedIn = "false";
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
        // builder@huntproperty.com
        // builder
        this.register = this.fb.group({
            type: [],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    onSubmit() {
        let formData = this.loginForm.value;
        //   let data= {
        //    "email": 'inspector@greenfundindia.com',
        //    "password": '123456'
        //  }
        console.log(formData);
        this.authSVC.login(formData).then(data => {
            let Newdata = data;
            this.loginData = JSON.parse(Newdata.data);
            console.log("loginD", this.loginData);
            if (this.loginData.status === false) {
                this._utilService.presentToast('Invalid credentials', 'toaster-background');
            }
            //  this.token = this.loginData.data.token;
            this.token = this.loginData.data.AuthToken;
            console.log('token', this.token);
            if (this.loginData.status === true) {
                this._nativeStorage.setItem('token', { tokenPara: this.token });
                this._nativeStorage.setItem('userType', this.loginData.data.Type);
                this._nativeStorage.setItem('email', this.loginData.data.Email);
                this._nativeStorage.setItem('name', this.loginData.data.Name);
                this._nativeStorage.setItem('userId', this.loginData.data.Id);
                localStorage.setItem('token', this.token);
                this.isLoggedIn = "true";
                localStorage.setItem('isLoggedIn', this.isLoggedIn);
                this._utilService.presentToast('login success', 'toaster-background');
                this._router.navigateByUrl('/splash/tabs/Profile');
            }
        }, (err) => {
            console.log(err);
            let errorType = JSON.parse(err.error);
            console.log('error', errorType);
            if (errorType.success != true) {
                this._utilService.presentToast('Invalid credentials', 'toaster-background');
            }
        });
    }
    registerWith() {
        this.showregisterModal = true;
        this.steps = 1;
        console.group('clicked');
    }
    onRegister() {
        console.group(this.register.value);
        this.steps++;
        let pass = this.register.get('password').value;
        console.log(pass);
        if (pass != "") {
            this.authSVC.register(this.register.value).then((data => {
                console.log(data);
                let parseData = JSON.parse(data.data);
                console.log(parseData);
                if (parseData.status === true) {
                    this.showregisterModal = false;
                    this._utilService.presentToast(parseData.msg, 'toaster-background');
                }
                else {
                    this._utilService.presentToast(parseData.msg, 'toaster-background');
                }
            }));
        }
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
        this.steps = 1;
    }
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService }
];
LoginPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal,] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".login-bg {\n  background: url('login-bg.png');\n  background-size: 100% 100%;\n  height: 100vh;\n}\n.login-bg .login-bg-opacity {\n  background: #000000;\n  height: 100vh;\n  position: absolute;\n  opacity: 0.9;\n}\n.login-bg .login-bg-opacity .back-btn {\n  color: #fff;\n  font-size: 36px;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n.login-bg .login-bg-opacity ion-label {\n  color: #fff;\n  width: 84%;\n  display: block;\n  margin: 50px auto;\n  line-height: 24px;\n  font-size: 17px;\n}\n.login-bg .login-bg-opacity ion-label .sign {\n  color: #de012a;\n}\n.login-bg .login-bg-opacity .form-parent {\n  background: transparent;\n  --padding-top:0;\n}\n.login-bg .login-bg-opacity .form-parent ion-item {\n  --background: transparent;\n  width: auto;\n  margin: 0 auto;\n  --padding-start: 9px;\n  --padding-top:0;\n}\n.login-bg .login-bg-opacity .form-parent ion-item ion-input[type=text] {\n  margin-bottom: 20px;\n  --background: #fff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  color: #6a6a6a;\n}\n.login-bg .login-bg-opacity .form-parent ion-item ion-input[type=password] {\n  margin-bottom: 20px;\n  --background: #fff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  color: #6a6a6a;\n}\n.login-bg .login-bg-opacity .submit-btn {\n  width: 100%;\n  margin: auto;\n  display: block;\n  font-size: 19px;\n  height: 45px;\n}\n.login-bg .login-bg-opacity .register {\n  font-size: 15px;\n  --background: transparent;\n  text-align: center;\n  display: block;\n}\n.cancelBtn {\n  background: #fff;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #000;\n  z-index: 99;\n  border: solid 1px #000;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n.model_overlay {\n  background: #000;\n  opacity: 0.2;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n}\n.modal_content {\n  width: 100%;\n  display: block;\n  margin: 0px auto;\n  height: 100%;\n  background: #fff;\n  position: absolute;\n  left: 0px;\n  z-index: 999;\n}\n.modal_content .registerImage {\n  width: 200px;\n  height: auto;\n  margin: 20px auto 0;\n}\n.modal_content h3 {\n  color: #6a6a6a;\n  font-size: 13px;\n  text-align: center;\n}\n.modal_content h2 {\n  color: #6a6a6a;\n  font-size: 18px;\n  text-align: center;\n}\n.modal_content .form-wrapper {\n  padding: 16px;\n  background: #fff;\n}\n.modal_content .form-wrapper span {\n  color: #6a6a6a;\n}\n.modal_content .form-wrapper .email-mt {\n  margin-top: 20px;\n  display: block;\n}\n.modal_content .form-wrapper .availableFormWrapper {\n  color: #000;\n}\n.modal_content .form-wrapper .availableFormWrapper ul {\n  padding-left: 0px;\n  width: 100%;\n  display: flex;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li {\n  color: #000;\n  list-style: none;\n  margin: 0 8px;\n  float: left;\n  width: 27%;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li ion-icon {\n  font-size: 33px;\n  display: block;\n  margin: 0 auto;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li label {\n  position: relative;\n  font-size: 13px;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li label input[type=radio] {\n  margin-right: 5px;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li label .checkmark {\n  position: absolute;\n  top: -5px;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-radius: 50%;\n  left: -1px;\n  border: solid 1px #C5C5C5;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li label .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li label input:checked ~ .checkmark:after {\n  display: block;\n}\n.modal_content .form-wrapper .availableFormWrapper ul li label .checkmark:after {\n  top: 4px;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #FE1300;\n}\n.modal_content .form-wrapper ion-input {\n  border: solid 1px #E4E4E4;\n  --padding-start: 15px;\n  color: #000;\n}\n.web_error {\n  color: #FE1300;\n}\n.submit-btn.register {\n  width: 100%;\n  margin-top: 20px;\n  height: 50px;\n}\n.submit-btn.register ion-content {\n  --background:#ffffff;\n  --padding-top:50px;\n}\n.submit-btn.register ion-content .web_error {\n  color: #e14b4c;\n  display: flex;\n  align-items: start;\n  justify-content: start;\n  margin-top: -10px;\n  font-size: 12px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2ZWVuJTIwa3VtYXIlMjBrYXRpeWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcaHVudG5ld1xcaHVudHByb3BlcnR5bmV3XFxzcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBREVRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBWjtBRENRO0VBQU8sY0FBQTtBQ0VmO0FEQ0k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUNDUjtBREFRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0VaO0FERFk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHaEI7QUREWTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0doQjtBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDUjtBRENJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ1I7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ1I7QURDSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ1I7QURBUTtFQUFnQixZQUFBO0VBQWMsWUFBQTtFQUFjLG1CQUFBO0FDS3BEO0FERlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSVo7QURGUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJWjtBREZRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDSVo7QURIWTtFQUNJLGNBQUE7QUNLaEI7QURIWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0toQjtBREhZO0VBQ0ksV0FBQTtBQ0toQjtBREpnQjtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNNcEI7QURMb0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDT3hCO0FETndCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUTVCO0FETndCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDUTVCO0FEUDRCO0VBQ0ksaUJBQUE7QUNTaEM7QURQNEI7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNTaEM7QURONEI7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDUWhDO0FETCtCO0VBQ0MsY0FBQTtBQ09oQztBREo4QjtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTWhDO0FEQVk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0VoQjtBREVJO0VBQVcsY0FBQTtBQ0VmO0FEREk7RUFBc0IsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLFlBQUE7QUNPekQ7QUROUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRFBZO0VBQVksY0FBQTtFQUNSLGFBQUE7RUFDQSxrQkFBQTtFQUNKLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNVWiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmd7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ2luLWJnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIC5sb2dpbi1iZy1vcGFjaXR5e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG5cclxuICAgICAgICAuYmFjay1idG57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgLnNpZ257IGNvbG9yOiAjZGUwMTJhO31cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1wYXJlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDowO1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOjA7XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VibWl0LWJ0bntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3RlcntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNhbmNlbEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiAgICAubW9kZWxfb3ZlcmxheXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsX2NvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAucmVnaXN0ZXJJbWFnZXsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IGF1dG87IG1hcmdpbjogMjBweCBhdXRvIDA7XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS13cmFwcGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmVtYWlsLW10e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF2YWlsYWJsZUZvcm1XcmFwcGVyeyBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbWFya3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNDNUM1QzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkUxMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndlYl9lcnJvcntjb2xvcjogI0ZFMTMwMDt9XHJcbiAgICAuc3VibWl0LWJ0bi5yZWdpc3Rlcnsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDIwcHg7IGhlaWdodDogNTBweDtcclxuICAgICAgICBpb24tY29udGVudHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6NTBweDtcclxuICAgICAgICAgICAgLndlYl9lcnJvcnsgY29sb3I6I2UxNGI0YztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7ICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7fSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuIiwiLmxvZ2luLWJnIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9sb2dpbi1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1iZy1vcGFjaXR5IHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwLjk7XG59XG4ubG9naW4tYmcgLmxvZ2luLWJnLW9wYWNpdHkgLmJhY2stYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWJnLW9wYWNpdHkgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA4NCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tYmctb3BhY2l0eSBpb24tbGFiZWwgLnNpZ24ge1xuICBjb2xvcjogI2RlMDEyYTtcbn1cbi5sb2dpbi1iZyAubG9naW4tYmctb3BhY2l0eSAuZm9ybS1wYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXRvcDowO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1iZy1vcGFjaXR5IC5mb3JtLXBhcmVudCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1wYWRkaW5nLXN0YXJ0OiA5cHg7XG4gIC0tcGFkZGluZy10b3A6MDtcbn1cbi5sb2dpbi1iZyAubG9naW4tYmctb3BhY2l0eSAuZm9ybS1wYXJlbnQgaW9uLWl0ZW0gaW9uLWlucHV0W3R5cGU9dGV4dF0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgY29sb3I6ICM2YTZhNmE7XG59XG4ubG9naW4tYmcgLmxvZ2luLWJnLW9wYWNpdHkgLmZvcm0tcGFyZW50IGlvbi1pdGVtIGlvbi1pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICBjb2xvcjogIzZhNmE2YTtcbn1cbi5sb2dpbi1iZyAubG9naW4tYmctb3BhY2l0eSAuc3VibWl0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGhlaWdodDogNDVweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tYmctb3BhY2l0eSAucmVnaXN0ZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYW5jZWxCdG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2RlbF9vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4yO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubW9kYWxfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuLm1vZGFsX2NvbnRlbnQgLnJlZ2lzdGVySW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn1cbi5tb2RhbF9jb250ZW50IGgzIHtcbiAgY29sb3I6ICM2YTZhNmE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vZGFsX2NvbnRlbnQgaDIge1xuICBjb2xvcjogIzZhNmE2YTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubW9kYWxfY29udGVudCAuZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tb2RhbF9jb250ZW50IC5mb3JtLXdyYXBwZXIgc3BhbiB7XG4gIGNvbG9yOiAjNmE2YTZhO1xufVxuLm1vZGFsX2NvbnRlbnQgLmZvcm0td3JhcHBlciAuZW1haWwtbXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tb2RhbF9jb250ZW50IC5mb3JtLXdyYXBwZXIgLmF2YWlsYWJsZUZvcm1XcmFwcGVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ubW9kYWxfY29udGVudCAuZm9ybS13cmFwcGVyIC5hdmFpbGFibGVGb3JtV3JhcHBlciB1bCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbF9jb250ZW50IC5mb3JtLXdyYXBwZXIgLmF2YWlsYWJsZUZvcm1XcmFwcGVyIHVsIGxpIHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjclO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubW9kYWxfY29udGVudCAuZm9ybS13cmFwcGVyIC5hdmFpbGFibGVGb3JtV3JhcHBlciB1bCBsaSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1vZGFsX2NvbnRlbnQgLmZvcm0td3JhcHBlciAuYXZhaWxhYmxlRm9ybVdyYXBwZXIgdWwgbGkgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tb2RhbF9jb250ZW50IC5mb3JtLXdyYXBwZXIgLmF2YWlsYWJsZUZvcm1XcmFwcGVyIHVsIGxpIGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubW9kYWxfY29udGVudCAuZm9ybS13cmFwcGVyIC5hdmFpbGFibGVGb3JtV3JhcHBlciB1bCBsaSBsYWJlbCAuY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogLTFweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0M1QzVDNTtcbn1cbi5tb2RhbF9jb250ZW50IC5mb3JtLXdyYXBwZXIgLmF2YWlsYWJsZUZvcm1XcmFwcGVyIHVsIGxpIGxhYmVsIC5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9kYWxfY29udGVudCAuZm9ybS13cmFwcGVyIC5hdmFpbGFibGVGb3JtV3JhcHBlciB1bCBsaSBsYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1vZGFsX2NvbnRlbnQgLmZvcm0td3JhcHBlciAuYXZhaWxhYmxlRm9ybVdyYXBwZXIgdWwgbGkgbGFiZWwgLmNoZWNrbWFyazphZnRlciB7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI0ZFMTMwMDtcbn1cbi5tb2RhbF9jb250ZW50IC5mb3JtLXdyYXBwZXIgaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLndlYl9lcnJvciB7XG4gIGNvbG9yOiAjRkUxMzAwO1xufVxuXG4uc3VibWl0LWJ0bi5yZWdpc3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uc3VibWl0LWJ0bi5yZWdpc3RlciBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAtLXBhZGRpbmctdG9wOjUwcHg7XG59XG4uc3VibWl0LWJ0bi5yZWdpc3RlciBpb24tY29udGVudCAud2ViX2Vycm9yIHtcbiAgY29sb3I6ICNlMTRiNGM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login-bg\">\r\n    <div class=\"login-bg-opacity\">\r\n      <div lines=\"none\">\r\n        <ion-icon routerLink=\"/splash/tabs/home\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n      </div>\r\n      <ion-label>\r\n        <span class=\"sign\">Login/SignUp</span> to showcase you property and search for your Desired property\r\n      </ion-label>\r\n\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-list class=\"ion-padding form-parent\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input type=\"text\" formControlName=\"username\"\r\n              placeholder=\"Enter your email or mobile number\"></ion-input>\r\n          </ion-item>\r\n          <div  class=\"web_error\" *ngIf=\"loginForm.controls['username'].invalid && (loginForm.controls['username'].dirty || loginForm.controls['username'].touched)\" >\r\n            <div *ngIf=\"loginForm.controls['username'].errors.required\">*Email is required</div>            \r\n        </div>\r\n          <ion-item lines=\"none\">\r\n            <ion-input type=\"password\" placeholder=\"Enter your password\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n          <div  class=\"web_error\" *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\" >\r\n            <div *ngIf=\"loginForm.controls['password'].errors.required\">*Password is required</div>            \r\n        </div>\r\n          <ion-item lines=\"none\">\r\n            <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!loginForm.valid\">Next</ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n      </form>\r\n\r\n      <ion-button  class=\"register\" type=\"submit\" id=\"open-modal\" (click)=\"registerWith()\">Register with us</ion-button>\r\n\r\n    </div>\r\n  </div>\r\n  <ion-modal *ngIf=\"showregisterModal === true\" trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n    <ng-template>\r\n      <span class=\"cancelBtn\" (click)=\"cancel()\">X</span>\r\n      <ion-content>\r\n        <div class=\"modal_content\">\r\n          <div class=\"registerImage\">\r\n            <img src=\"../../assets/images/register-image.jpeg\" alt=\"\">\r\n          </div>\r\n          <h2>Welcome</h2>\r\n          <h3>We'll need a few things to help you get started</h3>          \r\n            <div class=\"form-wrapper\">\r\n              <form [formGroup]=\"register\" (ngSubmit)=\"onRegister()\">\r\n                <div class=\"steps\" *ngIf=\"steps == 1\">\r\n                <div class=\"availableFormWrapper\">\r\n                  <span>I am</span>\r\n                  <ul>\r\n                    <li>\r\n                      <ion-icon name=\"builder\"></ion-icon>\r\n                      <label class=\"container\">\r\n                        <input type=\"radio\" formControlName=\"type\" value=\"individual\" name=\"type\"\r\n                          >\r\n                        <span>Individual</span>\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                    </li>\r\n                    <li>\r\n                      <ion-icon name=\"builder\"></ion-icon>\r\n                      <label class=\"container\">\r\n                        <input type=\"radio\" formControlName=\"type\" value=\"agent\" name=\"type\"\r\n                          >\r\n                        <span>Agent</span>\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                    </li>\r\n                    <li>\r\n                      <ion-icon name=\"builder\"></ion-icon>\r\n                      <label class=\"container\">\r\n                        <input type=\"radio\" formControlName=\"type\" value=\"builder\" name=\"type\"\r\n                          >\r\n                        <span>Builder</span>\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                    </li>\r\n\r\n                  </ul>\r\n                </div>\r\n                <span>Full Name</span>\r\n                <ion-input formControlName=\"name\"></ion-input>\r\n                <div class=\"web_error\"\r\n                  *ngIf=\"register.controls['name'].invalid && (register.controls['name'].dirty || register.controls['name'].touched)\">\r\n                  <div *ngIf=\"register.controls['name'].errors.required\">*Full name is required</div>\r\n                </div>\r\n                <span class=\"email-mt\">Email</span>\r\n                <ion-input type=\"email\" required email=\"true\" formControlName=\"email\"></ion-input>\r\n                <div  class=\"web_error\" *ngIf=\"register.controls['email'].invalid && (register.controls['email'].dirty || register.controls['email'].touched)\" >\r\n                  <div *ngIf=\"register.controls['email'].errors.required\">*email is required</div>\r\n                  <div *ngIf=\"register.controls['email'].errors.pattern \">* Enter valid email</div>      \r\n              </div>                \r\n              </div>\r\n              <div class=\"steps\" *ngIf=\"steps == 2\">\r\n                <span>Password</span>\r\n                <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n                <div class=\"web_error\"\r\n                  *ngIf=\"register.controls['password'].invalid && (register.controls['password'].dirty || register.controls['password'].touched)\">\r\n                  <div *ngIf=\"register.controls['password'].errors.required\">*Password is required</div>\r\n                </div>\r\n                <span>Mobile Number</span>\r\n                <ion-input type=\"tel\" formControlName=\"mobile\"></ion-input>\r\n                <div class=\"web_error\"\r\n                  *ngIf=\"register.controls['mobile'].invalid && (register.controls['mobile'].dirty || register.controls['mobile'].touched)\">\r\n                  <div *ngIf=\"register.controls['mobile'].errors.required\">*Mobile number is required</div>\r\n                </div>\r\n              </div>\r\n              <span *ngIf=\"steps <= 1\"><ion-button class=\"submit-btn register\" [disabled]=\"register.controls['name'].invalid && register.controls['email'].invalid\"  type=\"submit\">Next</ion-button></span>\r\n                \r\n                <ion-button class=\"submit-btn register\" *ngIf=\"steps > 1\" type=\"submit\">register</ion-button>\r\n              </form>\r\n            </div>\r\n          <!-- </div> -->\r\n\r\n        </div>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map