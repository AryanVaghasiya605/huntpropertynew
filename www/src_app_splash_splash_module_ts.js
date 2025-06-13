"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_splash_splash_module_ts"],{

/***/ 3523:
/*!*************************************************!*\
  !*** ./src/app/splash/splash-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 84399);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage,
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 89623:
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 3523);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 84399);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 84399:
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page.html?ngResource */ 23610);
/* harmony import */ var _splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss?ngResource */ 69898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            // console.log('before')
            this.router.navigateByUrl('/splash/tabs/home');
            //  console.log('after')
        }, 3000);
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashPage);



/***/ }),

/***/ 69898:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#fff;\n  position: relative;\n}\nion-content img {\n  position: absolute;\n  bottom: 0;\n}\nion-content .video {\n  position: absolute;\n  top: 25%;\n  width: 98%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQ1IiLCJmaWxlIjoic3BsYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBpbWc6bnRoLWNoaWxkKDEpeyBoZWlnaHQ6IDEwMCU7fVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAudmlkZW97XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMjUlO1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 23610:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <!-- <img src=\"../../assets/images/splash-top.gif\" alt=\"\"> -->\r\n<!-- <img src=\"../../assets/images/spash  screen.gif\" alt=\"\"> -->\r\n<img autoplay class=\"video\" src=\"../../assets/video/splash.gif\" />\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_splash_splash_module_ts.js.map