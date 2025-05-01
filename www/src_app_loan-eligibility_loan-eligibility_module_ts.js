"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loan-eligibility_loan-eligibility_module_ts"],{

/***/ 1358:
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
        console.log(event.key);
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

/***/ 9090:
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
/* harmony import */ var _loan_eligibility_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-eligibility.page */ 28894);




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

/***/ 34502:
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
/* harmony import */ var _loan_eligibility_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-eligibility-routing.module */ 9090);
/* harmony import */ var _loan_eligibility_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-eligibility.page */ 28894);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _directives_IntegerInput_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/IntegerInput.directive */ 1358);









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

/***/ 28894:
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
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/calculator.service */ 75849);







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
        console.log(this.loanElegibility.value);
        this.calSvc.LoanCalculator(this.loanElegibility.value)
            .then((data) => {
            let parseData = JSON.parse(data.data);
            console.log('data', parseData);
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

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  display: inline-block;\n}\nion-content {\n  --background:#ffffff;\n  --padding-top:50px;\n}\nion-content .web_error {\n  color: #e14b4c;\n  display: flex;\n  align-items: end;\n  justify-content: end;\n  margin-top: -10px;\n  font-size: 12px;\n  margin-right: 15px;\n}\nion-content .loan-item {\n  margin-bottom: 9px;\n  --background:#ffffff;\n  padding: 0;\n  --min-height:40px;\n}\nion-content .loan-item .loan-left-wrapper {\n  width: 50%;\n  text-align: end;\n}\nion-content .loan-item .loan-left-wrapper label {\n  color: #6a6a6a;\n  font-size: 12px;\n}\nion-content .loan-item .loan-left-wrapper fa-icon {\n  color: #6a6a6a;\n  font-size: 12px;\n  margin-left: 5px;\n}\nion-content .loan-item ion-input[type=text] {\n  --background: #ffffff;\n  border: solid 1px #e1e1e1;\n  margin-left: 20px;\n  border-radius: 5px;\n  --padding-start: 15px;\n  color: #6a6a6a;\n}\nion-content .loan-item ion-input[type=number] {\n  --background: #ffffff;\n  border: solid 1px #e1e1e1;\n  margin-left: 20px;\n  border-radius: 5px;\n  --padding-start: 15px;\n  color: #6a6a6a;\n}\nion-content .loan-submit-btn {\n  margin: auto;\n  width: 65%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 0;\n  height: 55px;\n}\nion-content .reset-btn {\n  margin: auto;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 0;\n  z-index: 9;\n  height: 55px;\n  left: 0;\n  right: 0;\n}\nion-content .red-border {\n  border: solid 2px #e5002d;\n  width: 80%;\n  display: flex;\n  margin: 34px auto 20px auto;\n}\n.res {\n  color: #000;\n  width: 80%;\n  margin: 0 auto;\n  display: block;\n}\n.resultLoanEle {\n  color: #000;\n  text-align: center;\n  font-size: 15px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tZWxpZ2liaWxpdHkucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZlZW4lMjBrdW1hciUyMGthdGl5YXJcXE9uZURyaXZlXFxEZXNrdG9wXFxodW50bmV3XFxodW50cHJvcGVydHluZXdcXHNyY1xcYXBwXFxsb2FuLWVsaWdpYmlsaXR5XFxsb2FuLWVsaWdpYmlsaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjtBREFBO0VBQVcsY0FBQTtFQUFnQixlQUFBO0FDSTNCO0FESEE7RUFDSSxxQkFBQTtBQ0tKO0FERkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDS0o7QURKSTtFQUFZLGNBQUE7RUFDUixhQUFBO0VBQ0EsZ0JBQUE7RUFDSixvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDT0o7QUROQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNRSjtBRFBJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNTUjtBRFJZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNVaEI7QURSWTtFQUFTLGNBQUE7RUFBZSxlQUFBO0VBQWlCLGdCQUFBO0FDYXJEO0FEWEc7RUFDSyxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ2FSO0FEWEk7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ2FSO0FEVEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDV0o7QURUQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNXSjtBRFRBO0VBQWEseUJBQUE7RUFBMkIsVUFBQTtFQUFXLGFBQUE7RUFBYywyQkFBQTtBQ2VqRTtBRGJBO0VBQU0sV0FBQTtFQUFZLFVBQUE7RUFDZCxjQUFBO0VBQ0EsY0FBQTtBQ2tCSjtBRGpCQTtFQUFnQixXQUFBO0VBQWEsa0JBQUE7RUFBbUIsZUFBQTtFQUM1QyxpQkFBQTtBQ3VCSiIsImZpbGUiOiJsb2FuLWVsaWdpYmlsaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmctY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6I2UxNGI0YzsgICAgXHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbi5iYWNrLWJ0bnsgY29sb3I6ICNmZmZmZmY7IGZvbnQtc2l6ZTogMjVweDt9XHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG4gICAgLS1wYWRkaW5nLXRvcDo1MHB4O1xyXG4gICAgLndlYl9lcnJvcnsgY29sb3I6I2UxNGI0YztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyAgICBcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDt9IFxyXG4ubG9hbi1pdGVte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1taW4taGVpZ2h0OjQwcHg7XHJcbiAgICAubG9hbi1sZWZ0LXdyYXBwZXJ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmEtaWNvbnsgY29sb3I6ICM2YTZhNmE7Zm9udC1zaXplOiAxMnB4OyBtYXJnaW4tbGVmdDogNXB4O31cclxuICAgIH1cclxuICAgaW9uLWlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTFlMWUxO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICB9IFxyXG4gICAgaW9uLWlucHV0W3R5cGU9XCJudW1iZXJcIl17XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlMWUxZTE7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIH0gICAgXHJcblxyXG59XHJcbi5sb2FuLXN1Ym1pdC1idG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG4ucmVzZXQtYnRue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7ICAgXHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwXHJcbn1cclxuLnJlZC1ib3JkZXJ7IGJvcmRlcjogc29saWQgMnB4ICNlNTAwMmQ7IHdpZHRoOjgwJTsgZGlzcGxheTogZmxleDttYXJnaW46IDM0cHggYXV0byAyMHB4IGF1dG87fVxyXG59XHJcbi5yZXN7IGNvbG9yOiAjMDAwO3dpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO31cclxuLnJlc3VsdExvYW5FbGV7IGNvbG9yOiAjMDAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7fSIsIi5oZWFkZXItYmctY29sb3Ige1xuICAtLWJhY2tncm91bmQ6I2UxNGI0YztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xufVxuLmhlYWRlci1iZy1jb2xvciAuYmFjay1idG4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmhlYWRlci1iZy1jb2xvciAuaGVhZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAtLXBhZGRpbmctdG9wOjUwcHg7XG59XG5pb24tY29udGVudCAud2ViX2Vycm9yIHtcbiAgY29sb3I6ICNlMTRiNGM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5pb24tY29udGVudCAubG9hbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgcGFkZGluZzogMDtcbiAgLS1taW4taGVpZ2h0OjQwcHg7XG59XG5pb24tY29udGVudCAubG9hbi1pdGVtIC5sb2FuLWxlZnQtd3JhcHBlciB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbmlvbi1jb250ZW50IC5sb2FuLWl0ZW0gLmxvYW4tbGVmdC13cmFwcGVyIGxhYmVsIHtcbiAgY29sb3I6ICM2YTZhNmE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5sb2FuLWl0ZW0gLmxvYW4tbGVmdC13cmFwcGVyIGZhLWljb24ge1xuICBjb2xvcjogIzZhNmE2YTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmxvYW4taXRlbSBpb24taW5wdXRbdHlwZT10ZXh0XSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTFlMTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBjb2xvcjogIzZhNmE2YTtcbn1cbmlvbi1jb250ZW50IC5sb2FuLWl0ZW0gaW9uLWlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTFlMTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBjb2xvcjogIzZhNmE2YTtcbn1cbmlvbi1jb250ZW50IC5sb2FuLXN1Ym1pdC1idG4ge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogNTVweDtcbn1cbmlvbi1jb250ZW50IC5yZXNldC1idG4ge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIHotaW5kZXg6IDk7XG4gIGhlaWdodDogNTVweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5pb24tY29udGVudCAucmVkLWJvcmRlciB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNlNTAwMmQ7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMzRweCBhdXRvIDIwcHggYXV0bztcbn1cblxuLnJlcyB7XG4gIGNvbG9yOiAjMDAwO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZXN1bHRMb2FuRWxlIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbn0iXX0= */";

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