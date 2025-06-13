"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_post-project_floor-plan_floor-plan_page_ts"],{

/***/ 54797:
/*!************************************************************!*\
  !*** ./src/app/post-project/floor-plan/floor-plan.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloorPlanPage": () => (/* binding */ FloorPlanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _floor_plan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floor-plan.page.html?ngResource */ 72543);
/* harmony import */ var _floor_plan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor-plan.page.scss?ngResource */ 64083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let FloorPlanPage = class FloorPlanPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            items: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([])
        });
    }
    createItem() {
        return this.formBuilder.group({
            name: '',
            description: '',
            price: ''
        });
    }
    get itemsArrayControl() {
        return this.items = this.orderForm.get('items');
    }
    addItem() {
        this.items.push(this.createItem());
    }
};
FloorPlanPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
FloorPlanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-floor-plan',
        template: _floor_plan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_floor_plan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FloorPlanPage);



/***/ }),

/***/ 64083:
/*!*************************************************************************!*\
  !*** ./src/app/post-project/floor-plan/floor-plan.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-item, ion-content {\n  --background:#fff;\n  color: #000;\n}\n\nion-input, ion-textarea {\n  border: solid 1px #E4E4E4;\n  --padding-start: 15px;\n  color: #000;\n}\n\nion-input {\n  padding-left: 15px !important;\n}\n\n.client-form-list {\n  padding: 0 15px;\n}\n\n.client-form-list ion-label {\n  color: #000;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.client-form-list ion-item {\n  --background:#fff;\n  color: #000;\n}\n\n.client-form-list span {\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%;\n}\n\n.client-form-list ion-select {\n  border: solid 1px #E4E4E4;\n  --padding-start: 15px;\n  color: #000;\n}\n\n.availableFormWrapper {\n  padding: 0 15px;\n  color: #000;\n  display: flex;\n}\n\n.availableFormWrapper ul {\n  padding-left: 0px;\n}\n\n.availableFormWrapper ul li {\n  color: #000;\n  list-style: none;\n  margin: 0 8px;\n  float: left;\n  width: 40%;\n  margin-bottom: 20px;\n}\n\n.availableFormWrapper ul li label {\n  position: relative;\n}\n\n.availableFormWrapper ul li label input[type=radio] {\n  margin-right: 5px;\n}\n\n.availableFormWrapper ul li label .checkmark {\n  position: absolute;\n  top: -2px;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-radius: 50%;\n  left: -1px;\n  border: solid 1px #C5C5C5;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.availableFormWrapper ul li label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  top: 4px;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #FE1300;\n}\n\n.nextBtn {\n  width: 100%;\n  height: 40px;\n}\n\n.projectType {\n  color: #000;\n  padding-left: 15px;\n}\n\n.clients-btn {\n  width: 50%;\n  line-height: 30px;\n  display: inline-block;\n  text-align: center;\n  margin: 0 6px;\n  background: #fff;\n  color: #000;\n  border: solid 1px #E4E4E4;\n}\n\n.monthlyRent.color-black {\n  padding-left: 16px;\n  margin-top: 20px;\n  display: block;\n}\n\n.color-black {\n  color: #000;\n}\n\nion-item ion-select {\n  width: 100%;\n  border: solid 1px #E4E4E4;\n  --padding-start: 10px;\n  border-radius: 5px;\n}\n\n.purpose a {\n  border: solid 1px #E4E4E4;\n  display: inline-block;\n  border-radius: 5px;\n  margin: 0px 3px;\n  color: #bebcbc;\n  width: 100px;\n  text-align: center;\n  line-height: 31px;\n  text-decoration: underline;\n}\n\nion-input {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb29yLXBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXVCLGlCQUFBO0VBQWtCLFdBQUE7QUFHekM7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQVcsNkJBQUE7QUFPWDs7QUFOQTtFQUNJLGVBQUE7QUFTSjs7QUFSSTtFQUFXLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixjQUFBO0FBYWhEOztBQVpJO0VBQVUsaUJBQUE7RUFBbUIsV0FBQTtBQWdCakM7O0FBZkk7RUFDSSxtQkFBQTtFQUFxQixxQkFBQTtFQUFzQixXQUFBO0FBbUJuRDs7QUFqQkk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQW1CUjs7QUFmQTtFQUF1QixlQUFBO0VBQ25CLFdBQUE7RUFDQSxhQUFBO0FBbUJKOztBQWxCSTtFQUNJLGlCQUFBO0FBb0JSOztBQW5CUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBcUJaOztBQXBCWTtFQUNJLGtCQUFBO0FBc0JoQjs7QUFyQmdCO0VBQ0ksaUJBQUE7QUF1QnBCOztBQXJCZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUF1QnBCOztBQXBCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBc0JwQjs7QUFuQm1CO0VBQ0MsY0FBQTtBQXFCcEI7O0FBbEJrQjtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBb0JwQjs7QUFkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBaUJKOztBQWZBO0VBQWMsV0FBQTtFQUFhLGtCQUFBO0FBb0IzQjs7QUFuQkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBdUJKOztBQXJCQTtFQUNRLFdBQUE7QUF3QlI7O0FBckJJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXdCUjs7QUFwQkk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUF1QlI7O0FBbkJBO0VBQVUsa0JBQUE7QUF1QlYiLCJmaWxlIjoiZmxvb3ItcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSwgaW9uLWNvbnRlbnR7IC0tYmFja2dyb3VuZDojZmZmO2NvbG9yOiAjMDAwO31cclxuaW9uLWlucHV0LGlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFNEU0RTQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5pb24taW5wdXR7IHBhZGRpbmctbGVmdDoxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uY2xpZW50LWZvcm0tbGlzdHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGlvbi1sYWJlbHsgY29sb3I6ICMwMDA7IG1hcmdpbi1ib3R0b206IDVweDsgZGlzcGxheTogYmxvY2s7fVxyXG4gICAgaW9uLWl0ZW17IC0tYmFja2dyb3VuZDojZmZmOyBjb2xvcjogIzAwMDt9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdmFpbGFibGVGb3JtV3JhcHBlcnsgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGVja21hcmt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjQzVDNUM1O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZFMTMwMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5uZXh0QnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnByb2plY3RUeXBleyBjb2xvcjogIzAwMDsgcGFkZGluZy1sZWZ0OiAxNXB4O31cclxuLmNsaWVudHMtYnRue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOjAgNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxufVxyXG4ubW9udGhseVJlbnQuY29sb3ItYmxhY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbG9yLWJsYWNre1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5pb24taXRlbXtcclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59XHJcbi5wdXJwb3NlIHtcclxuICAgIGF7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDsgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICAgICAgY29sb3I6ICNiZWJjYmM7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5pb24taW5wdXR7cGFkZGluZy1sZWZ0OiAxNXB4O31cclxuIl19 */";

