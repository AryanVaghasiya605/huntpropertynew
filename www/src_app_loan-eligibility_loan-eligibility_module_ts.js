"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loan-eligibility_loan-eligibility_module_ts"],{

/***/ 52435:
/*!******************************************************!*\
  !*** ./src/app/directives/IntegerInput.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrictNumberOnlyDirective": () => (/* binding */ StrictNumberOnlyDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let StrictNumberOnlyDirective = class StrictNumberOnlyDirective {
    constructor() { }
    onKeyDown(event) {
        var key = event.charCode ? event.charCode : event.keyCode;
        //console.log(event.key)
        const pattern = /[0-9]/; // without ., for integer only
        let inputChar = String.fromCharCode(event.which ? event.which : event.keyCode);
        // if(event.key == 'Unidentified'){
        //     event.preventDefault();
        //     return false;
        // }
        if (!pattern.test(inputChar) && event.key === 'Unidentified') {
            // console.log('inputChar', inputChar)
            // invalid character, prevent input
            event.preventDefault();
            return false;
        }
        return true;
    }
};
StrictNumberOnlyDirective.ctorParameters = () => [];
StrictNumberOnlyDirective.propDecorators = {
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }]
};
StrictNumberOnlyDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[NumberOnly]'
    })
], StrictNumberOnlyDirective);



/***/ }),

/***/ 68284:
/*!*********************************************************************!*\
  !*** ./src/app/loan-eligibility/loan-eligibility-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanEligibilityPageRoutingModule": () => (/* binding */ LoanEligibilityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_eligibility_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-eligibility.page */ 21525);




const routes = [
    {
        path: '',
        component: _loan_eligibility_page__WEBPACK_IMPORTED_MODULE_0__.LoanEligibilityPage
    }
];
let LoanEligibilityPageRoutingModule = class LoanEligibilityPageRoutingModule {
};
LoanEligibilityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanEligibilityPageRoutingModule);



/***/ }),

/***/ 63297:
/*!*************************************************************!*\
  !*** ./src/app/loan-eligibility/loan-eligibility.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanEligibilityPageModule": () => (/* binding */ LoanEligibilityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_eligibility_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-eligibility-routing.module */ 68284);
/* harmony import */ var _loan_eligibility_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-eligibility.page */ 21525);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _directives_IntegerInput_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/IntegerInput.directive */ 52435);









let LoanEligibilityPageModule = class LoanEligibilityPageModule {
};
LoanEligibilityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _loan_eligibility_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanEligibilityPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule
        ],
        declarations: [_loan_eligibility_page__WEBPACK_IMPORTED_MODULE_1__.LoanEligibilityPage, _directives_IntegerInput_directive__WEBPACK_IMPORTED_MODULE_2__.StrictNumberOnlyDirective]
    })
], LoanEligibilityPageModule);



/***/ }),

/***/ 21525:
/*!***********************************************************!*\
  !*** ./src/app/loan-eligibility/loan-eligibility.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanEligibilityPage": () => (/* binding */ LoanEligibilityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_eligibility_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-eligibility.page.html?ngResource */ 63644);
/* harmony import */ var _loan_eligibility_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-eligibility.page.scss?ngResource */ 91403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/calculator.service */ 4975);







let LoanEligibilityPage = class LoanEligibilityPage {
    constructor(calSvc) {
        this.calSvc = calSvc;
        this.faPercent = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPercent;
        this.faIndianRupeeSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faIndianRupeeSign;
        this.pattern = '^[0-9]*$';
        this.loanElegibility = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            LoanAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('500000', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]*$')]),
            NetIncome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('30000', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]*$')]),
            ExistingEMI: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]*$')]),
            LoanTenure: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('10', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]*$')]),
            InterestRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('10', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        // console.log(this.loanElegibility.value);
        this.calSvc.LoanCalculator(this.loanElegibility.value)
            .then((data) => {
            let parseData = JSON.parse(data.data);
            // console.log('data', parseData);
            this.loanEle = parseData;
            if (parseData.status === true) {
                this.LoanAmount = parseData.LoanAmount;
                this.monthlyEMI = parseData.EMILoan;
                this.EligibleEmi = parseData.EligibleEmi;
                this.maxLoan = parseData.EligibleLoan;
            }
        });
    }
    resetSubmitForm() {
        this.loanElegibility.reset();
    }
};
LoanEligibilityPage.ctorParameters = () => [
    { type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_2__.CalculatorService }
];
LoanEligibilityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-loan-eligibility',
        template: _loan_eligibility_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_eligibility_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanEligibilityPage);



