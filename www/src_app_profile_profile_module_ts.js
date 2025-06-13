"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
    }, {
        path: 'package-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_package-list_package-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./package-list/package-list.module */ 68381)).then(m => m.PackageListPageModule),
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfilePageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 36611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);






let ProfilePage = class ProfilePage {
    constructor(_nativeStorage) {
        this._nativeStorage = _nativeStorage;
        // faPercent = faUser;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUser;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCoffee;
    }
    ionViewWillEnter() {
        this._nativeStorage.getItem('email').then((data) => {
            this.email = data;
        });
        this._nativeStorage.getItem('name').then((data) => {
            this.name = data;
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 36611:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  color: #ffffff;\n  text-align: left;\n}\nion-content {\n  --background: #e3e3e3;\n}\nion-content .banner-bg {\n  --background: none;\n  background-image: url('home-banner-bg.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\nion-content .banner-bg .user-avatar {\n  width: 100px;\n  height: 100px;\n  background: #ffffff;\n  border-radius: 100%;\n  margin: 18px auto 20px auto;\n  position: relative;\n  overflow: hidden;\n}\nion-content .banner-bg .user-avatar fa-icon {\n  color: #e3e3e3;\n  margin: auto;\n  display: block;\n  font-size: 70px;\n  position: absolute;\n  left: 18px;\n  bottom: -10px;\n  right: 0;\n}\nion-content .banner-bg .user-details {\n  background: #000000;\n  opacity: 0.5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n}\nion-content .banner-bg .user-details .name {\n  color: #ffffff;\n  font-weight: 700;\n}\nion-content .banner-bg .user-details .email {\n  color: #ffffff;\n}\nion-content .profile-list {\n  padding: 15px 0;\n  background: #e3e3e3;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  width: 80%;\n}\nion-content .profile-list .profile-list-innerwrapper {\n  background: #e3e3e3;\n  display: inline-block;\n}\nion-content .profile-list .profile-list-innerwrapper .list {\n  width: 43%;\n  float: left;\n  background: #ffffff;\n  text-align: center;\n  height: 172px;\n  margin-bottom: 30px;\n  float: left;\n  position: relative;\n}\nion-content .profile-list .profile-list-innerwrapper .list .message {\n  background: #818181;\n  color: #ffffff;\n  font-size: 12px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  right: 0;\n  line-height: 35px;\n}\nion-content .profile-list .profile-list-innerwrapper .list ion-img {\n  font-size: 50px;\n  width: 70px;\n  margin: 40px auto 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .profile-list .profile-list-innerwrapper .list:nth-child(3), ion-content .profile-list .profile-list-innerwrapper .list:nth-child(4) {\n  margin-bottom: 0;\n}\nion-content .profile-list .list-ios {\n  background: none;\n}\nion-content .profile-list .list:nth-child(2n+1) {\n  margin-right: 40px;\n}\nion-content .profile-list.list-ios {\n  background: #e3e3e3;\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQUE7RUFBVyxjQUFBO0VBQWdCLGVBQUE7QUFJM0I7QUFIQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUtKO0FBRkE7RUFDSSxxQkFBQTtBQUtKO0FBSkk7RUFDSSxrQkFBQTtFQUNELDJDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBTVA7QUFMTztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU9SO0FBTlE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUFRWjtBQUpPO0VBQ0MsbUJBQUE7RUFBcUIsWUFBQTtFQUNyQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQU9SO0FBTlE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFRWjtBQU5RO0VBQ0ksY0FBQTtBQVFaO0FBRkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFJSjtBQUhJO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQUtSO0FBSkk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFNUjtBQUxRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBT1o7QUFMUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9aO0FBSkk7RUFDSSxnQkFBQTtBQU1SO0FBSEk7RUFBVyxnQkFBQTtBQU1mO0FBTEk7RUFDSSxrQkFBQTtBQU9SO0FBSEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFLSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmctY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6I2UxNGI0YzsgICAgXHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbi5iYWNrLWJ0bnsgY29sb3I6ICNmZmZmZmY7IGZvbnQtc2l6ZTogMjVweDt9XHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2UzZTNlMztcclxuICAgIC5iYW5uZXItYmd7ICBcclxuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iYW5uZXItYmcucG5nJyk7XHJcbiAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgLnVzZXItYXZhdGFye1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDE4cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgY29sb3I6ICNlM2UzZTM7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICAudXNlci1kZXRhaWxze1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7IG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSBcclxuLnByb2ZpbGUtbGlzdHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGJhY2tncm91bmQ6I2UzZTNlMztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAucHJvZmlsZS1saXN0LWlubmVyd3JhcHBlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiNlM2UzZTM7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLmxpc3R7XHJcbiAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDE3MnB4OyAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLm1lc3NhZ2V7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MTgxODE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taW1ne1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdDpudGgtY2hpbGQoMyksIC5saXN0Om50aC1jaGlsZCg0KXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcbiAgICAubGlzdC1pb3N7IGJhY2tncm91bmQ6IG5vbmU7fVxyXG4gICAgLmxpc3Q6bnRoLWNoaWxkKDJuKzEpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5wcm9maWxlLWxpc3QubGlzdC1pb3N7XHJcbiAgICBiYWNrZ3JvdW5kOiNlM2UzZTM7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbn0iXX0= */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n        <div class=\"header-title\">Profile</div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar class=\"banner-bg\">\r\n   <div class=\"user-avatar\">\r\n    <fa-icon [icon]=\"faUser\"></fa-icon>\r\n   </div>\r\n   <div class=\"user-details\">\r\n    <span class=\"name\">{{name}}</span>\r\n    <span class=\"email\">{{email}}</span>\r\n   </div>\r\n    </ion-toolbar>\r\n\r\n    <ion-list class=\"profile-list\" lines=\"none\">\r\n      <div class=\"profile-list-innerwrapper\">\r\n      <div class=\"list\" routerLink=\"/messages\">\r\n        <ion-img src=\"../../assets/images/icons/message.png\"></ion-img>\r\n        <span class=\"message\">My message</span>\r\n      </div>\r\n      <div class=\"list\">\r\n        <ion-img src=\"../../assets/images/icons/package.png\"></ion-img>\r\n        <span class=\"message\">Packages</span>\r\n      </div>\r\n      <div class=\"list\" routerLink=\"/posted-property\">\r\n        <ion-img src=\"../../assets/images/icons/home.png\"></ion-img>\r\n        <span class=\"message\">Posted Properties</span>\r\n      </div>\r\n      <div class=\"list\" routerLink=\"/messages\">\r\n        <ion-img src=\"../../assets/images/icons/envelop.png\"></ion-img>\r\n        <span class=\"message\">Responses</span>\r\n      </div>\r\n    </div>\r\n    </ion-list>\r\n    \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map