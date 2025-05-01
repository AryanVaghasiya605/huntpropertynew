"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_custom-range_custom-range_page_ts"],{

/***/ 56974:
/*!***************************************************!*\
  !*** ./src/app/custom-range/custom-range.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRangePage": () => (/* binding */ CustomRangePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _custom_range_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-range.page.html?ngResource */ 82619);
/* harmony import */ var _custom_range_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-range.page.scss?ngResource */ 62108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
var CustomRangePage_1;






let CustomRangePage = CustomRangePage_1 = class CustomRangePage {
    constructor() {
        this.min = 0;
        this.onChange = () => { };
        this.onTouch = () => { };
        this.sliderVal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.faIndianRupeeSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faIndianRupeeSign;
    }
    ngOnInit() { }
    ionViewWillEnter() { }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    updateValue(event) {
        const newValue = Number(event.target.value);
        this.value = newValue;
        this.onChange(newValue);
        this.onTouch();
        // console.log(this.value);
    }
    updateSliderValue(event) {
        const newValue = Number(event.target.value);
        this.value = newValue;
        this.onChange(newValue);
        this.onTouch();
        this.sliderVal.emit(this.value);
        //   this.slider = document.getElementById('rango');
        //   this.slider.oninput = function() {
        //     var output = document.getElementById('valor');      
        //     output.innerHTML = this.value + "cr";
        //     var sliderWidth = this.getBoundingClientRect().width;
        //     var outputWidth = output.getBoundingClientRect().width;
        //     var offset = this.value / (this.max - this.min) * sliderWidth - outputWidth / 2;
        //     output.setAttribute('style', 'left: ' + offset + 'px');
        // }
        // this.slider.oninput();
    }
};
CustomRangePage.ctorParameters = () => [];
CustomRangePage.propDecorators = {
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    sliderVal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CustomRangePage = CustomRangePage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-custom-range',
        template: _custom_range_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                useExisting: CustomRangePage_1,
                multi: true,
            },
        ],
        styles: [_custom_range_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomRangePage);



/***/ }),

