"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.guard */ 98063);





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'Profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 84523)).then(m => m.ProfilePageModule),
                canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
            },
            {
                path: 'Notifications',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 53746)).then(m => m.Tab3PageModule)
            },
            {
                path: 'more',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_more_more_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../more/more.module */ 36436)).then(m => m.MorePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/splash/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 94710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsPage = class TabsPage {
    constructor() {
        this.showhomeBtn = false;
        this.showProfile = false;
        this.showNotification = false;
        this.showMore = false;
        this.splashScreen = false;
    }
    setCurrentTab(event) {
        setTimeout(() => {
            this.splashScreen = true;
        }, 3000);
        // console.log('event', event);
        this.selectedTab = this.tabs.getSelected();
        //console.log(this.selectedTab === this.selectedTab)
        if (this.selectedTab == 'home') {
            this.showhomeBtn = true;
            this.showProfile = false;
            this.showNotification = false;
            this.showMore = false;
        }
        else if (this.selectedTab == 'Profile') {
            this.showProfile = true;
            this.showMore = false;
            this.showNotification = false;
            this.showhomeBtn = false;
        }
        else if (this.selectedTab == 'Notifications') {
            this.showNotification = true;
            this.showhomeBtn = false;
            this.showProfile = false;
            this.showMore = false;
        }
        else if (this.selectedTab == 'more') {
            this.showMore = true;
            this.showNotification = false;
            this.showhomeBtn = false;
            this.showProfile = false;
        }
    }
};
TabsPage.ctorParameters = () => [];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 94710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar {\n  --background:#ffffff;\n  --border: solid 1px #e3e3e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksb0JBQUE7RUFBcUIsMkJBQUE7QUFFakMiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRhYi1iYXJ7LS1iYWNrZ3JvdW5kOiNmZmZmZmY7LS1ib3JkZXI6IHNvbGlkIDFweCAjZTNlM2UzO1xyXG5pb24tdGFiLWJ1dHRvbntcclxuLnByb2ZpbGV7XHJcbiAgICBcclxufVxyXG59XHJcbn0iXX0= */";

/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs #tabs (ionTabsWillChange)=\"setCurrentTab($event)\">\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"home\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label *ngIf=\"showhomeBtn\">Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"Profile\">\r\n      <ion-icon name=\"person\"></ion-icon>         \r\n      <ion-label *ngIf=\"showProfile\">Profile</ion-label>\r\n    </ion-tab-button>\r\n\r\n   <ion-tab-button tab=\"Notifications\">\r\n      <ion-icon name=\"Notifications\"></ion-icon>\r\n      <ion-label *ngIf=\"showNotification\">Notifications</ion-label>\r\n    </ion-tab-button>\r\n  \r\n\r\n  <ion-tab-button tab=\"more\">\r\n    <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\r\n    <ion-label *ngIf=\"showMore\">More...</ion-label>\r\n  </ion-tab-button>\r\n</ion-tab-bar> \r\n\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map