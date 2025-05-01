"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rental-value-calculator_rental-value-calculator_module_ts"],{

/***/ 92960:
/*!***********************************************************************************!*\
  !*** ./src/app/rental-value-calculator/rental-value-calculator-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentalValueCalculatorPageRoutingModule": () => (/* binding */ RentalValueCalculatorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rental_value_calculator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rental-value-calculator.page */ 62409);




const routes = [
    {
        path: '',
        component: _rental_value_calculator_page__WEBPACK_IMPORTED_MODULE_0__.RentalValueCalculatorPage
    }
];
let RentalValueCalculatorPageRoutingModule = class RentalValueCalculatorPageRoutingModule {
};
RentalValueCalculatorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RentalValueCalculatorPageRoutingModule);



/***/ }),

/***/ 37295:
/*!***************************************************************************!*\
  !*** ./src/app/rental-value-calculator/rental-value-calculator.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentalValueCalculatorPageModule": () => (/* binding */ RentalValueCalculatorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _rental_value_calculator_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rental-value-calculator-routing.module */ 92960);
/* harmony import */ var _rental_value_calculator_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rental-value-calculator.page */ 62409);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);








let RentalValueCalculatorPageModule = class RentalValueCalculatorPageModule {
};
RentalValueCalculatorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rental_value_calculator_routing_module__WEBPACK_IMPORTED_MODULE_0__.RentalValueCalculatorPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_rental_value_calculator_page__WEBPACK_IMPORTED_MODULE_1__.RentalValueCalculatorPage]
    })
], RentalValueCalculatorPageModule);



/***/ }),

/***/ 62409:
/*!*************************************************************************!*\
  !*** ./src/app/rental-value-calculator/rental-value-calculator.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentalValueCalculatorPage": () => (/* binding */ RentalValueCalculatorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _rental_value_calculator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rental-value-calculator.page.html?ngResource */ 90168);
/* harmony import */ var _rental_value_calculator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rental-value-calculator.page.scss?ngResource */ 17766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/calculator.service */ 75849);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ 42735);








let RentalValueCalculatorPage = class RentalValueCalculatorPage {
    constructor(calSvc, _mainSVC) {
        this.calSvc = calSvc;
        this._mainSVC = _mainSVC;
        this.faPercent = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPercent;
        this.faIndianRupeeSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faIndianRupeeSign;
        this.pattern = '^[0-9]*$';
        this.rentalValueCalculator = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            propertyvalue: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('25000', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]*$')]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('10', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]*$')]),
            rentrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('10', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
    }
    ngOnInit() {
    }
    getAssociateList() {
        //console.log('data');
        this._mainSVC.getAssociate().then((data) => {
            //    console.log('data', data);
        });
    }
    onSubmit() {
        this.getAssociateList();
        this.calSvc.rentalValueCal(this.rentalValueCalculator.value).then((data) => {
            //     console.log('dataRecieved', JSON.parse(data.data));
            let parseData = JSON.parse(data.data);
            this.calculatedRental = parseData.Result;
            //    console.log('dataRecieved',  this.calculatedRental);
        });
    }
    resetSubmitForm() {
        this.rentalValueCalculator.reset();
    }
};
RentalValueCalculatorPage.ctorParameters = () => [
    { type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_2__.CalculatorService },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__.MainService }
];
RentalValueCalculatorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-rental-value-calculator',
        template: _rental_value_calculator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rental_value_calculator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RentalValueCalculatorPage);



/***/ }),

