"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_list-property_list-property_module_ts"],{

/***/ 73564:
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
/* harmony import */ var _list_property_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-property.page */ 33100);




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

/***/ 40527:
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
/* harmony import */ var _list_property_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-property-routing.module */ 73564);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _list_property_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-property.page */ 33100);








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

/***/ 33100:
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
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ 42735);







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
            console.log(data);
            let parseData = JSON.parse(data.residential);
            console.log('listing', parseData);
            this.searchParams = parseData;
            // this.searchParams.PropertyFor = 'Sell';
            console.log('listing', this.searchParams);
            this._main.getPropertyList(this.searchParams).then((data) => {
                let getData = JSON.parse(data.data);
                this.propertyList = getData.data;
                this.showSpinner = true;
                this.isPageReady = true;
                console.log('serch', this.propertyList);
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

module.exports = ".property-list {\n  background: #fff;\n  display: flex;\n  max-height: 130px;\n  margin-bottom: 15px;\n}\n.property-list .pro-img {\n  width: 30%;\n}\n.property-list .pro-img img {\n  width: 100%;\n}\n.property-list .pro-text {\n  width: 70%;\n  padding-left: 20px;\n}\n.property-list .pro-text h4 {\n  color: #000;\n  margin: 10px 0 25px 0;\n  font-size: 16px;\n}\n.property-list .pro-text h6 {\n  color: #aaaaaa;\n  margin: 0;\n  font-size: 14px;\n}\n.property-list .pro-text .bottom-button {\n  margin-top: 6px;\n  display: flex;\n  text-align: center;\n}\n.property-list .pro-text .bottom-button a {\n  display: flex;\n}\n.property-list .pro-text .bottom-button a .phone {\n  width: 40px;\n  height: 40px;\n  background: red;\n  padding: 10px;\n  color: #ffff;\n  border-radius: 50%;\n}\n.property-list .pro-text .bottom-button a {\n  display: flex;\n}\n.property-list .pro-text .bottom-button a .message {\n  width: 40px;\n  height: 40px;\n  background: red;\n  padding: 10px;\n  color: #ffff;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n.noData {\n  color: #000;\n  font-size: 24px;\n  text-align: center;\n  margin-top: 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcHJvcGVydHkucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZlZW4lMjBrdW1hciUyMGthdGl5YXJcXE9uZURyaXZlXFxEZXNrdG9wXFxodW50bmV3XFxodW50cHJvcGVydHluZXdcXHNyY1xcYXBwXFxsaXN0LXByb3BlcnR5XFxsaXN0LXByb3BlcnR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksVUFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0FDR1o7QURBSTtFQUNHLFVBQUE7RUFDQSxrQkFBQTtBQ0VQO0FEREk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDR1I7QURESTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0dSO0FEREk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR1I7QURGUTtFQUNJLGFBQUE7QUNJWjtBREhRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0taO0FERkk7RUFDSSxhQUFBO0FDSVI7QURIUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0taO0FERUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1IiLCJmaWxlIjoibGlzdC1wcm9wZXJ0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktbGlzdHtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAucHJvLWltZ3tcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByby10ZXh0e1xyXG4gICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGg0e1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjVweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIGg2e1xyXG4gICAgICAgIGNvbG9yOiNhYWFhYWE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5ib3R0b20tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5waG9uZXtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAubWVzc2FnZXtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuICAgIC5ub0RhdGF7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuIiwiLnByb3BlcnR5LWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5wcm9wZXJ0eS1saXN0IC5wcm8taW1nIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5wcm9wZXJ0eS1saXN0IC5wcm8taW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb3BlcnR5LWxpc3QgLnByby10ZXh0IHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnByb3BlcnR5LWxpc3QgLnByby10ZXh0IGg0IHtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbjogMTBweCAwIDI1cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnByb3BlcnR5LWxpc3QgLnByby10ZXh0IGg2IHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb3BlcnR5LWxpc3QgLnByby10ZXh0IC5ib3R0b20tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvcGVydHktbGlzdCAucHJvLXRleHQgLmJvdHRvbS1idXR0b24gYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvcGVydHktbGlzdCAucHJvLXRleHQgLmJvdHRvbS1idXR0b24gYSAucGhvbmUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnByb3BlcnR5LWxpc3QgLnByby10ZXh0IC5ib3R0b20tYnV0dG9uIGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb3BlcnR5LWxpc3QgLnByby10ZXh0IC5ib3R0b20tYnV0dG9uIGEgLm1lc3NhZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5vRGF0YSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";

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