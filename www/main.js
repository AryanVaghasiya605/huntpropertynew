(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.guard */ 98063);




const routes = [
    {
        path: '',
        // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash/splash.module */ 89623)).then(m => m.SplashPageModule)
    },
    {
        path: 'loan-eligibility',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_loan-eligibility_loan-eligibility_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./loan-eligibility/loan-eligibility.module */ 63297)).then(m => m.LoanEligibilityPageModule)
    },
    {
        path: 'emi-calculator',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_emi-calculator_emi-calculator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./emi-calculator/emi-calculator.module */ 53511)).then(m => m.EmiCalculatorPageModule)
    },
    {
        path: 'future-value-calculator',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_future-value-calculator_future-value-calculator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./future-value-calculator/future-value-calculator.module */ 38558)).then(m => m.FutureValueCalculatorPageModule)
    },
    {
        path: 'rental-value-calculator',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_rental-value-calculator_rental-value-calculator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rental-value-calculator/rental-value-calculator.module */ 79685)).then(m => m.RentalValueCalculatorPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'messages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/messages/messages.module */ 26182)).then(m => m.MessagesPageModule)
    },
    {
        path: 'posted-property',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_profile_posted-property_posted-property_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/posted-property/posted-property.module */ 39732)).then(m => m.PostedPropertyPageModule)
    },
    {
        path: 'list-property',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_list-property_list-property_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list-property/list-property.module */ 94286)).then(m => m.ListPropertyPageModule)
    },
    {
        path: 'property-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_property-details_property-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./property-details/property-details.module */ 61988)).then(m => m.PropertyDetailsPageModule)
    },
    {
        path: 'select-package',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_select-package_select-package_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./select-package/select-package.module */ 33954)).then(m => m.SelectPackagePageModule)
    },
    {
        path: 'add-button',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_add-button_add-button_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-button/add-button.module */ 97699)).then(m => m.AddButtonPageModule)
    },
    {
        path: 'client-register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_client-register_client-register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./client-register/client-register.module */ 88148)).then(m => m.ClientRegisterPageModule)
    },
    {
        path: 'post-project',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_post-project_post-project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./post-project/post-project.module */ 34025)).then(m => m.PostProjectPageModule),
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'custom-range',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_custom-range_custom-range_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./custom-range/custom-range.module */ 99143)).then(m => m.CustomRangePageModule)
    },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);







let AppComponent = class AppComponent {
    constructor(platform, splash, alertCtrl, router) {
        this.platform = platform;
        this.splash = splash;
        this.alertCtrl = alertCtrl;
        this.router = router;
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
        this.platform.backButton.subscribeWithPriority(10, () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const currentRoute = this.router.url;
            // console.log('Currentroute', currentRoute)
            // Check if the current route is '/home' or any specific route where you want to close the app
            if (currentRoute === '/splash/tabs/home') {
                // Show a confirmation dialog before closing the app
                const alert = yield this.alertCtrl.create({
                    header: 'Exit App',
                    message: 'Do you want to close the app?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                //console.log('Exit canceled');
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
                yield alert.present();
            }
            else {
                // Navigate back in the app (normal back button behavior)
                window.history.back();
            }
        }));
    }
    isPlatformReady() {
        this.platform.ready().then(() => {
            this.splash.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/calculator.service */ 4975);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 44719);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/main.service */ 91557);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/util.service */ 67241);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 75626);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/jwt.interceptor */ 37792);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.guard */ 98063);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 26436);




















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule
        ],
        providers: [
            _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__.CalculatorService,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP,
            _services_main_service__WEBPACK_IMPORTED_MODULE_5__.MainService,
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.LoginService,
            _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__.NativeStorage,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera,
            _services_util_service__WEBPACK_IMPORTED_MODULE_8__.UtilService,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__.SplashScreen,
            _services_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard,
            _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__.SocialSharing,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS, useClass: _services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptor, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 98063:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.service */ 91557);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);





