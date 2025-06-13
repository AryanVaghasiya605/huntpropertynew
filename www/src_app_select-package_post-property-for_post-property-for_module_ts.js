"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-package_post-property-for_post-property-for_module_ts"],{

/***/ 73157:
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
/* harmony import */ var _post_property_for_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-property-for.page */ 43263);




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

/***/ 39969:
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
/* harmony import */ var _post_property_for_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-property-for-routing.module */ 73157);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _post_property_for_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-property-for.page */ 43263);








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

/***/ 43263:
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

module.exports = ".property-bg {\n  background: url('placeholder-01.png');\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  background-size: contain;\n  background-color: #fff;\n}\n.property-bg fa-icon {\n  font-size: 24px;\n  font-weight: 900;\n  margin-left: 20px;\n  margin-top: 20px;\n  display: inline-block;\n  color: #000;\n}\n.property-bg div {\n  color: #000;\n  text-align: center;\n  border-bottom: solid 2px #e3e3e3;\n  width: 88%;\n  padding-bottom: 20px;\n  margin: 30px auto 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.property-bg div span {\n  color: red;\n}\n.property-bg .property-image {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.property-bg .property-image img {\n  height: 200px;\n}\n.property-bg .property-image span {\n  color: #000;\n  margin-top: 15px;\n}\n.property-bg .property-btn {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 15px;\n}\n.property-bg .property-btn .buy {\n  width: 120px;\n  height: 40px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n.property-bg .property-btn .rent {\n  width: 120px;\n  height: 40px;\n  margin-left: 20px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcHJvcGVydHktZm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFDRDtBQUFDO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUM7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFESTtFQUNJLFVBQUE7QUFHUjtBQUFDO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUVKO0FBRFE7RUFDQSxhQUFBO0FBR1I7QUFESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUdSO0FBQUM7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUdSO0FBREk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUdSIiwiZmlsZSI6InBvc3QtcHJvcGVydHktZm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eS1iZ3tcclxuIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci0wMS5wbmcnKTsgXHJcbiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIGZhLWljb257XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiB9XHJcbiBkaXZ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZTNlM2UzO1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiB9XHJcbiAucHJvcGVydHktaW1hZ2V7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiB9XHJcbiAucHJvcGVydHktYnRue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC5idXl7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2UzZTNlMztcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgLnJlbnR7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4OyBcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNlM2UzZTM7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gfVxyXG59Il19 */";

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