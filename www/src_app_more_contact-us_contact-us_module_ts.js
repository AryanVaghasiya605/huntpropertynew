"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_more_contact-us_contact-us_module_ts"],{

/***/ 94621:
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
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 16457);




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

/***/ 26305:
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
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 94621);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 16457);








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

/***/ 16457:
/*!****************************************************!*\
  !*** ./src/app/more/contact-us/contact-us.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _contact_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page.html?ngResource */ 43263);
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

module.exports = "ion-content, ion-item {\n  --background: #fff;\n  color: #000;\n}\nion-content a, ion-item a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2ZWVuJTIwa3VtYXIlMjBrYXRpeWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcaHVudG5ld1xcaHVudHByb3BlcnR5bmV3XFxzcmNcXGFwcFxcbW9yZVxcY29udGFjdC11c1xcY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBdUIsa0JBQUE7RUFBb0IsV0FBQTtBQ0czQztBREZBO0VBQUcscUJBQUE7QUNLSCIsImZpbGUiOiJjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LCBpb24taXRlbXsgLS1iYWNrZ3JvdW5kOiAjZmZmOyBjb2xvcjogIzAwMDtcclxuYXsgdGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxufSIsImlvbi1jb250ZW50LCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG5pb24tY29udGVudCBhLCBpb24taXRlbSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 43263:
/*!*****************************************************************!*\
  !*** ./src/app/more/contact-us/contact-us.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\n  <ion-toolbar class=\"header-bg-color\"> \n    <ion-title slot=\"start\" class=\"header-title\">Contact Us</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item></ion-item>\n  <ion-item lines=\"none\">\n    https://www.huntproperty.com/\n  </ion-item>\n  <ion-item lines=\"none\">\n    Hunt Property Infratech Pvt Ltd <br>\n    3rd Floor The Homestop@104, Sector 104, <br>\n    Hazipur, Noida, U.P 201304\n  </ion-item>\n  <ion-item lines=\"none\">\n    <a href=\"tel:+91 9899 095 939\">\n      <fa-icon [icon]=\"faPhone\" class=\"phone\"></fa-icon>&nbsp;&nbsp;\n      <span>+91 9899 095 939</span></a>\n  </ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_more_contact-us_contact-us_module_ts.js.map