let AuthGuard = class AuthGuard {
    constructor(_mainSVC, _router, _auth) {
        this._mainSVC = _mainSVC;
        this._router = _router;
        this._auth = _auth;
        this.getToken = sessionStorage.getItem('token');
    }
    canActivate(route, state) {
        let isLoggedIn = this._auth.isAuthenticated();
        if (isLoggedIn === "true") {
            // console.log('trueeee', isLoggedIn)
            return true;
        }
        else {
            this._router.navigate(['/login']);
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.LoginService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/http/ngx */ 44719);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);






let LoginService = class LoginService {
    constructor(_http, http, _nativeStorage) {
        this._http = _http;
        this.http = http;
        this._nativeStorage = _nativeStorage;
        this.isLoggedIn = false;
    }
    login(data) {
        // console.log();
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}v1/App/Auth/userLogin`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }
    isAuthenticated() {
        return localStorage.getItem('isLoggedIn');
    }
    register(data) {
        // console.log();
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}v1/App/Auth/userRegistration`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 4975:
/*!************************************************!*\
  !*** ./src/app/services/calculator.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorService": () => (/* binding */ CalculatorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/http/ngx */ 44719);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let CalculatorService = class CalculatorService {
    constructor(_http) {
        this._http = _http;
        this.httpOption = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        };
    }
    ngOnInit() {
    }
    LoanCalculator(data) {
        // console.log(data);
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}/v1/App/Auth/loaneligibility`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }
    emiCalculator(data) {
        //  console.log(data);
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}/v1/App/Auth/emicalculator`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }
    rentalValueCal(data) {
        //console.log(data);
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}v1/App/Auth/rentalvaluecal`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }
    futureValueCal(data) {
        //  console.log(data);
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}v1/App/Auth/futurevaluecal`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }
    getResidentialPropertyList(data) {
        const options = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}v1/App/ClientRegistration/projecttypecatageory`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }
};
CalculatorService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP }
];
CalculatorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CalculatorService);



/***/ }),

/***/ 37792:
/*!*********************************************!*\
  !*** ./src/app/services/jwt.interceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);



let AuthInterceptor = class AuthInterceptor {
    constructor(_nativeStorage) {
        this._nativeStorage = _nativeStorage;
    }
    intercept(request, next) {
        // Add Authorization header to the request
        this._nativeStorage.getItem('token').then((token) => {
            // console.log('token', token);
        });
        const getToken = 'token';
        const authRequest = request.clone({
            setHeaders: { Authorization: `Bearer ${getToken}` }
        });
        //  console.log(authRequest)
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeStorage }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 91557:
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainService": () => (/* binding */ MainService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/http/ngx */ 44719);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);






let MainService = class MainService {
    constructor(_http, http, _nativeStorage) {
        this._http = _http;
        this.http = http;
        this._nativeStorage = _nativeStorage;
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getAssociate() {
        // console.log();
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/Associates/associates`, '', {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getMessageInbox(data) {
        return this._nativeStorage.getItem('token').then((_token) => {
            // console.log(_token)
            let http = this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ChatConversation/inbox`, data, {
                Authorization: _token.tokenPara,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            });
            //  console.log(http)
            return http;
        });
    }
    getChatBoxList(data) {
        return this._nativeStorage.getItem('token').then((_token) => {
            //  console.log(_token)
            let http = this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ChatConversation/chatBox`, data, {
                Authorization: _token.tokenPara,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            });
            //  console.log(http)
            return http;
        });
    }
    sendMessage(data) {
        return this._nativeStorage.getItem('token').then((_token) => {
            //  console.log(_token)
            let http = this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ChatConversation/sendMessage`, data, {
                Authorization: _token.tokenPara,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            });
            // console.log(http)
            return http;
        });
    }
    postProperty(data) {
        return this._nativeStorage.getItem('token').then((_token) => {
            // console.log(_token)
            let http = this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/PostProperty/postproperty`, data, {
                Authorization: _token.tokenPara,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            });
            // console.log(http)
            return http;
        });
    }
    getResidentialPropertyList(data) {
        // console.log('residencitail', data)  
        this._http.setDataSerializer('json');
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/PropertyAttributes/propertyList`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getCommercialPropertyList(data) {
        this._http.setDataSerializer('json');
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/PropertyAttributes/propertyList`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getAttributeListById(data) {
        this._http.setDataSerializer('json');
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/PropertyAttributes/attributesListById`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    listProjectTypeSubCatageory(data) {
        const payload = {
            projectcategoryid: data
        };
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ClientRegistration/projecttypesubcatageory`, payload, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    searchProperty(data) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.OTHER_API_URL}property/get_loation`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getPropertyList(data) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/Search/filterProperty`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getPostedPropertyList() {
        return this._nativeStorage.getItem('token').then((_token) => {
            // console.log(_token)
            let http = this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/Property/userpostedproperty`, {}, {
                Authorization: _token.tokenPara,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            });
            // console.log(http)
            return http;
        });
    }
    getPropertyDetails(data) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/Property/propertydetails`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getStateList() {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/Property/state`, {}, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getCityList(data) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/Property/city`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    clientListing(data) {
        let http = this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ClientRegistration/index/` + data, '', {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        return http;
    }
    clientDetails(data) {
        let http = this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ClientRegistration/viewclient/` + data, '', {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        return http;
    }
    projectType() {
        let http = this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ClientRegistration/projecttype/`, '', {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        return http;
    }
    getProjectCatogery(data) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ClientRegistration/projecttypecatageory`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    getProjectSubCatogery(data) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ClientRegistration/projecttypesubcatageory`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
    projectListing(data) {
        let http = this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/PostProject/index/` + data, '', {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        // console.log('http', http);
        return http;
    }
    clientRegistration(data) {
        let http = this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/ClientRegistration/registerclient`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        // console.log(http)
        return http;
    }
    postProject(data) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}v1/App/PostProject/PostProject`, data, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
    }
};
MainService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__.HTTP },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeStorage }
];
MainService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], MainService);



/***/ }),

/***/ 67241:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let UtilService = class UtilService {
    constructor(_toastCtrl) {
        this._toastCtrl = _toastCtrl;
    }
    presentToast(msg, cssClass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this._toast = yield this._toastCtrl.create({
                message: msg,
                duration: 3000,
                cssClass: 'toaster-background'
            });
            this._toast.present();
        });
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], UtilService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'https://www.huntproperty.com/api/',
    OTHER_API_URL: 'https://www.huntproperty.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => { });


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map