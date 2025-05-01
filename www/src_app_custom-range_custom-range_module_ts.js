"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_custom-range_custom-range_module_ts"],{

/***/ 98387:
/*!*************************************************************!*\
  !*** ./src/app/custom-range/custom-range-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRangePageRoutingModule": () => (/* binding */ CustomRangePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _custom_range_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-range.page */ 56974);




const routes = [
    {
        path: '',
        component: _custom_range_page__WEBPACK_IMPORTED_MODULE_0__.CustomRangePage
    }
];
let CustomRangePageRoutingModule = class CustomRangePageRoutingModule {
};
CustomRangePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomRangePageRoutingModule);



/***/ }),

/***/ 95574:
/*!*****************************************************!*\
  !*** ./src/app/custom-range/custom-range.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRangePageModule": () => (/* binding */ CustomRangePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _custom_range_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-range-routing.module */ 98387);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);







// import { CustomRangePage } from './custom-range.page';
let CustomRangePageModule = class CustomRangePageModule {
};
CustomRangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _custom_range_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomRangePageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule
        ],
        declarations: []
    })
], CustomRangePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_custom-range_custom-range_module_ts.js.map