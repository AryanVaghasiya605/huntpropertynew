"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-package_select-package_module_ts"],{

/***/ 4728:
/*!*****************************************************************!*\
  !*** ./src/app/select-package/select-package-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPackagePageRoutingModule": () => (/* binding */ SelectPackagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _select_package_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-package.page */ 87693);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.guard */ 98063);





const routes = [
    {
        path: '',
        component: _select_package_page__WEBPACK_IMPORTED_MODULE_0__.SelectPackagePage,
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    },
    {
        path: 'post-property-for',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_select-package_post-property-for_post-property-for_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./post-property-for/post-property-for.module */ 39969)).then(m => m.PostPropertyForPageModule)
    },
    {
        path: 'property-type-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_select-package_property-type-list_property-type-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./property-type-list/property-type-list.module */ 55632)).then(m => m.PropertyTypeListPageModule)
    },
    {
        path: 'posted-property-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_select-package_posted-property-details_posted-property-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./posted-property-details/posted-property-details.module */ 58182)).then(m => m.PostedPropertyDetailsPageModule)
    }
];
let SelectPackagePageRoutingModule = class SelectPackagePageRoutingModule {
};
SelectPackagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SelectPackagePageRoutingModule);



/***/ }),

/***/ 33954:
/*!*********************************************************!*\
  !*** ./src/app/select-package/select-package.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPackagePageModule": () => (/* binding */ SelectPackagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _select_package_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-package-routing.module */ 4728);
/* harmony import */ var _select_package_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-package.page */ 87693);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);








let SelectPackagePageModule = class SelectPackagePageModule {
};
SelectPackagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_package_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectPackagePageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_select_package_page__WEBPACK_IMPORTED_MODULE_1__.SelectPackagePage]
    })
], SelectPackagePageModule);



/***/ }),

/***/ 87693:
/*!*******************************************************!*\
  !*** ./src/app/select-package/select-package.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPackagePage": () => (/* binding */ SelectPackagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _select_package_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-package.page.html?ngResource */ 19990);
/* harmony import */ var _select_package_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-package.page.scss?ngResource */ 94632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);





let SelectPackagePage = class SelectPackagePage {
    constructor() {
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowLeft;
        this.customAlertOptions = {
            header: 'Select a Package',
            translucent: true,
        };
    }
    ngOnInit() {
    }
};
SelectPackagePage.ctorParameters = () => [];
SelectPackagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-select-package',
        template: _select_package_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select_package_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectPackagePage);



/***/ }),

/***/ 94632:
/*!********************************************************************!*\
  !*** ./src/app/select-package/select-package.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".login-bg fa-icon {\n  font-size: 24px;\n  font-weight: 900;\n  margin-left: 20px;\n  margin-top: 20px;\n  display: inline-block;\n}\n.login-bg span {\n  width: 60%;\n  margin: 0px auto;\n  text-align: center;\n  display: block;\n  padding-top: 60px;\n  font-size: 17px;\n}\n.login-bg span .free-listing {\n  color: red;\n  width: auto;\n  display: inline-block;\n  margin: auto;\n  padding-top: 0;\n}\n.login-bg .slectDropdown {\n  width: 75%;\n  margin: auto;\n}\n.login-bg .slectDropdown ion-select {\n  background: #fff;\n  color: #6a6a6a;\n  margin: 40px 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 10px;\n  height: 40px;\n}\nion-tab-bar {\n  display: none;\n}\n.next-btn {\n  background: red;\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  margin: 0;\n  width: 100%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1wYWNrYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ1I7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNJLGdCQUFBO0VBQ0osY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUdBO0VBQ0ksYUFBQTtBQUFKO0FBRUE7RUFBVyxlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLFNBQUE7RUFBVyxXQUFBO0VBQWEsU0FBQTtFQUFXLFdBQUE7RUFBYSxZQUFBO0FBUWhHIiwiZmlsZSI6InNlbGVjdC1wYWNrYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iZ3tcclxuICAgIGZhLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLmZyZWUtbGlzdGluZ3tcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuLnNsZWN0RHJvcGRvd257XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaW9uLXNlbGVjdHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICBtYXJnaW46IDQwcHggMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxufVxyXG5pb24tdGFiLWJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5leHQtYnRueyBiYWNrZ3JvdW5kOiByZWQ7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyBjb2xvcjogI2ZmZjsgbWFyZ2luOiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MHB4O30iXX0= */";

/***/ }),

/***/ 19990:
/*!********************************************************************!*\
  !*** ./src/app/select-package/select-package.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n<div class=\"login-bg\">\r\n        <fa-icon [icon]=\"faArrowLeft\" routerLink=\"/splash/tabs/home\"></fa-icon>\r\n        <span>\r\n          Continue with <span class=\"free-listing\">Free Listing</span> or select a Package.\r\n      </span>\r\n      <div class=\"slectDropdown\">       \r\n          <ion-select placeholder=\"Select a Package\" [interfaceOptions]=\"customAlertOptions\">\r\n            <ion-select-option value=\"Free\">Free</ion-select-option>           \r\n          </ion-select>       \r\n      </div>\r\n</div>\r\n<ion-button class=\"next-btn\" routerLink=\"/select-package/post-property-for\">Next</ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_select-package_select-package_module_ts.js.map