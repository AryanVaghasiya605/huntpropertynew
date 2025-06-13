"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-package_property-type-list_property-type-list_module_ts"],{

/***/ 64521:
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
/* harmony import */ var _property_type_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-type-list.page */ 53610);




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

/***/ 55632:
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
/* harmony import */ var _property_type_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-type-list-routing.module */ 64521);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _property_type_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type-list.page */ 53610);








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

/***/ 53610:
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
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 91557);







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

module.exports = ".property-bg {\n  background: url('placeholder-01.png');\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  background-size: contain;\n  background-color: #fff;\n  height: 100vh;\n  overflow-y: scroll;\n}\n.property-bg fa-icon {\n  font-size: 24px;\n  font-weight: 900;\n  margin-left: 20px;\n  margin-top: 20px;\n  display: inline-block;\n  color: #000;\n}\n.property-bg div {\n  color: #000;\n  text-align: center;\n  border-bottom: solid 2px #e3e3e3;\n  width: 88%;\n  padding-bottom: 20px;\n  margin: 30px auto 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.property-bg .property-image {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.property-bg .property-image .text-red {\n  color: red;\n}\n.property-bg .property-image img {\n  height: 200px;\n}\n.property-bg .property-image span {\n  color: #000;\n}\n.property-bg .property-image .list-type {\n  border-top: solid 1px #e3e3e3;\n  padding-top: 20px;\n  display: flex;\n  padding-left: 0;\n}\n.property-bg .property-image .list-type label {\n  flex-direction: row;\n}\n.property-bg .property-image .list-type label:last-child {\n  margin-left: 10px;\n}\n.property-bg .property-btn {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 15px;\n}\n.property-bg .property-btn .buy {\n  width: 120px;\n  height: 40px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n.property-bg .property-btn .rent {\n  width: 120px;\n  height: 40px;\n  margin-left: 20px;\n  --background:#e3e3e3;\n  color: #fff;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 18px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark {\n  position: absolute;\n  top: 0;\n  top: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%;\n  left: 0;\n}\n.container:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n.container input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n.container .checkmark:after {\n  top: 9px;\n  left: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white;\n}\n.property-list {\n  width: 100%;\n}\n.property-list ul {\n  list-style: none;\n  padding: 0;\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n  height: auto;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.property-list ul li {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100px;\n  float: left;\n  height: 89px;\n}\n.property-list ul li span {\n  width: 50px;\n  height: 50px;\n  float: left;\n  margin: 2px;\n}\n.property-list ul li span ion-img {\n  width: 100%;\n  border: solid 1px #aaaaaa;\n  padding: 5px;\n  border-radius: 50%;\n}\n.property-list ul li p {\n  margin: 0;\n  font-size: 14px;\n}\n.whatType {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LXR5cGUtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFFUDtBQUFJO0VBQ0csV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVQO0FBQ0k7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ1A7QUFBTztFQUNDLFVBQUE7QUFFUjtBQUFXO0VBQ0EsYUFBQTtBQUVYO0FBQU87RUFDSSxXQUFBO0FBRVg7QUFDTztFQUNDLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQU87RUFDQyxtQkFBQTtBQUVSO0FBQ087RUFDQyxpQkFBQTtBQUNSO0FBR0k7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRFA7QUFFTztFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUFYO0FBRU87RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUFYO0FBS0c7RUFDRCxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBRkY7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtBQUZGO0FBR0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUVJO0VBQ0UsZ0JBQUE7RUFDRixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNWO0FBRU07RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUFSO0FBS0E7RUFBVyxnQkFBQTtBQURYIiwiZmlsZSI6InByb3BlcnR5LXR5cGUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXItMDEucG5nJyk7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgZmEtaWNvbntcclxuICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIGRpdntcclxuICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNlM2UzZTM7XHJcbiAgICAgICB3aWR0aDogODglO1xyXG4gICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAucHJvcGVydHktaW1hZ2V7XHJcbiAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAudGV4dC1yZWR7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgIH1cclxuICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgIH1cclxuICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAvLyAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgIH1cclxuICAgICAgIC5saXN0LXR5cGV7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlM2UzZTMgO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgbGFiZWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICB9XHJcbiAgICAgICBsYWJlbDpsYXN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLnByb3BlcnR5LWJ0bntcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAuYnV5e1xyXG4gICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiNlM2UzZTM7XHJcbiAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIC5yZW50e1xyXG4gICAgICAgICAgIHdpZHRoOiAxMjBweDsgXHJcbiAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgIC0tYmFja2dyb3VuZDojZTNlM2UzO1xyXG4gICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG5cclxuICAgLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLmNoZWNrbWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcblxyXG4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICB0b3A6IDlweDtcclxuICBsZWZ0OiA5cHg7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1saXN0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBsaXtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA4OXB4O1xyXG4gICAgICBzcGFue1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjYWFhYWFhIDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcHtcclxuICAgICAgICBtYXJnaW46IDA7ICBcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLndoYXRUeXBleyBtYXJnaW4tdG9wOiAxNXB4O30iXX0= */";

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