/***/ }),

/***/ 91403:
/*!************************************************************************!*\
  !*** ./src/app/loan-eligibility/loan-eligibility.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  display: inline-block;\n}\nion-content {\n  --background:#ffffff;\n  --padding-top:50px;\n}\nion-content .web_error {\n  color: #e14b4c;\n  display: flex;\n  align-items: end;\n  justify-content: end;\n  margin-top: -10px;\n  font-size: 12px;\n  margin-right: 15px;\n}\nion-content .loan-item {\n  margin-bottom: 9px;\n  --background:#ffffff;\n  padding: 0;\n  --min-height:40px;\n}\nion-content .loan-item .loan-left-wrapper {\n  width: 50%;\n  text-align: end;\n}\nion-content .loan-item .loan-left-wrapper label {\n  color: #6a6a6a;\n  font-size: 12px;\n}\nion-content .loan-item .loan-left-wrapper fa-icon {\n  color: #6a6a6a;\n  font-size: 12px;\n  margin-left: 5px;\n}\nion-content .loan-item ion-input[type=text] {\n  --background: #ffffff;\n  border: solid 1px #e1e1e1;\n  margin-left: 20px;\n  border-radius: 5px;\n  --padding-start: 15px;\n  color: #6a6a6a;\n}\nion-content .loan-item ion-input[type=number] {\n  --background: #ffffff;\n  border: solid 1px #e1e1e1;\n  margin-left: 20px;\n  border-radius: 5px;\n  --padding-start: 15px;\n  color: #6a6a6a;\n}\nion-content .loan-submit-btn {\n  margin: auto;\n  width: 65%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 0;\n  height: 55px;\n}\nion-content .reset-btn {\n  margin: auto;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 0;\n  z-index: 9;\n  height: 55px;\n  left: 0;\n  right: 0;\n}\nion-content .red-border {\n  border: solid 2px #e5002d;\n  width: 80%;\n  display: flex;\n  margin: 34px auto 20px auto;\n}\n.res {\n  color: #000;\n  width: 80%;\n  margin: 0 auto;\n  display: block;\n}\n.resultLoanEle {\n  color: #000;\n  text-align: center;\n  font-size: 15px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tZWxpZ2liaWxpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQUE7RUFBVyxjQUFBO0VBQWdCLGVBQUE7QUFJM0I7QUFIQTtFQUNJLHFCQUFBO0FBS0o7QUFGQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUpJO0VBQVksY0FBQTtFQUNSLGFBQUE7RUFDQSxnQkFBQTtFQUNKLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQU5BO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVFKO0FBUEk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQVNSO0FBUlk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVVoQjtBQVJZO0VBQVMsY0FBQTtFQUFlLGVBQUE7RUFBaUIsZ0JBQUE7QUFhckQ7QUFYRztFQUNLLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBYVI7QUFYSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBYVI7QUFUQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFXSjtBQVRBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQVdKO0FBVEE7RUFBYSx5QkFBQTtFQUEyQixVQUFBO0VBQVcsYUFBQTtFQUFjLDJCQUFBO0FBZWpFO0FBYkE7RUFBTSxXQUFBO0VBQVksVUFBQTtFQUNkLGNBQUE7RUFDQSxjQUFBO0FBa0JKO0FBakJBO0VBQWdCLFdBQUE7RUFBYSxrQkFBQTtFQUFtQixlQUFBO0VBQzVDLGlCQUFBO0FBdUJKIiwiZmlsZSI6ImxvYW4tZWxpZ2liaWxpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZy1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojZTE0YjRjOyAgICBcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuLmJhY2stYnRueyBjb2xvcjogI2ZmZmZmZjsgZm9udC1zaXplOiAyNXB4O31cclxuLmhlYWRlci10aXRsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICAtLXBhZGRpbmctdG9wOjUwcHg7XHJcbiAgICAud2ViX2Vycm9yeyBjb2xvcjojZTE0YjRjO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7ICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O30gXHJcbi5sb2FuLWl0ZW17XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NDBweDtcclxuICAgIC5sb2FuLWxlZnQtd3JhcHBlcntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmYS1pY29ueyBjb2xvcjogIzZhNmE2YTtmb250LXNpemU6IDEycHg7IG1hcmdpbi1sZWZ0OiA1cHg7fVxyXG4gICAgfVxyXG4gICBpb24taW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlMWUxZTE7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIH0gXHJcbiAgICBpb24taW5wdXRbdHlwZT1cIm51bWJlclwiXXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTFlMTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgfSAgICBcclxuXHJcbn1cclxuLmxvYW4tc3VibWl0LWJ0bntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcbi5yZXNldC1idG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMDsgICBcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDBcclxufVxyXG4ucmVkLWJvcmRlcnsgYm9yZGVyOiBzb2xpZCAycHggI2U1MDAyZDsgd2lkdGg6ODAlOyBkaXNwbGF5OiBmbGV4O21hcmdpbjogMzRweCBhdXRvIDIwcHggYXV0bzt9XHJcbn1cclxuLnJlc3sgY29sb3I6ICMwMDA7d2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7fVxyXG4ucmVzdWx0TG9hbkVsZXsgY29sb3I6ICMwMDA7IHRleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDt9Il19 */";

