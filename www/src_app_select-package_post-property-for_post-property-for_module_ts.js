"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-package_post-property-for_post-property-for_module_ts"],{

/***/ 60530:
/*!**************************************************************************************!*\
  !*** ./src/app/select-package/post-property-for/post-property-for-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPropertyForPageRoutingModule": () => (/* binding */ PostPropertyForPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _post_property_for_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-property-for.page */ 66474);




const routes = [
    {
        path: '',
        component: _post_property_for_page__WEBPACK_IMPORTED_MODULE_0__.PostPropertyForPage
    }
];
let PostPropertyForPageRoutingModule = class PostPropertyForPageRoutingModule {
};
PostPropertyForPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostPropertyForPageRoutingModule);



/***/ }),

/***/ 59221:
/*!******************************************************************************!*\
  !*** ./src/app/select-package/post-property-for/post-property-for.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPropertyForPageModule": () => (/* binding */ PostPropertyForPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _post_property_for_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-property-for-routing.module */ 60530);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _post_property_for_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-property-for.page */ 66474);








let PostPropertyForPageModule = class PostPropertyForPageModule {
};
PostPropertyForPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _post_property_for_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostPropertyForPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_post_property_for_page__WEBPACK_IMPORTED_MODULE_1__.PostPropertyForPage]
    })
], PostPropertyForPageModule);



/***/ }),

/***/ 66474:
/*!****************************************************************************!*\
  !*** ./src/app/select-package/post-property-for/post-property-for.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPropertyForPage": () => (/* binding */ PostPropertyForPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _post_property_for_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-property-for.page.html?ngResource */ 24068);
/* harmony import */ var _post_property_for_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-property-for.page.scss?ngResource */ 88048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);






let PostPropertyForPage = class PostPropertyForPage {
    constructor(_router) {
        this._router = _router;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowLeft;
    }
    ngOnInit() {
    }
    sellProperty(data) {
        // console.log(data)
        this._router.navigate(['/select-package/property-type-list', { id: data }]);
    }
    rentProperty(data) {
        //   console.log(data)
        this._router.navigate(['/select-package/property-type-list', { id: data }]);
    }
};
PostPropertyForPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PostPropertyForPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-post-property-for',
        template: _post_property_for_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_post_property_for_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostPropertyForPage);



/***/ }),

/***/ 88048:
/*!*****************************************************************************************!*\
  !*** ./src/app/select-package/post-property-for/post-property-for.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".property-bg {\n  background: url('placeholder-01.png');\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  background-size: contain;\n  background-color: #fff;\n}\n.property-bg fa-icon {\n  font-size: 24px;\n  font-weight: 900;\n  margin-left: 20px;\n  margin-top: 20px;\n  display: inline-block;\n  color: #000;\n}\n.property-bg div {\n  color: #000;\n  text-align: center;\n  border-bottom: solid 2px #e3e3e3;\n  width: 88%;\n  padding-bottom: 20px;\n  margin: 30px auto 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.property-bg div span {\n  color: red;\n}\n.property-bg .property-image {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.property-bg .property-image img {\n  height: 200px;\n}\n.property-bg .property-image span {\n  color: #000;\n  margin-top: 15px;\n}\n.property-bg .property-btn {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 15px;\n}\n.property-bg .property-btn .buy {\n  width: 120px;\n  height: 40px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n.property-bg .property-btn .rent {\n  width: 120px;\n  height: 40px;\n  margin-left: 20px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcHJvcGVydHktZm9yLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdmVlbiUyMGt1bWFyJTIwa2F0aXlhclxcT25lRHJpdmVcXERlc2t0b3BcXGh1bnRuZXdcXGh1bnRwcm9wZXJ0eW5ld1xcc3JjXFxhcHBcXHNlbGVjdC1wYWNrYWdlXFxwb3N0LXByb3BlcnR5LWZvclxccG9zdC1wcm9wZXJ0eS1mb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ0NEO0FEQUM7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDRUo7QURBQztFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0ksVUFBQTtBQ0dSO0FEQUM7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRUo7QUREUTtFQUNBLGFBQUE7QUNHUjtBRERJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDR1I7QURBQztFQUNHLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDR1I7QURESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDR1IiLCJmaWxlIjoicG9zdC1wcm9wZXJ0eS1mb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWJne1xyXG4gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLTAxLnBuZycpOyBcclxuIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gZmEtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuIH1cclxuIGRpdntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNlM2UzZTM7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuIH1cclxuIC5wcm9wZXJ0eS1pbWFnZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuIH1cclxuIC5wcm9wZXJ0eS1idG57XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLmJ1eXtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDojZTNlM2UzO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICAucmVudHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7IFxyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2UzZTNlMztcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiB9XHJcbn0iLCIucHJvcGVydHktYmcge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLTAxLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucHJvcGVydHktYmcgZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMwMDA7XG59XG4ucHJvcGVydHktYmcgZGl2IHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNlM2UzZTM7XG4gIHdpZHRoOiA4OCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvcGVydHktYmcgZGl2IHNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuLnByb3BlcnR5LWJnIC5wcm9wZXJ0eS1pbWFnZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJvcGVydHktYmcgLnByb3BlcnR5LWltYWdlIGltZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ucHJvcGVydHktYmcgLnByb3BlcnR5LWltYWdlIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9wZXJ0eS1iZyAucHJvcGVydHktYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9wZXJ0eS1iZyAucHJvcGVydHktYnRuIC5idXkge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiNlM2UzZTM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucHJvcGVydHktYmcgLnByb3BlcnR5LWJ0biAucmVudCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiNlM2UzZTM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */";

/***/ }),

/***/ 24068:
/*!*****************************************************************************************!*\
  !*** ./src/app/select-package/post-property-for/post-property-for.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"login-bg property-bg\">\r\n          <fa-icon [icon]=\"faArrowLeft\" routerLink=\"/splash/tabs/home\"></fa-icon>\r\n          <div>\r\n            A <span>few questioan</span> to get you started\r\n          </div>\r\n          <div class=\"property-image\">\r\n            <img src=\"../../../assets/images/icons/svg/building.svg\" alt=\"image missing\">\r\n\r\n            <span>Posting Property For:</span>\r\n            <div class=\"property-btn\">\r\n              <ion-button class=\"buy\" (click)=\"sellProperty('sell')\">Sell</ion-button>\r\n              <ion-button class=\"rent\" (click)=\"rentProperty('Rent')\">Rent</ion-button>\r\n            </div>\r\n          </div>\r\n          <!-- <ion-button class=\"next-btn\" routerLink=\"/select-package/post-property-for\">Next</ion-button> -->\r\n          </div>\r\n          \r\n  \r\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_select-package_post-property-for_post-property-for_module_ts.js.map