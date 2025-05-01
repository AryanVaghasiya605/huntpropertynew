"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-package_property-type-list_property-type-list_module_ts"],{

/***/ 59561:
/*!****************************************************************************************!*\
  !*** ./src/app/select-package/property-type-list/property-type-list-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyTypeListPageRoutingModule": () => (/* binding */ PropertyTypeListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _property_type_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-type-list.page */ 21392);




const routes = [
    {
        path: '',
        component: _property_type_list_page__WEBPACK_IMPORTED_MODULE_0__.PropertyTypeListPage
    }
];
let PropertyTypeListPageRoutingModule = class PropertyTypeListPageRoutingModule {
};
PropertyTypeListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PropertyTypeListPageRoutingModule);



/***/ }),

/***/ 16550:
/*!********************************************************************************!*\
  !*** ./src/app/select-package/property-type-list/property-type-list.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyTypeListPageModule": () => (/* binding */ PropertyTypeListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _property_type_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-type-list-routing.module */ 59561);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _property_type_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type-list.page */ 21392);








let PropertyTypeListPageModule = class PropertyTypeListPageModule {
};
PropertyTypeListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _property_type_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropertyTypeListPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_property_type_list_page__WEBPACK_IMPORTED_MODULE_1__.PropertyTypeListPage]
    })
], PropertyTypeListPageModule);



/***/ }),

/***/ 21392:
/*!******************************************************************************!*\
  !*** ./src/app/select-package/property-type-list/property-type-list.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyTypeListPage": () => (/* binding */ PropertyTypeListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _property_type_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-type-list.page.html?ngResource */ 293);
/* harmony import */ var _property_type_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type-list.page.scss?ngResource */ 26545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 42735);







let PropertyTypeListPage = class PropertyTypeListPage {
    constructor(_mainSVC, _router, _activated) {
        this._mainSVC = _mainSVC;
        this._router = _router;
        this._activated = _activated;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowLeft;
        this.model = { option: 'option3' };
        this.noCommercialProperty = false;
        this.noResidentialsProp = false;
        this.radioItems = ['Residential', 'Commercial'];
    }
    ngOnInit() {
        this.propertyfor = this._activated.snapshot.params['id'];
    }
    residentialsProperty() {
        //  var commercial = document.getElementById('commercialProp').style.display = 'block';
        this.residentialsProp = [];
        this.commercialProperty = [];
        const residentialData = {
            "propertyfor": this.propertyfor,
            "propertytype": "Residential"
        };
        this._mainSVC.getResidentialPropertyList(residentialData).then((data) => {
            //  console.log("MyData",data);
            if (data.status == 200) {
                let parseData = JSON.parse(data.data);
                //   console.log('parseData', parseData.PropertyCategory);
                this.residentialsProp = parseData.PropertyCategory;
                // var commercialDom = document.getElementById('commercialProp');
                // if(commercialDom != null && commercialDom != undefined){
                //   document.getElementById('commercialProp').style.height = 'auto';
                // }
                //   if (this.residentialsProp  != ''){
                //   this.noResidentialsProp = true;
                // }
            }
        });
    }
    commercialProp() {
        // var res = document.getElementById('residentialsProp');
        // if(res != null && res != undefined ){
        //   document.getElementById('residentialsProp').style.height = 'none';
        // }
        this.commercialProperty = [];
        this.residentialsProp = [];
        const commercialData = {
            "propertyfor": this.propertyfor,
            "propertytype": "Commercial"
        };
        this._mainSVC.getCommercialPropertyList(commercialData).then((data) => {
            // console.log(data);
            if (data.status == 200) {
                let parseData = JSON.parse(data.data);
                //  console.log('parseData111', parseData);
                this.commercialProperty = parseData.PropertyCategory;
                //  var residentialsProp = document.getElementById('#residentialsProp').style.height = 'auto';
                this.noCommercialProperty = true;
                // if(data == 200){}
            }
        });
    }
    propertyDetails(id, propertyfor) {
        // console.log("id",id,"propertyfor",propertyfor)
        this._router.navigate(['/select-package/posted-property-details', { id: id, propertyfor: propertyfor }]);
    }
};
PropertyTypeListPage.ctorParameters = () => [
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
PropertyTypeListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-property-type-list',
        template: _property_type_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_property_type_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertyTypeListPage);



/***/ }),