/***/ 17766:
/*!**************************************************************************************!*\
  !*** ./src/app/rental-value-calculator/rental-value-calculator.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  display: inline-block;\n}\nion-content {\n  --background:#ffffff;\n  --padding-top:50px;\n}\nion-content .web_error {\n  color: #e14b4c;\n  display: flex;\n  align-items: end;\n  justify-content: end;\n  margin-top: -10px;\n  font-size: 12px;\n  margin-right: 15px;\n}\nion-content .loan-item {\n  margin-bottom: 9px;\n  --background:#ffffff;\n  padding: 0;\n  --min-height:40px;\n}\nion-content .loan-item .loan-left-wrapper {\n  width: 50%;\n  text-align: end;\n}\nion-content .loan-item .loan-left-wrapper label {\n  color: #6a6a6a;\n  font-size: 12px;\n}\nion-content .loan-item .loan-left-wrapper fa-icon {\n  color: #6a6a6a;\n  font-size: 12px;\n  margin-left: 5px;\n}\nion-content .loan-item ion-input[type=text] {\n  --background: #ffffff;\n  border: solid 1px #e1e1e1;\n  margin-left: 20px;\n  border-radius: 5px;\n  --padding-start: 15px;\n  color: #6a6a6a;\n}\nion-content .loan-item ion-input[type=number] {\n  --background: #ffffff;\n  border: solid 1px #e1e1e1;\n  margin-left: 20px;\n  border-radius: 5px;\n  --padding-start: 15px;\n  color: #6a6a6a;\n}\nion-content .loan-submit-btn {\n  margin: 30px auto 0 auto;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 0;\n  height: 55px;\n}\nion-content .reset-btn {\n  margin: auto;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 0;\n  z-index: 9;\n  height: 55px;\n  left: 0;\n  right: 0;\n}\nion-content .red-border {\n  border: solid 1px #e5002d;\n  width: 80%;\n  display: flex;\n  margin: 34px auto 20px auto;\n}\nion-content .result {\n  color: #000000;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbnRhbC12YWx1ZS1jYWxjdWxhdG9yLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2ZWVuJTIwa3VtYXIlMjBrYXRpeWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcaHVudG5ld1xcaHVudHByb3BlcnR5bmV3XFxzcmNcXGFwcFxccmVudGFsLXZhbHVlLWNhbGN1bGF0b3JcXHJlbnRhbC12YWx1ZS1jYWxjdWxhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjtBREFBO0VBQVcsY0FBQTtFQUFnQixlQUFBO0FDSTNCO0FESEE7RUFDSSxxQkFBQTtBQ0tKO0FERkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDS0o7QURKSTtFQUFZLGNBQUE7RUFDUixhQUFBO0VBQ0EsZ0JBQUE7RUFDSixvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDT0o7QUROQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNRSjtBRFBJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNTUjtBRFJZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNVaEI7QURSWTtFQUFTLGNBQUE7RUFBZSxlQUFBO0VBQWlCLGdCQUFBO0FDYXJEO0FEWEc7RUFDSyxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ2FSO0FEWEk7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ2FSO0FEVEE7RUFDSSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1dKO0FEVEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDV0o7QURUQTtFQUFhLHlCQUFBO0VBQTJCLFVBQUE7RUFBVyxhQUFBO0VBQWMsMkJBQUE7QUNlakU7QURkQTtFQUFRLGNBQUE7RUFDSixjQUFBO0VBQ0Esa0JBQUE7QUNpQkoiLCJmaWxlIjoicmVudGFsLXZhbHVlLWNhbGN1bGF0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZy1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojZTE0YjRjOyAgICBcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuLmJhY2stYnRueyBjb2xvcjogI2ZmZmZmZjsgZm9udC1zaXplOiAyNXB4O31cclxuLmhlYWRlci10aXRsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICAtLXBhZGRpbmctdG9wOjUwcHg7XHJcbiAgICAud2ViX2Vycm9yeyBjb2xvcjojZTE0YjRjO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7ICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O30gXHJcbi5sb2FuLWl0ZW17XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NDBweDtcclxuICAgIC5sb2FuLWxlZnQtd3JhcHBlcntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmYS1pY29ueyBjb2xvcjogIzZhNmE2YTtmb250LXNpemU6IDEycHg7IG1hcmdpbi1sZWZ0OiA1cHg7fVxyXG4gICAgfVxyXG4gICBpb24taW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlMWUxZTE7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIH0gXHJcbiAgICBpb24taW5wdXRbdHlwZT1cIm51bWJlclwiXXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTFlMTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgfSAgICBcclxuXHJcbn1cclxuLmxvYW4tc3VibWl0LWJ0bntcclxuICAgIG1hcmdpbjozMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuLnJlc2V0LWJ0bntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwOyAgIFxyXG4gICAgei1pbmRleDogOTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMFxyXG59XHJcbi5yZWQtYm9yZGVyeyBib3JkZXI6IHNvbGlkIDFweCAjZTUwMDJkOyB3aWR0aDo4MCU7IGRpc3BsYXk6IGZsZXg7bWFyZ2luOiAzNHB4IGF1dG8gMjBweCBhdXRvO31cclxuLnJlc3VsdHtjb2xvcjogIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbn0iLCIuaGVhZGVyLWJnLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiNlMTRiNGM7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbn1cbi5oZWFkZXItYmctY29sb3IgLmJhY2stYnRuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5oZWFkZXItYmctY29sb3IgLmhlYWRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1wYWRkaW5nLXRvcDo1MHB4O1xufVxuaW9uLWNvbnRlbnQgLndlYl9lcnJvciB7XG4gIGNvbG9yOiAjZTE0YjRjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmxvYW4taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIHBhZGRpbmc6IDA7XG4gIC0tbWluLWhlaWdodDo0MHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvYW4taXRlbSAubG9hbi1sZWZ0LXdyYXBwZXIge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5pb24tY29udGVudCAubG9hbi1pdGVtIC5sb2FuLWxlZnQtd3JhcHBlciBsYWJlbCB7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAubG9hbi1pdGVtIC5sb2FuLWxlZnQtd3JhcHBlciBmYS1pY29uIHtcbiAgY29sb3I6ICM2YTZhNmE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmlvbi1jb250ZW50IC5sb2FuLWl0ZW0gaW9uLWlucHV0W3R5cGU9dGV4dF0ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMWUxZTE7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgY29sb3I6ICM2YTZhNmE7XG59XG5pb24tY29udGVudCAubG9hbi1pdGVtIGlvbi1pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMWUxZTE7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgY29sb3I6ICM2YTZhNmE7XG59XG5pb24tY29udGVudCAubG9hbi1zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDU1cHg7XG59XG5pb24tY29udGVudCAucmVzZXQtYnRuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICB6LWluZGV4OiA5O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuaW9uLWNvbnRlbnQgLnJlZC1ib3JkZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTUwMDJkO1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDM0cHggYXV0byAyMHB4IGF1dG87XG59XG5pb24tY29udGVudCAucmVzdWx0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 90168:
/*!**************************************************************************************!*\
  !*** ./src/app/rental-value-calculator/rental-value-calculator.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon routerLink=\"/splash/tabs/home\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title class=\"header-title\">Rental Value calculator</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"rentalValueCalculator\" (ngSubmit)=\"onSubmit()\"> \r\n<div class=\"item-wrapper\">\r\n    <ion-item class=\"loan-item\" lines=\"none\">\r\n      <span class=\"loan-left-wrapper\">\r\n    <label for=\"first-name\">Property Value: </label>\r\n    <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n  </span>  \r\n    <ion-input inputmode=\"numeric\" type=\"number\"  formControlName=\"propertyvalue\"></ion-input>    \r\n  </ion-item>\r\n  <div  class=\"web_error\" *ngIf=\"rentalValueCalculator.controls['propertyvalue'].invalid && (rentalValueCalculator.controls['propertyvalue'].dirty || rentalValueCalculator.controls['propertyvalue'].touched)\" >\r\n    <div *ngIf=\"rentalValueCalculator.controls['propertyvalue'].errors.required\">*Property Value is required</div>\r\n    <div *ngIf=\"rentalValueCalculator.controls['propertyvalue'].errors.pattern \">* Only numbers are allowed</div>      \r\n</div>\r\n</div>\r\n  <div class=\"item-wrapper\">\r\n  <ion-item class=\"loan-item\" lines=\"none\">    \r\n    <span class=\"loan-left-wrapper\">\r\n    <label for=\"last-name\">No. of years</label>    \r\n  </span>\r\n    <ion-input inputmode=\"numeric\" type=\"number\" formControlName=\"year\"></ion-input>\r\n  </ion-item>\r\n  <div  class=\"web_error\" *ngIf=\"rentalValueCalculator.controls['year'].invalid && (rentalValueCalculator.controls['year'].dirty || rentalValueCalculator.controls['year'].touched)\" >\r\n    <div *ngIf=\"rentalValueCalculator.controls['year'].errors.required\">*Numbers of Years is required</div>\r\n    <div *ngIf=\"rentalValueCalculator.controls['year'].errors.pattern \">* Only numbers are allowed</div>      \r\n</div> \r\n</div>\r\n\r\n<div class=\"item-wrapper\">\r\n  <ion-item class=\"loan-item\" lines=\"none\">\r\n    <span class=\"loan-left-wrapper\">\r\n    <label for=\"last-name\">Rate of rent</label>\r\n    <fa-icon  [icon]=\"faPercent\"></fa-icon>\r\n  </span>\r\n    <ion-input inputmode=\"numeric\" type=\"number\" formControlName=\"rentrate\"></ion-input>\r\n  </ion-item> \r\n  <div  class=\"web_error\" *ngIf=\"rentalValueCalculator.controls['rentrate'].invalid && (rentalValueCalculator.controls['rentrate'].dirty || rentalValueCalculator.controls['rentrate'].touched)\" >\r\n    <div *ngIf=\"rentalValueCalculator.controls['rentrate'].errors.required\">*Rate of interest is required</div> \r\n  </div>\r\n</div>\r\n<ion-button class=\"loan-submit-btn\" type=\"submit\" [disabled]=\"!rentalValueCalculator.valid\">Submit</ion-button>\r\n  </form>  \r\n  \r\n  <ion-button class=\"reset-btn\" fill=\"clear\" type=\"submit\" (click)=\"resetSubmitForm()\">Reset all fields</ion-button>\r\n  <span class=\"red-border\"></span>\r\n  <Span class=\"result\" *ngIf=\"calculatedRental\">Result: {{calculatedRental}}</Span>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_rental-value-calculator_rental-value-calculator_module_ts.js.map