"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_client-register_client-register_module_ts"],{

/***/ 15014:
/*!*******************************************************************!*\
  !*** ./src/app/client-register/client-register-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegisterPageRoutingModule": () => (/* binding */ ClientRegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-register.page */ 42946);




const routes = [
    {
        path: '',
        component: _client_register_page__WEBPACK_IMPORTED_MODULE_0__.ClientRegisterPage
    },
    {
        path: 'client-registeration-form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_client-register_client-registeration-form_client-registeration-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./client-registeration-form/client-registeration-form.module */ 4884)).then(m => m.ClientRegisterationFormPageModule)
    }
];
let ClientRegisterPageRoutingModule = class ClientRegisterPageRoutingModule {
};
ClientRegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientRegisterPageRoutingModule);



/***/ }),

/***/ 88148:
/*!***********************************************************!*\
  !*** ./src/app/client-register/client-register.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegisterPageModule": () => (/* binding */ ClientRegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-register-routing.module */ 15014);
/* harmony import */ var _client_register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-register.page */ 42946);







let ClientRegisterPageModule = class ClientRegisterPageModule {
};
ClientRegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _client_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientRegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_client_register_page__WEBPACK_IMPORTED_MODULE_1__.ClientRegisterPage]
    })
], ClientRegisterPageModule);



/***/ }),

/***/ 42946:
/*!*********************************************************!*\
  !*** ./src/app/client-register/client-register.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegisterPage": () => (/* binding */ ClientRegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-register.page.html?ngResource */ 43905);
/* harmony import */ var _client_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-register.page.scss?ngResource */ 75351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ 91557);







let ClientRegisterPage = class ClientRegisterPage {
    constructor(_router, _nativeStorage, _mainSvc) {
        this._router = _router;
        this._nativeStorage = _nativeStorage;
        this._mainSvc = _mainSvc;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this._nativeStorage.getItem('userId').then((data) => {
            this._mainSvc.clientListing(46).then((data) => {
                // console.log('dsadsa',data);
                if (data.status == 200) {
                    let parseData = JSON.parse(data.data);
                    this.clientList = parseData.data;
                    //   console.log(parseData.data);
                }
            });
        });
    }
    clientRegistration() {
        // console.log('clicked')
        this._router.navigateByUrl('client-register/client-registeration-form');
    }
};
ClientRegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__.MainService }
];
ClientRegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-client-register',
        template: _client_register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_client_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientRegisterPage);



/***/ }),

/***/ 75351:
/*!**********************************************************************!*\
  !*** ./src/app/client-register/client-register.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".clients_header {\n  display: flex;\n  flex-direction: row;\n}\n.clients_header ion-title {\n  margin-left: 10px;\n}\n.clients_header ion-label {\n  margin-right: 10px;\n  font-size: 40px;\n}\nion-content {\n  --background:#fff;\n}\nion-content ion-item {\n  --background:#fff;\n}\nion-content ion-item ion-label h2 {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0csaUJBQUE7QUFFUDtBQUFJO0VBQVcsa0JBQUE7RUFBb0IsZUFBQTtBQUluQztBQUZBO0VBQ0ksaUJBQUE7QUFLSjtBQUpJO0VBQ0ksaUJBQUE7QUFNUjtBQUpZO0VBQUksV0FBQTtBQU9oQiIsImZpbGUiOiJjbGllbnQtcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudHNfaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHsgbWFyZ2luLXJpZ2h0OiAxMHB4OyBmb250LXNpemU6IDQwcHg7fVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGgyeyBjb2xvcjogIzAwMDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 43905:
/*!**********************************************************************!*\
  !*** ./src/app/client-register/client-register.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon slot=\"start\" routerLink=\"/splash/tabs/home\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title slot=\"start\" class=\"header-title\">Clients</ion-title>\r\n    <ion-label slot=\"end\" (click)=\"clientRegistration()\">+</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"none\" *ngFor=\"let list of clientList\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../assets/images/user.png\" />\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h2>{{list.client_name}}</h2>\r\n      <p>{{list.propertyType}}, Flat</p>\r\n      <p>{{list.property_location}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_client-register_client-register_module_ts.js.map