/***/ }),

/***/ 63644:
/*!************************************************************************!*\
  !*** ./src/app/loan-eligibility/loan-eligibility.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon routerLink=\"/splash/tabs/home\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title class=\"header-title\">Loan Eligibility</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form [formGroup]=\"loanElegibility\" (ngSubmit)=\"onSubmit()\"> \r\n<div class=\"item-wrapper\">\r\n    <ion-item class=\"loan-item\" lines=\"none\">\r\n      <span class=\"loan-left-wrapper\">\r\n    <label for=\"first-name\">Loan Required: </label>\r\n    <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n  </span>  \r\n    <ion-input inputmode=\"numeric\" type=\"number\"  formControlName=\"LoanAmount\"></ion-input>    \r\n  </ion-item>\r\n  <div  class=\"web_error\" *ngIf=\"loanElegibility.controls['LoanAmount'].invalid && (loanElegibility.controls['LoanAmount'].dirty || loanElegibility.controls['LoanAmount'].touched)\" >\r\n    <div *ngIf=\"loanElegibility.controls['LoanAmount'].errors.required\">*Loan amount is required</div>\r\n    <div *ngIf=\"loanElegibility.controls['LoanAmount'].errors.pattern \">* Only numbers are allowed</div>      \r\n</div>\r\n</div>\r\n  <div class=\"item-wrapper\">\r\n  <ion-item class=\"loan-item\" lines=\"none\">    \r\n    <span class=\"loan-left-wrapper\">\r\n    <label for=\"last-name\">Net income per month<br>Excluding LTA and Medical Allowances: </label>\r\n    <fa-icon  [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n  </span>\r\n    <ion-input inputmode=\"numeric\" type=\"number\" formControlName=\"NetIncome\"></ion-input>\r\n  </ion-item>\r\n  <div  class=\"web_error\" *ngIf=\"loanElegibility.controls['NetIncome'].invalid && (loanElegibility.controls['NetIncome'].dirty || loanElegibility.controls['NetIncome'].touched)\" >\r\n    <div *ngIf=\"loanElegibility.controls['NetIncome'].errors.required\">*Net income is required</div>\r\n    <div *ngIf=\"loanElegibility.controls['NetIncome'].errors.pattern \">* Only numbers are allowed</div>      \r\n</div> \r\n</div>\r\n  <div class=\"item-wrapper\">\r\n  <ion-item class=\"loan-item\" lines=\"none\">\r\n    <span class=\"loan-left-wrapper\">\r\n    <label for=\"last-name\">Existing Loan commitments <br>(per month): </label>\r\n    <fa-icon  [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n  </span>\r\n    <ion-input inputmode=\"numeric\" type=\"number\" formControlName=\"ExistingEMI\"></ion-input>\r\n  </ion-item>\r\n  <div  class=\"web_error\" *ngIf=\"loanElegibility.controls['ExistingEMI'].invalid && (loanElegibility.controls['ExistingEMI'].dirty || loanElegibility.controls['ExistingEMI'].touched)\" >\r\n    <div *ngIf=\"loanElegibility.controls['ExistingEMI'].errors.required\">*Existing Loan amount is required</div>\r\n    <div *ngIf=\"loanElegibility.controls['ExistingEMI'].errors.pattern \">* Only numbers are allowed</div>      \r\n  </div>\r\n</div>\r\n  <div class=\"item-wrapper\">\r\n  <ion-item class=\"loan-item\" lines=\"none\">\r\n    <span class=\"loan-left-wrapper\">\r\n    <label for=\"last-name\">Loan Tenure: </label>\r\n  </span>\r\n    <ion-input inputmode=\"numeric\" type=\"number\" formControlName=\"LoanTenure\"></ion-input>\r\n  </ion-item>\r\n  <div  class=\"web_error\" *ngIf=\"loanElegibility.controls['LoanTenure'].invalid && (loanElegibility.controls['LoanTenure'].dirty || loanElegibility.controls['LoanTenure'].touched)\" >\r\n    <div *ngIf=\"loanElegibility.controls['LoanTenure'].errors.required\">*Loan tenure is required</div>\r\n    <div *ngIf=\"loanElegibility.controls['LoanTenure'].errors.pattern \">* Only numbers are allowed</div>      \r\n  </div>\r\n</div>\r\n<div class=\"item-wrapper\">\r\n  <ion-item class=\"loan-item\" lines=\"none\">\r\n    <span class=\"loan-left-wrapper\">\r\n    <label for=\"last-name\">Rate of Interest </label>\r\n    <fa-icon  [icon]=\"faPercent\"></fa-icon>\r\n  </span>\r\n    <ion-input inputmode=\"numeric\" type=\"number\" formControlName=\"InterestRate\"></ion-input>\r\n  </ion-item> \r\n  <div  class=\"web_error\" *ngIf=\"loanElegibility.controls['InterestRate'].invalid && (loanElegibility.controls['InterestRate'].dirty || loanElegibility.controls['InterestRate'].touched)\" >\r\n    <div *ngIf=\"loanElegibility.controls['InterestRate'].errors.required\">*Rate of interest is required</div> \r\n  </div>\r\n</div>\r\n<ion-button class=\"loan-submit-btn\" type=\"submit\" [disabled]=\"!loanElegibility.valid\">Check Your Elegibility</ion-button>\r\n  </form>  \r\n  \r\n  <ion-button class=\"reset-btn\" fill=\"clear\" type=\"submit\" (click)=\"resetSubmitForm()\">Reset all fields</ion-button>\r\n  <span class=\"red-border\"></span>\r\n  <span *ngIf=\"loanEle\" class=\"res\">Result:\r\n    <div class=\"resultLoanEle\">you are Eligible for this loan\r\n      <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>{{LoanAmount}} at the EMI <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n      {{monthlyEMI}}\r\n\r\n    </div>\r\n    <div class=\"resultLoanEle\">you are also Eligible for the maximum loan of\r\n      <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>{{maxLoan}} at the EMI <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n      {{EligibleEmi}}\r\n\r\n    </div>\r\n  </span>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_loan-eligibility_loan-eligibility_module_ts.js.map