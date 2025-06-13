"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_posted-property_posted-property_module_ts"],{

/***/ 94800:
/*!***************************************************************************!*\
  !*** ./src/app/profile/posted-property/posted-property-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostedPropertyPageRoutingModule": () => (/* binding */ PostedPropertyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _posted_property_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posted-property.page */ 91049);




const routes = [
    {
        path: '',
        component: _posted_property_page__WEBPACK_IMPORTED_MODULE_0__.PostedPropertyPage
    }
];
let PostedPropertyPageRoutingModule = class PostedPropertyPageRoutingModule {
};
PostedPropertyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostedPropertyPageRoutingModule);



/***/ }),

/***/ 39732:
/*!*******************************************************************!*\
  !*** ./src/app/profile/posted-property/posted-property.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostedPropertyPageModule": () => (/* binding */ PostedPropertyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _posted_property_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posted-property-routing.module */ 94800);
/* harmony import */ var _posted_property_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posted-property.page */ 91049);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);








let PostedPropertyPageModule = class PostedPropertyPageModule {
};
PostedPropertyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _posted_property_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostedPropertyPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_posted_property_page__WEBPACK_IMPORTED_MODULE_1__.PostedPropertyPage]
    })
], PostedPropertyPageModule);



/***/ }),

/***/ 91049:
/*!*****************************************************************!*\
  !*** ./src/app/profile/posted-property/posted-property.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostedPropertyPage": () => (/* binding */ PostedPropertyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _posted_property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posted-property.page.html?ngResource */ 13509);
/* harmony import */ var _posted_property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posted-property.page.scss?ngResource */ 72417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 91557);







let PostedPropertyPage = class PostedPropertyPage {
    constructor(_route, _main, _router) {
        this._route = _route;
        this._main = _main;
        this._router = _router;
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPhone;
        this.faMessage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMessage;
        this.showSpinner = false;
        this.isPageReady = false;
    }
    ngOnInit() {
        this._main.getPostedPropertyList().then((data) => {
            let getData = JSON.parse(data.data);
            this.propertyList = getData.data;
            this.showSpinner = true;
            this.isPageReady = true;
            //  console.log('serch', this.propertyList);
        });
    }
    propertyDetails(id, lat, long) {
        this._router.navigate(['/property-details', { id: id, lat: lat, long: long }]);
    }
};
PostedPropertyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PostedPropertyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-posted-property',
        template: _posted_property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_posted_property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostedPropertyPage);



/***/ }),

/***/ 72417:
/*!******************************************************************************!*\
  !*** ./src/app/profile/posted-property/posted-property.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  display: inline-block;\n}\n.property-list {\n  background: #fff;\n  display: flex;\n  max-height: 130px;\n  margin-bottom: 15px;\n}\n.property-list .pro-img {\n  width: 30%;\n}\n.property-list .pro-img img {\n  width: 100%;\n}\n.property-list .pro-text {\n  width: 70%;\n  padding-left: 20px;\n}\n.property-list .pro-text h4 {\n  color: #000;\n  margin: 10px 0 25px 0;\n  font-size: 16px;\n}\n.property-list .pro-text h6 {\n  color: #aaaaaa;\n  margin: 0;\n  font-size: 14px;\n}\n.property-list .pro-text .bottom-button {\n  margin-top: 6px;\n  display: flex;\n  text-align: center;\n}\n.property-list .pro-text .bottom-button a {\n  display: flex;\n}\n.property-list .pro-text .bottom-button a .phone {\n  width: 40px;\n  height: 40px;\n  background: red;\n  padding: 10px;\n  color: #ffff;\n  border-radius: 50%;\n}\n.property-list .pro-text .bottom-button a {\n  display: flex;\n}\n.property-list .pro-text .bottom-button a .message {\n  width: 40px;\n  height: 40px;\n  background: red;\n  padding: 10px;\n  color: #ffff;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n.noData {\n  color: #000;\n  font-size: 24px;\n  text-align: center;\n  margin-top: 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RlZC1wcm9wZXJ0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFBQTtFQUFXLGNBQUE7RUFBZ0IsZUFBQTtBQUkzQjtBQUhBO0VBQ0kscUJBQUE7QUFLSjtBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFDSSxVQUFBO0FBTVI7QUFMUTtFQUNJLFdBQUE7QUFPWjtBQUpJO0VBQ0csVUFBQTtFQUNBLGtCQUFBO0FBTVA7QUFMSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFPUjtBQUxJO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBT1I7QUFMSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFPUjtBQU5RO0VBQ0ksYUFBQTtBQVFaO0FBUFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBU1o7QUFOSTtFQUNJLGFBQUE7QUFRUjtBQVBRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBU1o7QUFGSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLUiIsImZpbGUiOiJwb3N0ZWQtcHJvcGVydHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZy1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojZTE0YjRjOyAgICBcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuLmJhY2stYnRueyBjb2xvcjogI2ZmZmZmZjsgZm9udC1zaXplOiAyNXB4O31cclxuLmhlYWRlci10aXRsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG59XHJcbi5wcm9wZXJ0eS1saXN0e1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC5wcm8taW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvLXRleHR7XHJcbiAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgaDR7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAyNXB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgaDZ7XHJcbiAgICAgICAgY29sb3I6I2FhYWFhYTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLnBob25le1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5tZXNzYWdle1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcblxyXG4gICAgLm5vRGF0YXtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 13509:
/*!******************************************************************************!*\
  !*** ./src/app/profile/posted-property/posted-property.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon routerLink=\"/splash/tabs/Profile\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title class=\"header-title\">List Property</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"isPageReady\">\r\n  <div *ngIf=\"propertyList?.length > 0; else noData\">\r\n  <ng-container *ngFor=\"let list of propertyList\">\r\n  <div lines=\"none\" class=\"property-list\" (click)=\"propertyDetails(list.Id, list.Latitude, list.Longitude)\">\r\n    <span class=\"pro-img\">\r\n      <img alt=\"property image missing\" src=\"../../assets/images/propertyImg.PNG\" />\r\n    </span>\r\n    <span class=\"pro-text\">\r\n    <h4>{{list.Name}}</h4>\r\n    <h6>{{list.Locality}}, {{list.State}}</h6>\r\n    <span class=\"bottom-button\">\r\n       <a href=\"tel:{{list.UserMobile}}\"><fa-icon  [icon]=\"faPhone\" class=\"phone\"></fa-icon></a>\r\n       <a routerLink=\"/messages/send-message\"><fa-icon [icon]=\"faMessage\" class=\"message\"></fa-icon></a>\r\n    </span>\r\n  </span>\r\n  </div>\r\n</ng-container>\r\n</div>\r\n<ng-template #noData style=\"color: #000;\"><span class=\"noData\"> No data found</span></ng-template>\r\n</ion-content>\r\n\r\n\r\n  <ion-spinner class=\"loader\" *ngIf=\"!showSpinner\" name=\"lines-sharp\"></ion-spinner>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_posted-property_posted-property_module_ts.js.map