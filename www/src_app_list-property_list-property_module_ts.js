"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_list-property_list-property_module_ts"],{

/***/ 56100:
/*!***************************************************************!*\
  !*** ./src/app/list-property/list-property-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPropertyPageRoutingModule": () => (/* binding */ ListPropertyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_property_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-property.page */ 1072);




const routes = [
    {
        path: '',
        component: _list_property_page__WEBPACK_IMPORTED_MODULE_0__.ListPropertyPage
    }
];
let ListPropertyPageRoutingModule = class ListPropertyPageRoutingModule {
};
ListPropertyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListPropertyPageRoutingModule);



/***/ }),

/***/ 94286:
/*!*******************************************************!*\
  !*** ./src/app/list-property/list-property.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPropertyPageModule": () => (/* binding */ ListPropertyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _list_property_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-property-routing.module */ 56100);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _list_property_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-property.page */ 1072);








let ListPropertyPageModule = class ListPropertyPageModule {
};
ListPropertyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_property_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListPropertyPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_list_property_page__WEBPACK_IMPORTED_MODULE_1__.ListPropertyPage]
    })
], ListPropertyPageModule);



/***/ }),

/***/ 1072:
/*!*****************************************************!*\
  !*** ./src/app/list-property/list-property.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPropertyPage": () => (/* binding */ ListPropertyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _list_property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-property.page.html?ngResource */ 90115);
/* harmony import */ var _list_property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-property.page.scss?ngResource */ 98831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ 91557);







let ListPropertyPage = class ListPropertyPage {
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
        this._route.params.subscribe((data) => {
            // console.log(data)
            let parseData = JSON.parse(data.residential);
            // console.log('listing', parseData);
            this.searchParams = parseData;
            // this.searchParams.PropertyFor = 'Sell';
            // console.log('listing', this.searchParams);
            this._main.getPropertyList(this.searchParams).then((data) => {
                let getData = JSON.parse(data.data);
                this.propertyList = getData.data;
                this.showSpinner = true;
                this.isPageReady = true;
                //   console.log('serch', this.propertyList);
            });
        });
    }
    propertyDetails(id, lat, long) {
        this._router.navigate(['/property-details', { id: id, lat: lat, long: long }]);
    }
};
ListPropertyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ListPropertyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list-property',
        template: _list_property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListPropertyPage);



/***/ }),

/***/ 98831:
/*!******************************************************************!*\
  !*** ./src/app/list-property/list-property.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".property-list {\n  background: #fff;\n  display: flex;\n  max-height: 130px;\n  margin-bottom: 15px;\n}\n.property-list .pro-img {\n  width: 30%;\n}\n.property-list .pro-img img {\n  width: 100%;\n}\n.property-list .pro-text {\n  width: 70%;\n  padding-left: 20px;\n}\n.property-list .pro-text h4 {\n  color: #000;\n  margin: 10px 0 25px 0;\n  font-size: 16px;\n}\n.property-list .pro-text h6 {\n  color: #aaaaaa;\n  margin: 0;\n  font-size: 14px;\n}\n.property-list .pro-text .bottom-button {\n  margin-top: 6px;\n  display: flex;\n  text-align: center;\n}\n.property-list .pro-text .bottom-button a {\n  display: flex;\n}\n.property-list .pro-text .bottom-button a .phone {\n  width: 40px;\n  height: 40px;\n  background: red;\n  padding: 10px;\n  color: #ffff;\n  border-radius: 50%;\n}\n.property-list .pro-text .bottom-button a {\n  display: flex;\n}\n.property-list .pro-text .bottom-button a .message {\n  width: 40px;\n  height: 40px;\n  background: red;\n  padding: 10px;\n  color: #ffff;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n.noData {\n  color: #000;\n  font-size: 24px;\n  text-align: center;\n  margin-top: 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcHJvcGVydHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFJO0VBQ0csVUFBQTtFQUNBLGtCQUFBO0FBRVA7QUFESTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFHUjtBQURJO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBR1I7QUFESTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQUZRO0VBQ0ksYUFBQTtBQUlaO0FBSFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBS1o7QUFGSTtFQUNJLGFBQUE7QUFJUjtBQUhRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBS1o7QUFFSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDUiIsImZpbGUiOiJsaXN0LXByb3BlcnR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eS1saXN0e1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC5wcm8taW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvLXRleHR7XHJcbiAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgaDR7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAyNXB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgaDZ7XHJcbiAgICAgICAgY29sb3I6I2FhYWFhYTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLnBob25le1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5tZXNzYWdle1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcblxyXG4gICAgLm5vRGF0YXtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 90115:
/*!******************************************************************!*\
  !*** ./src/app/list-property/list-property.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg-color\">\r\n    <ion-title>List Property</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isPageReady\">\r\n  <div *ngIf=\"propertyList?.length > 0; else noData\">\r\n  <ng-container *ngFor=\"let list of propertyList\">\r\n  <div lines=\"none\" class=\"property-list\" (click)=\"propertyDetails(list.Id, list.Latitude, list.Longitude)\">\r\n    <span class=\"pro-img\">\r\n      <img alt=\"property image missing\" src=\"../../assets/images/propertyImg.PNG\" />\r\n    </span>\r\n    <span class=\"pro-text\">\r\n    <h4>{{list.Name}}</h4>\r\n    <h6>{{list.Locality}}, {{list.State}}</h6>\r\n    <span class=\"bottom-button\">\r\n       <a href=\"tel:{{list.UserMobile}}\"><fa-icon  [icon]=\"faPhone\" class=\"phone\"></fa-icon></a>\r\n       <a routerLink=\"/messages/send-message\"><fa-icon [icon]=\"faMessage\" class=\"message\"></fa-icon></a>\r\n    </span>\r\n  </span>\r\n  </div>\r\n</ng-container>\r\n</div>\r\n<ng-template #noData style=\"color: #000;\"><span class=\"noData\"> No data found</span></ng-template>\r\n</ion-content>\r\n\r\n\r\n  <ion-spinner class=\"loader\" *ngIf=\"!showSpinner\" name=\"lines-sharp\"></ion-spinner>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_list-property_list-property_module_ts.js.map