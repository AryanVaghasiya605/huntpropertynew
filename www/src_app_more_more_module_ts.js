"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_more_more_module_ts"],{

/***/ 39738:
/*!*********************************************!*\
  !*** ./src/app/more/more-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MorePageRoutingModule": () => (/* binding */ MorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more.page */ 97730);




const routes = [
    {
        path: '',
        component: _more_page__WEBPACK_IMPORTED_MODULE_0__.MorePage,
    },
    {
        path: 'contact-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("src_app_more_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contact-us/contact-us.module */ 15277)).then(m => m.ContactUsPageModule)
    }
];
let MorePageRoutingModule = class MorePageRoutingModule {
};
MorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], MorePageRoutingModule);



/***/ }),

/***/ 36436:
/*!*************************************!*\
  !*** ./src/app/more/more.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MorePageModule": () => (/* binding */ MorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more.page */ 97730);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _more_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more-routing.module */ 39738);








let MorePageModule = class MorePageModule {
};
MorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _more_routing_module__WEBPACK_IMPORTED_MODULE_2__.MorePageRoutingModule
        ],
        declarations: [_more_page__WEBPACK_IMPORTED_MODULE_0__.MorePage]
    })
], MorePageModule);



/***/ }),

/***/ 97730:
/*!***********************************!*\
  !*** ./src/app/more/more.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MorePage": () => (/* binding */ MorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _more_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more.page.html?ngResource */ 70698);
/* harmony import */ var _more_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.page.scss?ngResource */ 10888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 26436);






let MorePage = class MorePage {
    constructor(_router, socialSharing) {
        this._router = _router;
        this.socialSharing = socialSharing;
    }
    ionViewWillEnter() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn');
        // console.log('ion', this.isLoggedIn);
    }
    login() {
        this._router.navigateByUrl('login');
    }
    sShare() {
        var options = {
            message: 'share this',
            url: 'https://play.google.com/store/apps/details?id=hunt.property',
        };
        this.socialSharing.shareWithOptions(options);
    }
    rateUs() {
        window.location.href = 'https://play.google.com/store/apps/details?id=hunt.property';
    }
    contactUs() {
        this._router.navigateByUrl('/splash/tabs/more/contact-us');
    }
    logOut() {
        localStorage.clear();
        this._router.navigateByUrl('login');
        this.isLoggedIn = true;
    }
};
MorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing }
];
MorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-more',
        template: _more_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_more_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MorePage);



/***/ }),

/***/ 10888:
/*!************************************************!*\
  !*** ./src/app/more/more.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --background: #fff;\n  --border-color:#E4E4E4;\n  --min-height:60px;\n}\nion-item ion-icon {\n  color: #000;\n}\nion-item .more_list {\n  color: #000;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUFVLFdBQUE7QUFHZDtBQUZHO0VBQVksV0FBQTtFQUFhLGlCQUFBO0FBTTVCIiwiZmlsZSI6Im1vcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWJvcmRlci1jb2xvcjojRTRFNEU0O1xyXG4gICAgLS1taW4taGVpZ2h0OjYwcHg7XHJcbiAgICBpb24taWNvbnsgY29sb3I6ICMwMDA7fVxyXG4gICAubW9yZV9saXN0eyBjb2xvcjogIzAwMDsgbWFyZ2luLWxlZnQ6IDIwcHg7fVxyXG59Il19 */";

/***/ }),

/***/ 70698:
/*!************************************************!*\
  !*** ./src/app/more/more.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\r\n  <ion-toolbar class=\"header-bg-color\"> \r\n    <ion-title slot=\"start\" class=\"header-title\">More</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-item lines=\"full\" (click)=\"rateUs()\">\r\n    <ion-icon name=\"rateus\"></ion-icon>\r\n    <span class=\"more_list\">Rate Us</span>\r\n  </ion-item>\r\n  <ion-item lines=\"full\" (click)=\"sShare()\">\r\n    <ion-icon name=\"share\"></ion-icon>\r\n    <span class=\"more_list\">Share this app</span>\r\n  </ion-item>\r\n  <ion-item lines=\"full\" (click)=\"rateUs()\">\r\n    <ion-icon name=\"feedback\"></ion-icon>\r\n    <span class=\"more_list\">Feedback</span>\r\n  </ion-item>\r\n  <ion-item lines=\"full\" (click)=\"contactUs()\">\r\n    <ion-icon name=\"feedback\"></ion-icon>\r\n    <span class=\"more_list\">Contact Us</span>\r\n  </ion-item>\r\n  <ion-item lines=\"full\" (click)=\"login()\" *ngIf=\"!isLoggedIn\">\r\n    <ion-icon name=\"login\"></ion-icon>\r\n    <span class=\"more_list\">Login</span>    \r\n  </ion-item>\r\n  <ion-item lines=\"full\" (click)=\"logOut()\" *ngIf=\"isLoggedIn\">\r\n    <ion-icon name=\"login\"></ion-icon>   \r\n    <span class=\"more_list\" >Logout</span>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_more_more_module_ts.js.map