/***/ }),

/***/ 72543:
/*!*************************************************************************!*\
  !*** ./src/app/post-project/floor-plan/floor-plan.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <span class=\"monthlyRent color-black\" slot=\"start\">\r\n    Accomodation Type\r\n  </span>\r\n<ion-item lines=\"none\">\r\n  <ion-select type=\"text\" placeholder=\"Select Category\" (onChange)=\"getCategory()\">\r\n    <ion-select-option value=\"New Construction\">New Construction</ion-select-option>\r\n    <ion-select-option value=\"Less than 5 years\">Less than 5 years</ion-select-option>    \r\n  </ion-select>\r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n  Size(SQFT)\r\n</span>\r\n<ion-item lines=\"none\">\r\n<ion-input></ion-input>\r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n  Site plan\r\n</span>\r\n<ion-item lines=\"none\">\r\n<ion-input></ion-input>\r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n  Cluster Plan\r\n</span>\r\n<ion-item lines=\"none\">\r\n<ion-input></ion-input>\r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n  Floor Plan\r\n</span>\r\n<ion-item lines=\"none\">\r\n<ion-input></ion-input>\r\n</ion-item>\r\n -->\r\n <div formArrayName=\"items\"\r\n  *ngFor=\"let item of itemsArrayControl.controls; let i = index;\">\r\n  <div [formGroupName]=\"i\">\r\n    <input formControlName=\"name\" placeholder=\"Item name\">\r\n    <input formControlName=\"description\" placeholder=\"Item description\">\r\n    <input formControlName=\"price\" placeholder=\"Item price\">\r\n  </div>\r\n\r\n  Chosen name: {{ itemsArrayControl[i].controls.name.value }}\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_post-project_floor-plan_floor-plan_page_ts.js.map