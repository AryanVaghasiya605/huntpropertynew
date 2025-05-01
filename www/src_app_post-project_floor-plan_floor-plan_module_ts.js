"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_post-project_floor-plan_floor-plan_module_ts"],{

/***/ 23826:
/*!**********************************************************************!*\
  !*** ./src/app/post-project/floor-plan/floor-plan-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloorPlanPageRoutingModule": () => (/* binding */ FloorPlanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _floor_plan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floor-plan.page */ 19851);




const routes = [
    {
        path: '',
        component: _floor_plan_page__WEBPACK_IMPORTED_MODULE_0__.FloorPlanPage
    }
];
let FloorPlanPageRoutingModule = class FloorPlanPageRoutingModule {
};
FloorPlanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FloorPlanPageRoutingModule);



/***/ }),

/***/ 95286:
/*!**************************************************************!*\
  !*** ./src/app/post-project/floor-plan/floor-plan.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloorPlanPageModule": () => (/* binding */ FloorPlanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _floor_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floor-plan-routing.module */ 23826);






// import { FloorPlanPage } from './floor-plan.page';
let FloorPlanPageModule = class FloorPlanPageModule {
};
FloorPlanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _floor_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__.FloorPlanPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ],
        declarations: []
    })
], FloorPlanPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_post-project_floor-plan_floor-plan_module_ts.js.map