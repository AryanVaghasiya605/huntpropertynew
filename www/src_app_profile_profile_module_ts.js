"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 75434:
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
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 29755);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
    }, {
        path: 'package-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_package-list_package-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./package-list/package-list.module */ 4597)).then(m => m.PackageListPageModule),
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

/***/ 47350:
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
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 29755);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 74081);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ 75434);
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

/***/ 29755:
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
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 20070);
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

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  color: #ffffff;\n  text-align: left;\n}\nion-content {\n  --background: #e3e3e3;\n}\nion-content .banner-bg {\n  --background: none;\n  background-image: url('home-banner-bg.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\nion-content .banner-bg .user-avatar {\n  width: 100px;\n  height: 100px;\n  background: #ffffff;\n  border-radius: 100%;\n  margin: 18px auto 20px auto;\n  position: relative;\n  overflow: hidden;\n}\nion-content .banner-bg .user-avatar fa-icon {\n  color: #e3e3e3;\n  margin: auto;\n  display: block;\n  font-size: 70px;\n  position: absolute;\n  left: 18px;\n  bottom: -10px;\n  right: 0;\n}\nion-content .banner-bg .user-details {\n  background: #000000;\n  opacity: 0.5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n}\nion-content .banner-bg .user-details .name {\n  color: #ffffff;\n  font-weight: 700;\n}\nion-content .banner-bg .user-details .email {\n  color: #ffffff;\n}\nion-content .profile-list {\n  padding: 15px 0;\n  background: #e3e3e3;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  width: 80%;\n}\nion-content .profile-list .profile-list-innerwrapper {\n  background: #e3e3e3;\n  display: inline-block;\n}\nion-content .profile-list .profile-list-innerwrapper .list {\n  width: 43%;\n  float: left;\n  background: #ffffff;\n  text-align: center;\n  height: 172px;\n  margin-bottom: 30px;\n  float: left;\n  position: relative;\n}\nion-content .profile-list .profile-list-innerwrapper .list .message {\n  background: #818181;\n  color: #ffffff;\n  font-size: 12px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  right: 0;\n  line-height: 35px;\n}\nion-content .profile-list .profile-list-innerwrapper .list ion-img {\n  font-size: 50px;\n  width: 70px;\n  margin: 40px auto 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .profile-list .profile-list-innerwrapper .list:nth-child(3), ion-content .profile-list .profile-list-innerwrapper .list:nth-child(4) {\n  margin-bottom: 0;\n}\nion-content .profile-list .list-ios {\n  background: none;\n}\nion-content .profile-list .list:nth-child(2n+1) {\n  margin-right: 40px;\n}\nion-content .profile-list.list-ios {\n  background: #e3e3e3;\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZlZW4lMjBrdW1hciUyMGthdGl5YXJcXE9uZURyaXZlXFxEZXNrdG9wXFxodW50bmV3XFxodW50cHJvcGVydHluZXdcXHNyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjtBREFBO0VBQVcsY0FBQTtFQUFnQixlQUFBO0FDSTNCO0FESEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNLSjtBREZBO0VBQ0kscUJBQUE7QUNLSjtBREpJO0VBQ0ksa0JBQUE7RUFDRCwyQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ01QO0FETE87RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNPUjtBRE5RO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FDUVo7QURKTztFQUNDLG1CQUFBO0VBQXFCLFlBQUE7RUFDckIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNPUjtBRE5RO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDUVo7QUROUTtFQUNJLGNBQUE7QUNRWjtBREZBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSUo7QURISTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUNLUjtBREpJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTVI7QURMUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQ09aO0FETFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNPWjtBREpJO0VBQ0ksZ0JBQUE7QUNNUjtBREhJO0VBQVcsZ0JBQUE7QUNNZjtBRExJO0VBQ0ksa0JBQUE7QUNPUjtBREhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDS0oiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJnLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlMTRiNGM7ICAgIFxyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4uYmFjay1idG57IGNvbG9yOiAjZmZmZmZmOyBmb250LXNpemU6IDI1cHg7fVxyXG4uaGVhZGVyLXRpdGxle1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICAuYmFubmVyLWJneyAgXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtYmFubmVyLWJnLnBuZycpO1xyXG4gICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgIC51c2VyLWF2YXRhcntcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxOHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZhLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTNlM2UzO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMThweDtcclxuICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgLnVzZXItZGV0YWlsc3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVtYWlse1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgIH0gXHJcbi5wcm9maWxlLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiNlM2UzZTM7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLnByb2ZpbGUtbGlzdC1pbm5lcndyYXBwZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZTNlM2UzO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC5saXN0e1xyXG4gICAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzJweDsgICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5tZXNzYWdle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3Q6bnRoLWNoaWxkKDMpLCAubGlzdDpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG4gICAgLmxpc3QtaW9zeyBiYWNrZ3JvdW5kOiBub25lO31cclxuICAgIC5saXN0Om50aC1jaGlsZCgybisxKXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4ucHJvZmlsZS1saXN0Lmxpc3QtaW9ze1xyXG4gICAgYmFja2dyb3VuZDojZTNlM2UzO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG59IiwiLmhlYWRlci1iZy1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojZTE0YjRjO1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG59XG4uaGVhZGVyLWJnLWNvbG9yIC5iYWNrLWJ0biB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uaGVhZGVyLWJnLWNvbG9yIC5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XG59XG5pb24tY29udGVudCAuYmFubmVyLWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtYmFubmVyLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5pb24tY29udGVudCAuYmFubmVyLWJnIC51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luOiAxOHB4IGF1dG8gMjBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tY29udGVudCAuYmFubmVyLWJnIC51c2VyLWF2YXRhciBmYS1pY29uIHtcbiAgY29sb3I6ICNlM2UzZTM7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOHB4O1xuICBib3R0b206IC0xMHB4O1xuICByaWdodDogMDtcbn1cbmlvbi1jb250ZW50IC5iYW5uZXItYmcgLnVzZXItZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbmlvbi1jb250ZW50IC5iYW5uZXItYmcgLnVzZXItZGV0YWlscyAubmFtZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuaW9uLWNvbnRlbnQgLmJhbm5lci1iZyAudXNlci1kZXRhaWxzIC5lbWFpbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGUtbGlzdCB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlLWxpc3QgLnByb2ZpbGUtbGlzdC1pbm5lcndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tY29udGVudCAucHJvZmlsZS1saXN0IC5wcm9maWxlLWxpc3QtaW5uZXJ3cmFwcGVyIC5saXN0IHtcbiAgd2lkdGg6IDQzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlLWxpc3QgLnByb2ZpbGUtbGlzdC1pbm5lcndyYXBwZXIgLmxpc3QgLm1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjODE4MTgxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlLWxpc3QgLnByb2ZpbGUtbGlzdC1pbm5lcndyYXBwZXIgLmxpc3QgaW9uLWltZyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGUtbGlzdCAucHJvZmlsZS1saXN0LWlubmVyd3JhcHBlciAubGlzdDpudGgtY2hpbGQoMyksIGlvbi1jb250ZW50IC5wcm9maWxlLWxpc3QgLnByb2ZpbGUtbGlzdC1pbm5lcndyYXBwZXIgLmxpc3Q6bnRoLWNoaWxkKDQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlLWxpc3QgLmxpc3QtaW9zIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlLWxpc3QgLmxpc3Q6bnRoLWNoaWxkKDJuKzEpIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGUtbGlzdC5saXN0LWlvcyB7XG4gIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn0iXX0= */";

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