/***/ 26545:
/*!*******************************************************************************************!*\
  !*** ./src/app/select-package/property-type-list/property-type-list.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".property-bg {\n  background: url('placeholder-01.png');\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  background-size: contain;\n  background-color: #fff;\n  height: 100vh;\n  overflow-y: scroll;\n}\n.property-bg fa-icon {\n  font-size: 24px;\n  font-weight: 900;\n  margin-left: 20px;\n  margin-top: 20px;\n  display: inline-block;\n  color: #000;\n}\n.property-bg div {\n  color: #000;\n  text-align: center;\n  border-bottom: solid 2px #e3e3e3;\n  width: 88%;\n  padding-bottom: 20px;\n  margin: 30px auto 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.property-bg .property-image {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.property-bg .property-image .text-red {\n  color: red;\n}\n.property-bg .property-image img {\n  height: 200px;\n}\n.property-bg .property-image span {\n  color: #000;\n}\n.property-bg .property-image .list-type {\n  border-top: solid 1px #e3e3e3;\n  padding-top: 20px;\n  display: flex;\n  padding-left: 0;\n}\n.property-bg .property-image .list-type label {\n  flex-direction: row;\n}\n.property-bg .property-image .list-type label:last-child {\n  margin-left: 10px;\n}\n.property-bg .property-btn {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 15px;\n}\n.property-bg .property-btn .buy {\n  width: 120px;\n  height: 40px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n.property-bg .property-btn .rent {\n  width: 120px;\n  height: 40px;\n  margin-left: 20px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 18px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark {\n  position: absolute;\n  top: 0;\n  top: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%;\n  left: 0;\n}\n.container:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n.container input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n.container .checkmark:after {\n  top: 9px;\n  left: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white;\n}\n.property-list {\n  width: 100%;\n}\n.property-list ul {\n  list-style: none;\n  padding: 0;\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n  height: auto;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.property-list ul li {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100px;\n  float: left;\n  height: 89px;\n}\n.property-list ul li span {\n  width: 50px;\n  height: 50px;\n  float: left;\n  margin: 2px;\n}\n.property-list ul li span ion-img {\n  width: 100%;\n  border: solid 1px #aaaaaa;\n  padding: 5px;\n  border-radius: 50%;\n}\n.property-list ul li p {\n  margin: 0;\n  font-size: 14px;\n}\n.whatType {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LXR5cGUtbGlzdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZlZW4lMjBrdW1hciUyMGthdGl5YXJcXE9uZURyaXZlXFxEZXNrdG9wXFxodW50bmV3XFxodW50cHJvcGVydHluZXdcXHNyY1xcYXBwXFxzZWxlY3QtcGFja2FnZVxccHJvcGVydHktdHlwZS1saXN0XFxwcm9wZXJ0eS10eXBlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDRVA7QURBSTtFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUDtBRENJO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NQO0FEQU87RUFDQyxVQUFBO0FDRVI7QURBVztFQUNBLGFBQUE7QUNFWDtBREFPO0VBQ0ksV0FBQTtBQ0VYO0FEQ087RUFDQyw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDUjtBREFPO0VBQ0MsbUJBQUE7QUNFUjtBRENPO0VBQ0MsaUJBQUE7QUNDUjtBREdJO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RQO0FERU87RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNBWDtBREVPO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNBWDtBREtHO0VBQ0QsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7QUNGRjtBREtBO0VBQ0UseUJBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0FDRkY7QURLQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLFdBQUE7QUNGRjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURFSTtFQUNFLGdCQUFBO0VBQ0YsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBRENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ0FSO0FEQ1E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDVjtBREVNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNBUjtBREtBO0VBQVcsZ0JBQUE7QUNEWCIsImZpbGUiOiJwcm9wZXJ0eS10eXBlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWJne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLTAxLnBuZycpOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGZhLWljb257XHJcbiAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBkaXZ7XHJcbiAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZTNlM2UzO1xyXG4gICAgICAgd2lkdGg6IDg4JTtcclxuICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnByb3BlcnR5LWltYWdle1xyXG4gICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgLnRleHQtcmVke1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICB9XHJcbiAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICBzcGFue1xyXG4gICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgLy8gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAubGlzdC10eXBle1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTNlM2UzIDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgIGxhYmVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgfVxyXG4gICAgICAgbGFiZWw6bGFzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9wZXJ0eS1idG57XHJcbiAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgLmJ1eXtcclxuICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgIC0tYmFja2dyb3VuZDojZTNlM2UzO1xyXG4gICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAucmVudHtcclxuICAgICAgICAgICB3aWR0aDogMTIwcHg7IFxyXG4gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAtLWJhY2tncm91bmQ6I2UzZTNlMztcclxuICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5jaGVja21hcmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxufVxyXG5cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgdG9wOiA5cHg7XHJcbiAgbGVmdDogOXB4O1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvcGVydHktbGlzdHtcclxuICB3aWR0aDogMTAwJTtcclxuICB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbGl7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogODlweDtcclxuICAgICAgc3BhbntcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIGlvbi1pbWd7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYSA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAwOyAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi53aGF0VHlwZXsgbWFyZ2luLXRvcDogMTVweDt9IiwiLnByb3BlcnR5LWJnIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci0wMS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ucHJvcGVydHktYmcgZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMwMDA7XG59XG4ucHJvcGVydHktYmcgZGl2IHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNlM2UzZTM7XG4gIHdpZHRoOiA4OCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvcGVydHktYmcgLnByb3BlcnR5LWltYWdlIHtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9wZXJ0eS1iZyAucHJvcGVydHktaW1hZ2UgLnRleHQtcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5wcm9wZXJ0eS1iZyAucHJvcGVydHktaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5wcm9wZXJ0eS1iZyAucHJvcGVydHktaW1hZ2Ugc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnByb3BlcnR5LWJnIC5wcm9wZXJ0eS1pbWFnZSAubGlzdC10eXBlIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlM2UzZTM7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucHJvcGVydHktYmcgLnByb3BlcnR5LWltYWdlIC5saXN0LXR5cGUgbGFiZWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnByb3BlcnR5LWJnIC5wcm9wZXJ0eS1pbWFnZSAubGlzdC10eXBlIGxhYmVsOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wcm9wZXJ0eS1iZyAucHJvcGVydHktYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9wZXJ0eS1iZyAucHJvcGVydHktYnRuIC5idXkge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiNlM2UzZTM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucHJvcGVydHktYmcgLnByb3BlcnR5LWJ0biAucmVudCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiNlM2UzZTM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29udGFpbmVyIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgdG9wOiA5cHg7XG4gIGxlZnQ6IDlweDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wcm9wZXJ0eS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvcGVydHktbGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ucHJvcGVydHktbGlzdCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogODlweDtcbn1cbi5wcm9wZXJ0eS1saXN0IHVsIGxpIHNwYW4ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAycHg7XG59XG4ucHJvcGVydHktbGlzdCB1bCBsaSBzcGFuIGlvbi1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvcGVydHktbGlzdCB1bCBsaSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi53aGF0VHlwZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 293:
/*!*******************************************************************************************!*\
  !*** ./src/app/select-package/property-type-list/property-type-list.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"login-bg property-bg\">\r\n          <fa-icon [icon]=\"faArrowLeft\" routerLink=\"/splash/tabs/home\"></fa-icon>\r\n         \r\n          <div class=\"property-image\">\r\n            <img src=\"../../../assets/images/icons/svg/building.svg\" alt=\"image missing\">\r\n\r\n            <span class=\"whatType\">\r\n              What type of <span class=\"text-red\">property</span> is it?\r\n            </span>\r\n          <span  class=\"list-type\">\r\n          <label class=\"container\">\r\n            <input type=\"radio\" name=\"options\" (click)=\"residentialsProperty()\"\r\n            >\r\n            Residentail\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n          <label class=\"container\" >\r\n            <input type=\"radio\" name=\"options\" (click)=\"commercialProp()\"\r\n            >\r\n            Commercial\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n        </span>\r\n    \r\n        <span class=\"property-list\" >  \r\n          <ul *ngIf=\"residentialsProp\" id=\"residentialsProp\">\r\n            <li *ngFor=\"let residentials of residentialsProp; let i = index\">\r\n              <span (click)=\"propertyDetails(residentials.PropertyTypeID, propertyfor)\">\r\n              <ion-img src=\"{{residentials.image}}\" alt=\"image missing\"></ion-img>\r\n              \r\n              </span>  \r\n              <p>{{residentials.PropertySubCategory}}</p>\r\n          </li>\r\n        </ul>\r\n        <ul *ngIf=\"commercialProperty\" id=\"commercialProp\">\r\n          <li *ngFor=\"let commercial of commercialProperty; let i = index\">\r\n          <span (click)=\"propertyDetails(commercial.PropertyTypeID, propertyfor)\">\r\n          <ion-img src=\"{{commercial.image}}\" alt=\"image missing\"></ion-img>\r\n          \r\n          </span>  \r\n          <p>{{commercial.PropertySubCategory}}</p>\r\n      </li>\r\n      </ul>\r\n           </span>\r\n\r\n           <!-- <span class=\"property-list\">  \r\n            \r\n             </span> -->\r\n         \r\n        \r\n            <!-- <div class=\"property-btn\">\r\n              <ion-button class=\"buy\" routerLink=\"/select-package/property-type-list\">Buy</ion-button>\r\n              <ion-button class=\"rent\" routerLink=\"/select-package/property-type-list\">Rent</ion-button>\r\n            </div> -->\r\n          </div>\r\n          \r\n          </div>\r\n          \r\n  \r\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_select-package_property-type-list_property-type-list_module_ts.js.map