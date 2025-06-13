"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_more_contact-us_contact-us_module_ts"],{

/***/ 93805:
/*!**************************************************************!*\
  !*** ./src/app/more/contact-us/contact-us-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 67519);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 15277:
/*!******************************************************!*\
  !*** ./src/app/more/contact-us/contact-us.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 93805);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 67519);








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
    })
], ContactUsPageModule);



/***/ }),

/***/ 67519:
/*!****************************************************!*\
  !*** ./src/app/more/contact-us/contact-us.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _contact_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page.html?ngResource */ 11831);
/* harmony import */ var _contact_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss?ngResource */ 75896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);





let ContactUsPage = class ContactUsPage {
    constructor() {
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPhone;
    }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-contact-us',
        template: _contact_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactUsPage);



/***/ }),

/***/ 75896:
/*!*****************************************************************!*\
  !*** ./src/app/more/contact-us/contact-us.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-content, ion-item {\n  --background: #fff;\n  color: #000;\n}\nion-content a, ion-item a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXVCLGtCQUFBO0VBQW9CLFdBQUE7QUFHM0M7QUFGQTtFQUFHLHFCQUFBO0FBS0giLCJmaWxlIjoiY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCwgaW9uLWl0ZW17IC0tYmFja2dyb3VuZDogI2ZmZjsgY29sb3I6ICMwMDA7XHJcbmF7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcbn0iXX0= */";

/***/ }),

/***/ 11831:
/*!*****************************************************************!*\
  !*** ./src/app/more/contact-us/contact-us.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\r\n  <ion-toolbar class=\"header-bg-color\"> \r\n    <ion-title slot=\"start\" class=\"header-title\">Contact Us</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item></ion-item>\r\n  <ion-item lines=\"none\">\r\n    https://www.huntproperty.com/\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    Hunt Property Infratech Pvt Ltd <br>\r\n    3rd Floor The Homestop@104, Sector 104, <br>\r\n    Hazipur, Noida, U.P 201304\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <a href=\"tel:+91 9899 095 939\">\r\n      <fa-icon [icon]=\"faPhone\" class=\"phone\"></fa-icon>&nbsp;&nbsp;\r\n      <span>+91 9899 095 939</span></a>\r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_more_contact-us_contact-us_module_ts.js.map