"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_package-list_package-list_module_ts"],{

/***/ 99016:
/*!*********************************************************************!*\
  !*** ./src/app/profile/package-list/package-list-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageListPageRoutingModule": () => (/* binding */ PackageListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _package_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-list.page */ 73909);




const routes = [
    {
        path: '',
        component: _package_list_page__WEBPACK_IMPORTED_MODULE_0__.PackageListPage
    }
];
let PackageListPageRoutingModule = class PackageListPageRoutingModule {
};
PackageListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PackageListPageRoutingModule);



/***/ }),

/***/ 68381:
/*!*************************************************************!*\
  !*** ./src/app/profile/package-list/package-list.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageListPageModule": () => (/* binding */ PackageListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _package_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-list-routing.module */ 99016);
/* harmony import */ var _package_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-list.page */ 73909);







let PackageListPageModule = class PackageListPageModule {
};
PackageListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _package_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PackageListPageRoutingModule
        ],
        declarations: [_package_list_page__WEBPACK_IMPORTED_MODULE_1__.PackageListPage]
    })
], PackageListPageModule);



/***/ }),

/***/ 73909:
/*!***********************************************************!*\
  !*** ./src/app/profile/package-list/package-list.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageListPage": () => (/* binding */ PackageListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _package_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-list.page.html?ngResource */ 54293);
/* harmony import */ var _package_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-list.page.scss?ngResource */ 86749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PackageListPage = class PackageListPage {
    constructor() { }
    ngOnInit() {
    }
};
PackageListPage.ctorParameters = () => [];
PackageListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-package-list',
        template: _package_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_package_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PackageListPage);



/***/ }),

/***/ 86749:
/*!************************************************************************!*\
  !*** ./src/app/profile/package-list/package-list.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWNrYWdlLWxpc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 54293:
/*!************************************************************************!*\
  !*** ./src/app/profile/package-list/package-list.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>package-list</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_package-list_package-list_module_ts.js.map