/***/ 62108:
/*!****************************************************************!*\
  !*** ./src/app/custom-range/custom-range.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #fff;\n}\nion-content ion-item {\n  --background: #fff;\n}\nion-content ion-item input {\n  width: 100%;\n}\nion-content ion-item .simulador {\n  display: inline-block;\n  width: 100%;\n}\nion-content ion-item .simulador .slidecontainer {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\nion-content ion-item .simulador .slidecontainer span {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  display: flex;\n  width: 50px;\n  color: red;\n}\nion-content ion-item .simulador .slidecontainer span fa-icon {\n  color: red;\n}\nion-content ion-item .simulador .slider-container .interno .slidecontainer {\n  width: 100%;\n  padding-top: 0px;\n}\nion-content ion-item .simulador .slider-container .interno .slidecontainer output {\n  font-family: \"museo700\";\n  margin-bottom: 0px;\n  position: absolute;\n  padding: 0.5em;\n  background: transparent;\n  color: #FF2323;\n  top: -3px;\n}\nion-content ion-item .simulador .slider-container .interno .slider {\n  -webkit-appearance: none;\n  width: 85%;\n  height: 5px;\n  border-radius: 2.5px;\n  background: #FF2323;\n  outline: none;\n  transition: opacity 0.2s;\n  border: 0;\n}\nion-content ion-item .simulador .slider-container .interno .slider:hover {\n  opacity: 1;\n}\nion-content ion-item .simulador .slider-container .interno .slider::-webkit-slider-thumb {\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #FF2323;\n  cursor: pointer;\n  border: 3.5px solid #FF2323;\n}\nion-content ion-item .simulador .slider-container .interno .slider ::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #FF2323;\n  cursor: pointer;\n  border: 3.5px solid #FF2323;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1yYW5nZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdmVlbiUyMGt1bWFyJTIwa2F0aXlhclxcT25lRHJpdmVcXERlc2t0b3BcXGh1bnRuZXdcXGh1bnRwcm9wZXJ0eW5ld1xcc3JjXFxhcHBcXGN1c3RvbS1yYW5nZVxcY3VzdG9tLXJhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0FDRVI7QUREUTtFQUFNLFdBQUE7QUNJZDtBREhRO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDS1o7QURKWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDTWhCO0FETGdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ09wQjtBRE5vQjtFQUNJLFVBQUE7QUNReEI7QURIVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0taO0FERlU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0laO0FERlU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSx3QkFBQTtFQUNBLFNBQUE7QUNJWjtBREZVO0VBQ0UsVUFBQTtBQ0laO0FERlU7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0laO0FERlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNJWiIsImZpbGUiOiJjdXN0b20tcmFuZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgaW5wdXR7d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIC5zaW11bGFkb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAuc2xpZGVjb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBmYS1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgLnNsaWRlci1jb250YWluZXIgLmludGVybm8gLnNsaWRlY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNsaWRlci1jb250YWluZXIgLmludGVybm8gLnNsaWRlY29udGFpbmVyIG91dHB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbXVzZW83MDAnO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkYyMzIzO1xyXG4gICAgICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2xpZGVyLWNvbnRhaW5lciAuaW50ZXJubyAuc2xpZGVyIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjIzMjM7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNsaWRlci1jb250YWluZXIgLmludGVybm8gLnNsaWRlcjpob3ZlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2xpZGVyLWNvbnRhaW5lciAuaW50ZXJubyAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYyMzIzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMy41cHggc29saWQgI0ZGMjMyMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zbGlkZXItY29udGFpbmVyIC5pbnRlcm5vIC5zbGlkZXIgOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYyMzIzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMy41cHggc29saWQgI0ZGMjMyMztcclxuICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24taXRlbSAuc2ltdWxhZG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5zaW11bGFkb3IgLnNsaWRlY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gLnNpbXVsYWRvciAuc2xpZGVjb250YWluZXIgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6IHJlZDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5zaW11bGFkb3IgLnNsaWRlY29udGFpbmVyIHNwYW4gZmEtaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5pb24tY29udGVudCBpb24taXRlbSAuc2ltdWxhZG9yIC5zbGlkZXItY29udGFpbmVyIC5pbnRlcm5vIC5zbGlkZWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gLnNpbXVsYWRvciAuc2xpZGVyLWNvbnRhaW5lciAuaW50ZXJubyAuc2xpZGVjb250YWluZXIgb3V0cHV0IHtcbiAgZm9udC1mYW1pbHk6IFwibXVzZW83MDBcIjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRjIzMjM7XG4gIHRvcDogLTNweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5zaW11bGFkb3IgLnNsaWRlci1jb250YWluZXIgLmludGVybm8gLnNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkYyMzIzO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgYm9yZGVyOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gLnNpbXVsYWRvciAuc2xpZGVyLWNvbnRhaW5lciAuaW50ZXJubyAuc2xpZGVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5zaW11bGFkb3IgLnNsaWRlci1jb250YWluZXIgLmludGVybm8gLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI0ZGMjMyMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDMuNXB4IHNvbGlkICNGRjIzMjM7XG59XG5pb24tY29udGVudCBpb24taXRlbSAuc2ltdWxhZG9yIC5zbGlkZXItY29udGFpbmVyIC5pbnRlcm5vIC5zbGlkZXIgOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjRkYyMzIzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMy41cHggc29saWQgI0ZGMjMyMztcbn0iXX0= */";

/***/ }),

/***/ 82619:
/*!****************************************************************!*\
  !*** ./src/app/custom-range/custom-range.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-item lines=\"none\" class=\"range_parent\">  \n    \n    <div class=\"simulador\">\n      <div class=\"contenedor\">          \n          <div class=\"slider-container\">\n              <div class=\"interno\">\n                  <div class=\"slidecontainer\">\n                    <input class=\"slider\"\n                    type=\"range\"\n                    [min]=\"min\"\n                    [max]=\"max\"\n                    [step]=\"step\"\n                    [value]=\"value\"\n                    (input)=\"updateSliderValue($event)\"\n                  />\n                   <span>\n                    <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\n                    <div *ngIf=\"!value\">{{min}}</div>\n                    {{value}}Cr</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_custom-range_custom-range_page_ts.js.map