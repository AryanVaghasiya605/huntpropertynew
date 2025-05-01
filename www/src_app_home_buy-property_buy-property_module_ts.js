"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_buy-property_buy-property_module_ts"],{

/***/ 37538:
/*!******************************************************************!*\
  !*** ./src/app/home/buy-property/buy-property-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyPropertyPageRoutingModule": () => (/* binding */ BuyPropertyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _buy_property_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-property.page */ 55870);




const routes = [
    {
        path: '',
        component: _buy_property_page__WEBPACK_IMPORTED_MODULE_0__.BuyPropertyPage
    }
];
let BuyPropertyPageRoutingModule = class BuyPropertyPageRoutingModule {
};
BuyPropertyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyPropertyPageRoutingModule);



/***/ }),

/***/ 93604:
/*!**********************************************************!*\
  !*** ./src/app/home/buy-property/buy-property.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyPropertyPageModule": () => (/* binding */ BuyPropertyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _buy_property_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-property-routing.module */ 37538);
/* harmony import */ var _buy_property_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-property.page */ 55870);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 28775);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var src_app_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/filter.pipe */ 66710);










let BuyPropertyPageModule = class BuyPropertyPageModule {
};
BuyPropertyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _buy_property_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyPropertyPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_buy_property_page__WEBPACK_IMPORTED_MODULE_1__.BuyPropertyPage, src_app_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe]
    })
], BuyPropertyPageModule);



/***/ }),

/***/ 55870:
/*!********************************************************!*\
  !*** ./src/app/home/buy-property/buy-property.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyPropertyPage": () => (/* binding */ BuyPropertyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _buy_property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-property.page.html?ngResource */ 26719);
/* harmony import */ var _buy_property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-property.page.scss?ngResource */ 13240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 42735);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 36457);









let BuyPropertyPage = class BuyPropertyPage {
    constructor(_mainSVC, fb, _route, geolocation) {
        this._mainSVC = _mainSVC;
        this.fb = fb;
        this._route = _route;
        this.geolocation = geolocation;
        this.faCarrot = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCaretDown;
        this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHome;
        this.imageUrlBasePath = 'https://www.huntproperty.com/';
        this.faIndianRupeeSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faIndianRupeeSign;
        this.status = -1;
        this.isFavorite = false;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck;
        this.showBedrooms = false;
        this.filteredDataValue = "";
        this.showFilter = false;
        this.updateBackground = 'buy';
        this.showCaretBuy = true;
        this.showCaretRent = false;
        this.segment = "Residential";
    }
    ngOnInit() {
        // console.log('byeeee');
        this.residentialsProperty = this.fb.group({
            PropertyFor: "Sell",
            Location: [''],
            min_ExpectedPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            max_ExpectedPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            minArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            maxArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            "limit": 10,
            "offset": 0
        });
        // console.log('byeeee2');
        this.commercialProperty = this.fb.group({
            min_ExpectedPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            max_ExpectedPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            minArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            maxArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
        const residentialData = {
            propertyfor: 'sell',
            propertytype: 'Residential'
        };
        // console.log('byeeee3');
        this._mainSVC.getResidentialPropertyList(residentialData).then((data) => {
            //  console.log(data);
            //  console.log('byeeee4');        
            let parseData = JSON.parse(data.data);
            // console.log('parseData', parseData);
            this.residentialsProp = parseData.PropertyCategory;
        }, (error) => {
            console.log(error);
        });
        const commercialData = {
            propertyfor: 'Rent',
            propertytype: 'Commercial'
        };
        this._mainSVC.getCommercialPropertyList(commercialData).then((data) => {
            // console.log(data);
            let parseData = JSON.parse(data.data);
            //  console.log('parseData', parseData.data);
            this.commercialProp = parseData.PropertyCategory;
            // if(data == 200){}
        });
    }
    buyPropertyTab(tabIndex) {
        // console.log(tabIndex)
        this.updateBackground = tabIndex;
        switch (tabIndex) {
            case 'buy':
                this.showCaretBuy = true;
                this.showCaretRent = false;
                break;
            case 'rent':
                this.showCaretRent = true;
                this.showCaretBuy = false;
                break;
            default:
                break;
        }
    }
    SearchProperty(ev) {
        this.showFilter = true;
        // console.log(ev.target.value)   
        this.filteredDataValue = ev.target.value;
        this.inputData = {
            search: ev.target.value
        };
        this._mainSVC.searchProperty(this.inputData).then((data) => {
            let parseData = JSON.parse(data.data);
            //  console.log(parseData.suggestions)
            this.filteredData = parseData.suggestions;
        });
    }
    selectFileredValue(val) {
        // console.log(val)
        this.filteredDataValue = val;
        this.residentialsProperty.get('Location').setValue(this.filteredDataValue);
        this.showFilter = false;
    }
    getCurrentLocation() {
        //  console.log('clicked');
        this.geolocation.getCurrentPosition().then((resp) => {
            //   console.log(resp.coords.latitude)
            resp.coords.latitude;
            resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // console.log(data)
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    }
    clickEvent(i, PropertyTypeID) {
        this.status = i;
        // console.log(i, PropertyTypeID);
        this._mainSVC.listProjectTypeSubCatageory(PropertyTypeID).then((data) => {
            let parseData = JSON.parse(data.data);
            //   console.log('listData', parseData.data);
            this.typeOfProperty = parseData.data;
            this.showBedrooms = true;
        });
    }
    segmentChanged(event) {
        // console.log('event', event.target.value);
        this.status = -1;
    }
    onSubmitResidential() {
        // console.log(this.residentialsProperty.value);
        // console.log('control',this.residentialsProperty)    ;
        this.residentialsProperty.statusChanges.subscribe(status => console.log('Form status: ', status));
        // this.residentialsProperty.get('Location').setValue(this.filteredDataValue);
        localStorage.setItem('propertyType', this.residentialsProp.value);
        this._route.navigate(['list-property', { residential: JSON.stringify(this.residentialsProperty.value) }]);
    }
    onSubmitCommercial() {
        // console.log(this.commercialProperty.value);
        localStorage.setItem('propertyType', this.residentialsProp.value);
        this._route.navigate(['list-property', { residential: JSON.stringify(this.commercialProperty.value) }]);
    }
};
BuyPropertyPage.ctorParameters = () => [
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation }
];
BuyPropertyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-buy-property',
        template: _buy_property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buy_property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuyPropertyPage);



/***/ }),

/***/ 66710:
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FilterPipe = class FilterPipe {
    transform(items, filterQuery) {
        // console.log(items, 'filter', filterQuery)
        if (!filterQuery)
            return items;
        if (items != undefined) {
            let nitems = items.filter(item => {
                return item.value.toString().toLowerCase().includes(filterQuery.toString().toLowerCase());
            });
            return nitems;
            // console.log(nitems)
        }
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ 13240:
/*!*********************************************************************!*\
  !*** ./src/app/home/buy-property/buy-property.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #e3e3e3;\n  --padding-top: 0px;\n}\nion-content .swiper {\n  padding-bottom: 15px;\n}\n.banner-bg {\n  --background: none;\n  background-image: url(\"/../assets/images/home-banner-bg.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.banner-bg .home-button-wrrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 26%;\n}\n.banner-bg .home-button-wrrapper .buy {\n  width: 70px;\n  height: 70px;\n  background: #666666;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-top: solid 2px #ffff;\n  border-left: solid 2px #ffff;\n  border-bottom: solid 2px #ffff;\n  border-right: solid 1px #ffff;\n  position: relative;\n}\n.banner-bg .home-button-wrrapper .buy .inner-span {\n  color: #ffff;\n  font-size: 13px;\n}\n.banner-bg .home-button-wrrapper .buy .icon-white {\n  color: #ffff;\n  font-size: 25px;\n}\n.banner-bg .home-button-wrrapper .buy ion-img {\n  width: 20px;\n  color: #ffff;\n}\n.banner-bg .home-button-wrrapper .buy fa-icon.faCarrot {\n  color: red;\n  position: absolute;\n  bottom: -33px;\n  left: 20px;\n  font-size: 46px;\n}\n.banner-bg .home-button-wrrapper .rent {\n  background: #666666;\n  width: 70px;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-top: solid 2px #ffff;\n  border-left: solid 1px #ffff;\n  border-bottom: solid 2px #ffff;\n  border-right: solid 2px #ffff;\n  position: relative;\n}\n.banner-bg .home-button-wrrapper .rent .inner-span {\n  color: #ffff;\n  font-size: 13px;\n}\n.banner-bg .home-button-wrrapper .rent .icon-white {\n  color: #ffff;\n  font-size: 25px;\n}\n.banner-bg .home-button-wrrapper .rent ion-img {\n  width: 20px;\n  color: #ffff;\n}\n.banner-bg .home-button-wrrapper .rent fa-icon.faCarrot {\n  color: red;\n  position: absolute;\n  bottom: -30px;\n  left: 20px;\n  font-size: 46px;\n}\n.banner-bg .home-button-wrrapper .active {\n  background-color: red;\n}\n.banner-bg .inputwrapper {\n  position: relative;\n  width: 82%;\n  display: block;\n  margin: auto;\n}\n.banner-bg .inputwrapper .inputText {\n  --background:#ffffff;\n  width: 100%;\n  margin: 20px auto;\n  -webkit-padding-start: 50px;\n  --padding-start:50px;\n  color: #6a6a6a;\n}\n.banner-bg .inputwrapper ion-icon {\n  position: absolute;\n  bottom: 0;\n  z-index: 9999999;\n  color: #000000;\n  top: 12px;\n  left: 20px;\n}\n.list_bg {\n  --background: #e3e3e3;\n  padding: 20px 0;\n  position: relative;\n}\n.list_bg .list_filter {\n  position: absolute;\n  z-index: 99;\n  background: #fff;\n  top: -20px;\n  width: 82%;\n  left: 32px;\n  height: 277px;\n  overflow: scroll;\n}\n.list_bg .list_filter ul {\n  padding-left: 15px;\n  list-style: none;\n}\n.list_bg .list_filter ul li {\n  color: #000;\n}\n.list-bg-segment {\n  padding-top: 0;\n}\n.slider-bottom.list_bg {\n  padding: 20px 0 0 10px;\n}\nion-segment-button {\n  --background:#f9f9f9;\n  --color:#aaaaaa;\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  text-transform: capitalize;\n  height: 40px;\n  min-height: 40px;\n}\nion-segment-button.segment-button-checked {\n  --background-checked: none;\n  border-bottom: 2px solid;\n}\n.buy-property-slider span {\n  display: inline-block;\n  position: relative;\n}\n.buy-property-slider span ion-img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: solid 1px #aaaaaa;\n  padding: 13px;\n  overflow: hidden;\n}\n.buy-property-slider span p {\n  color: #aaaaaa;\n  font-size: 12px;\n  font-weight: 400;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n.buy-property-slider span.active .activeId {\n  display: block;\n}\n.buy-property-slider span.not-active .activeId {\n  display: none;\n}\n.buy-property-slider .active {\n  font-size: 16px;\n  width: 20px;\n  height: 20px;\n  border: solid 1px red;\n  position: absolute;\n  right: 0;\n  top: 0;\n  border-radius: 50%;\n  z-index: 9;\n  color: #fff;\n  background: red;\n}\n.buy-property-slider .inner-span.not-selected {\n  background: transparent;\n  display: none;\n}\n.buy-range {\n  border-top: solid 2px #e3e3e3;\n}\n.buy-range ion-label {\n  color: #000000;\n  padding-left: 17px;\n}\n.buy-range ion-item {\n  --background:#ffff;\n}\n.buy-range ion-item ion-input {\n  --placeholder-color: #746a6a;\n  background: #e1e1e1;\n  --padding-start: 20px;\n  --webkit--padding-start:20px;\n  position: relative;\n  --padding-end:15px;\n}\n.buy-range ion-item fa-icon {\n  position: absolute;\n  left: 8px;\n  color: #746a6a;\n  z-index: 2;\n  opacity: 0.5;\n}\n.list_bg span.bedrooms {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.list_bg span.bedrooms ion-label ion-img {\n  width: 20px;\n  margin-right: 10px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.list_bg .property-type {\n  color: #aaaaaa;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 15px;\n}\n.submitBtn {\n  background-color: red;\n  color: #fff;\n  width: 50%;\n  margin: 0 auto;\n  display: block;\n}\n.submitBtn ion-content {\n  --background:#ffffff;\n  --padding-top:50px;\n}\n.submitBtn ion-content .web_error {\n  color: #e14b4c;\n  display: flex;\n  align-items: start;\n  justify-content: start;\n  margin-top: -10px;\n  font-size: 12px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS1wcm9wZXJ0eS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZlZW4lMjBrdW1hciUyMGthdGl5YXJcXE9uZURyaXZlXFxEZXNrdG9wXFxodW50bmV3XFxodW50cHJvcGVydHluZXdcXHNyY1xcYXBwXFxob21lXFxidXktcHJvcGVydHlcXGJ1eS1wcm9wZXJ0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLG9CQUFBO0FDRVI7QURDQTtFQUVJLGtCQUFBO0VBQ0QsNkRBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNDSDtBRENHO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0FDQUw7QURDSztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0NUO0FEQVM7RUFBYSxZQUFBO0VBQWMsZUFBQTtBQ0lwQztBREhTO0VBQWEsWUFBQTtFQUFjLGVBQUE7QUNPcEM7QUROUztFQUFTLFdBQUE7RUFBYSxZQUFBO0FDVS9CO0FEVFM7RUFDRyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNXWjtBRFBLO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDU1Q7QURSUztFQUFhLFlBQUE7RUFBYyxlQUFBO0FDWXBDO0FEWFM7RUFBYSxZQUFBO0VBQWMsZUFBQTtBQ2VwQztBRGRTO0VBQVMsV0FBQTtFQUFhLFlBQUE7QUNrQi9CO0FEakJTO0VBQ0csVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDbUJaO0FEaEJLO0VBQVMscUJBQUE7QUNtQmQ7QURqQkc7RUFDRSxrQkFBQTtFQUFtQixVQUFBO0VBQ25CLGNBQUE7RUFDQSxZQUFBO0FDb0JMO0FEbkJHO0VBQVcsb0JBQUE7RUFBc0IsV0FBQTtFQUFhLGlCQUFBO0VBQ3hDLDJCQUFBO0VBQTZCLG9CQUFBO0VBQXFCLGNBQUE7QUMwQjNEO0FEdkJRO0VBQ0Usa0JBQUE7RUFBbUIsU0FBQTtFQUNuQixnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzBCVjtBRHJCQztFQUNHLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDd0JKO0FEdkJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUN5QlI7QUR4QlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDMEJaO0FEekJZO0VBQ0ksV0FBQTtBQzJCaEI7QURyQkE7RUFDSSxjQUFBO0FDd0JKO0FEdEJBO0VBQ0ksc0JBQUE7QUN5Qko7QUR2QkE7RUFDSSxvQkFBQTtFQUNDLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUMwQkw7QUR4Qkk7RUFBMEMsMEJBQUE7RUFDdEMsd0JBQUE7QUM0QlI7QUR6Qkk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDNEJSO0FEMUJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDNEJaO0FEMUJRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzRCWjtBRHZCUTtFQUNJLGNBQUE7QUN5Qlo7QURyQlE7RUFDSSxhQUFBO0FDdUJaO0FEcEJJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNzQlI7QURuQkk7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUNxQlI7QURqQkE7RUFDSSw2QkFBQTtBQ29CSjtBRG5CSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ3FCUjtBRG5CSTtFQUNJLGtCQUFBO0FDcUJSO0FEbkJRO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDcUJaO0FEbEJRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDb0JaO0FEYkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JSO0FEYlE7RUFBUyxXQUFBO0VBQWEsa0JBQUE7RUFBbUIsb0JBQUE7RUFDckMsc0JBQUE7QUNrQlo7QURkQTtFQUFnQixjQUFBO0VBQ1osZUFBQTtFQUNBLGdCQUFBO0VBQWlCLGtCQUFBO0FDa0JyQjtBRGhCQTtFQUFZLHFCQUFBO0VBQ1IsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ29CSjtBRG5CSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNxQlI7QURwQlE7RUFBWSxjQUFBO0VBQ1IsYUFBQTtFQUNBLGtCQUFBO0VBQ0osc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3VCUiIsImZpbGUiOiJidXktcHJvcGVydHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAuc3dpcGVye1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5iYW5uZXItYmd7XHJcbiAgXHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iYW5uZXItYmcucG5nJyk7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICBcclxuICAgLmhvbWUtYnV0dG9uLXdycmFwcGVye1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICBcclxuICAgICBtYXJnaW4tdG9wOiAyNiU7XHJcbiAgICAgLmJ1eXtcclxuICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjZmZmZjtcclxuICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZmZmZjtcclxuICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmZmO1xyXG4gICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZmZmZjtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAuaW5uZXItc3BhbnsgY29sb3I6ICNmZmZmOyBmb250LXNpemU6IDEzcHg7fVxyXG4gICAgICAgICAuaWNvbi13aGl0ZXsgY29sb3I6ICNmZmZmOyBmb250LXNpemU6IDI1cHg7fVxyXG4gICAgICAgICBpb24taW1neyB3aWR0aDogMjBweDsgY29sb3I6ICNmZmZmO31cclxuICAgICAgICAgZmEtaWNvbi5mYUNhcnJvdHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IC0zM3B4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgIH0gICAgICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAucmVudHtcclxuICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjZmZmZjtcclxuICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZmZmZjtcclxuICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmZmO1xyXG4gICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjZmZmZjtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAuaW5uZXItc3BhbnsgY29sb3I6ICNmZmZmOyBmb250LXNpemU6IDEzcHg7fVxyXG4gICAgICAgICAuaWNvbi13aGl0ZXsgY29sb3I6ICNmZmZmOyBmb250LXNpemU6IDI1cHg7fVxyXG4gICAgICAgICBpb24taW1neyB3aWR0aDogMjBweDsgY29sb3I6ICNmZmZmO31cclxuICAgICAgICAgZmEtaWNvbi5mYUNhcnJvdHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgIH0gICAgIFxyXG4gICAgIH1cclxuICAgICAuYWN0aXZleyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7fVxyXG4gICB9XHJcbiAgIC5pbnB1dHdyYXBwZXJ7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO3dpZHRoOiA4MiU7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAuaW5wdXRUZXh0ey0tYmFja2dyb3VuZDojZmZmZmZmOyB3aWR0aDogMTAwJTsgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogNTBweDsgLS1wYWRkaW5nLXN0YXJ0OjUwcHg7Y29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ICAgIFxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTk7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gLmxpc3RfYmd7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubGlzdF9maWx0ZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICB3aWR0aDogODIlO1xyXG4gICAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzdweDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5saXN0LWJnLXNlZ21lbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4uc2xpZGVyLWJvdHRvbS5saXN0X2Jne1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMTBweDtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6I2Y5ZjlmOTtcclxuICAgICAtLWNvbG9yOiNhYWFhYWE7XHJcbiAgICAgLS1pbmRpY2F0b3ItY29sb3IgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHstLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZDtcclxuICAgICAgIH1cclxuLmJ1eS1wcm9wZXJ0eS1zbGlkZXJ7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBcclxuICAgICAgICBpb24taW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNhYWFhYWE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzcGFuLmFjdGl2ZXtcclxuICAgICAgICAuYWN0aXZlSWR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ubm90LWFjdGl2ZXtcclxuICAgICAgICAuYWN0aXZlSWR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGl2ZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlubmVyLXNwYW4ubm90LXNlbGVjdGVke1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXktcmFuZ2V7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAycHggI2UzZTNlMztcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2ZmZmY7XHJcbiAgICAgICBcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM3NDZhNmE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgICAgICAgICAgLS13ZWJraXQtLXBhZGRpbmctc3RhcnQ6MjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOjE1cHg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZhLWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc0NmE2YTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAvLyB0b3A6MzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuLmxpc3RfYmd7XHJcbiAgICBzcGFuLmJlZHJvb21ze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG5cclxuICAgICAgICBpb24taW1neyB3aWR0aDogMjBweDsgbWFyZ2luLXJpZ2h0OiAxMHB4O2Rpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5wcm9wZXJ0eS10eXBleyBjb2xvcjogI2FhYWFhYTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7cGFkZGluZy1sZWZ0OiAxNXB4O31cclxufVxyXG4uc3VibWl0QnRueyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDo1MHB4O1xyXG4gICAgICAgIC53ZWJfZXJyb3J7IGNvbG9yOiNlMTRiNGM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgICAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7fSBcclxuICAgIH1cclxufVxyXG4gICAgIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbn1cbmlvbi1jb250ZW50IC5zd2lwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmJhbm5lci1iZyB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iYW5uZXItYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5iYW5uZXItYmcgLmhvbWUtYnV0dG9uLXdycmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI2JTtcbn1cbi5iYW5uZXItYmcgLmhvbWUtYnV0dG9uLXdycmFwcGVyIC5idXkge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNmZmZmO1xuICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmZmZmO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZmY7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNmZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFubmVyLWJnIC5ob21lLWJ1dHRvbi13cnJhcHBlciAuYnV5IC5pbm5lci1zcGFuIHtcbiAgY29sb3I6ICNmZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYmFubmVyLWJnIC5ob21lLWJ1dHRvbi13cnJhcHBlciAuYnV5IC5pY29uLXdoaXRlIHtcbiAgY29sb3I6ICNmZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uYmFubmVyLWJnIC5ob21lLWJ1dHRvbi13cnJhcHBlciAuYnV5IGlvbi1pbWcge1xuICB3aWR0aDogMjBweDtcbiAgY29sb3I6ICNmZmZmO1xufVxuLmJhbm5lci1iZyAuaG9tZS1idXR0b24td3JyYXBwZXIgLmJ1eSBmYS1pY29uLmZhQ2Fycm90IHtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zM3B4O1xuICBsZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDQ2cHg7XG59XG4uYmFubmVyLWJnIC5ob21lLWJ1dHRvbi13cnJhcHBlciAucmVudCB7XG4gIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggI2ZmZmY7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2ZmZmY7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmZmZjtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggI2ZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYW5uZXItYmcgLmhvbWUtYnV0dG9uLXdycmFwcGVyIC5yZW50IC5pbm5lci1zcGFuIHtcbiAgY29sb3I6ICNmZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYmFubmVyLWJnIC5ob21lLWJ1dHRvbi13cnJhcHBlciAucmVudCAuaWNvbi13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmJhbm5lci1iZyAuaG9tZS1idXR0b24td3JyYXBwZXIgLnJlbnQgaW9uLWltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBjb2xvcjogI2ZmZmY7XG59XG4uYmFubmVyLWJnIC5ob21lLWJ1dHRvbi13cnJhcHBlciAucmVudCBmYS1pY29uLmZhQ2Fycm90IHtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDQ2cHg7XG59XG4uYmFubmVyLWJnIC5ob21lLWJ1dHRvbi13cnJhcHBlciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmJhbm5lci1iZyAuaW5wdXR3cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODIlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJhbm5lci1iZyAuaW5wdXR3cmFwcGVyIC5pbnB1dFRleHQge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDUwcHg7XG4gIC0tcGFkZGluZy1zdGFydDo1MHB4O1xuICBjb2xvcjogIzZhNmE2YTtcbn1cbi5iYW5uZXItYmcgLmlucHV0d3JhcHBlciBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAyMHB4O1xufVxuXG4ubGlzdF9iZyB7XG4gIC0tYmFja2dyb3VuZDogI2UzZTNlMztcbiAgcGFkZGluZzogMjBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGlzdF9iZyAubGlzdF9maWx0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3A6IC0yMHB4O1xuICB3aWR0aDogODIlO1xuICBsZWZ0OiAzMnB4O1xuICBoZWlnaHQ6IDI3N3B4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmxpc3RfYmcgLmxpc3RfZmlsdGVyIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3RfYmcgLmxpc3RfZmlsdGVyIHVsIGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5saXN0LWJnLXNlZ21lbnQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNsaWRlci1ib3R0b20ubGlzdF9iZyB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDEwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDojZjlmOWY5O1xuICAtLWNvbG9yOiNhYWFhYWE7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG5cbi5idXktcHJvcGVydHktc2xpZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idXktcHJvcGVydHktc2xpZGVyIHNwYW4gaW9uLWltZyB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYTtcbiAgcGFkZGluZzogMTNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idXktcHJvcGVydHktc2xpZGVyIHNwYW4gcCB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5idXktcHJvcGVydHktc2xpZGVyIHNwYW4uYWN0aXZlIC5hY3RpdmVJZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJ1eS1wcm9wZXJ0eS1zbGlkZXIgc3Bhbi5ub3QtYWN0aXZlIC5hY3RpdmVJZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnV5LXByb3BlcnR5LXNsaWRlciAuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuLmJ1eS1wcm9wZXJ0eS1zbGlkZXIgLmlubmVyLXNwYW4ubm90LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idXktcmFuZ2Uge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggI2UzZTNlMztcbn1cbi5idXktcmFuZ2UgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctbGVmdDogMTdweDtcbn1cbi5idXktcmFuZ2UgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2ZmZmY7XG59XG4uYnV5LXJhbmdlIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM3NDZhNmE7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS13ZWJraXQtLXBhZGRpbmctc3RhcnQ6MjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLXBhZGRpbmctZW5kOjE1cHg7XG59XG4uYnV5LXJhbmdlIGlvbi1pdGVtIGZhLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgY29sb3I6ICM3NDZhNmE7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmxpc3RfYmcgc3Bhbi5iZWRyb29tcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGlzdF9iZyBzcGFuLmJlZHJvb21zIGlvbi1sYWJlbCBpb24taW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubGlzdF9iZyAucHJvcGVydHktdHlwZSB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zdWJtaXRCdG4gaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1wYWRkaW5nLXRvcDo1MHB4O1xufVxuLnN1Ym1pdEJ0biBpb24tY29udGVudCAud2ViX2Vycm9yIHtcbiAgY29sb3I6ICNlMTRiNGM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 26719:
/*!*********************************************************************!*\
  !*** ./src/app/home/buy-property/buy-property.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Tab 1 small\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar class=\"banner-bg\">\r\n    <ion-label class=\"home-button-wrrapper\">\r\n      <span class=\"buy active\" routerLink=\"/splash/tabs/home/buy-property\" (click)=\"buyPropertyTab('buy')\"\r\n      [ngClass]=\"{'active': updateBackground == 'buy'}\">\r\n        <ion-icon class=\"icon-white\" lines=\"none\" name=\"buy\"></ion-icon>\r\n        <span class=\"inner-span\">BUY</span>\r\n        <span *ngIf=\"showCaretBuy\">         \r\n          <fa-icon class=\"faCarrot\" [icon]=\"faCarrot\"></fa-icon>               \r\n        </span>\r\n      </span>\r\n      <span class=\"rent\" routerLink=\"/splash/tabs/home/buy-property\"\r\n      (click)=\"buyPropertyTab('rent')\"\r\n      [ngClass]=\"{'active': updateBackground == 'rent'}\">\r\n        <ion-icon class=\"icon-white\" lines=\"none\" name=\"rent\"></ion-icon>\r\n        <span class=\"inner-span\">RENT</span>\r\n        <span *ngIf=\"showCaretRent\">         \r\n          <fa-icon class=\"faCarrot\" [icon]=\"faCarrot\"></fa-icon>               \r\n        </span>\r\n      </span>\r\n    </ion-label>\r\n    <span class=\"inputwrapper\">\r\n      <ion-input type=\"text\" class=\"inputText\" (keyup)=\"SearchProperty($event)\" value=\"{{filteredDataValue}}\"  placeholder=\"search your property here..\"></ion-input>\r\n      <ion-icon name=\"location\" (click)=\"getCurrentLocation()\"></ion-icon>      \r\n    </span>\r\n  </ion-toolbar>\r\n  <div class=\"list_bg list-bg-segment\" lines=\"none\">\r\n    <span class=\"list_filter\" *ngIf=\"showFilter\">\r\n      <ul  *ngFor=\"let items of filteredData | filter :filteredDataValue\">\r\n        <li (click)=\"selectFileredValue(items.value)\">\r\n          {{items.value}}\r\n        </li>\r\n    </ul>\r\n    </span>\r\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">    \r\n      <ion-segment-button value=\"Residential\">\r\n        Residential\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Commercial\">\r\n        Commercial\r\n      </ion-segment-button>\r\n      \r\n  \r\n    </ion-segment>\r\n  \r\n  \r\n    <div [ngSwitch]=\"segment\">\r\n      \r\n        <div class=\"slider-bottom list_bg\" *ngSwitchCase=\"'Residential'\">\r\n          \r\n          <swiper\r\n          [spaceBetween]=\"5\"\r\n          [slidesPerView]=\"4.9\"\r\n          [centeredSlides]=\"false\"     \r\n          [navigation]=\"false\"          \r\n          \r\n          class=\"mySwiper buy-property-slider\"  >\r\n          <ng-container *ngFor=\"let residentials of residentialsProp; let i = index\">\r\n            <ng-template  swiperSlide>\r\n              <span  (click)=\"clickEvent(i, residentials.PropertyTypeID)\">              \r\n              <ion-img src=\"{{residentials.image}}\" alt=\"image missing\"></ion-img>           \r\n              <p>{{residentials.PropertySubCategory}}</p>\r\n              <fa-icon *ngIf=\"status == i\" class=\"active\" [icon]=\"faCheck\"></fa-icon>\r\n             \r\n            </span>\r\n            </ng-template>\r\n            <span slot=\"wrapper-end\">Wrapper End</span>\r\n          </ng-container>\r\n          </swiper>\r\n          <form [formGroup]=\"residentialsProperty\" (ngSubmit)=\"onSubmitResidential()\">\r\n                    <div class=\"buy-range list_bg\">\r\n                      <ion-label>Price Range</ion-label>\r\n                        \r\n                    <ion-item lines=\"none\">      \r\n                      <ion-item lines=\"none\" class=\"padd-0\">\r\n                        <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Min\" formControlName=\"min_ExpectedPrice\"></ion-input>\r\n                        <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n                      </ion-item>                      \r\n                      <ion-item lines=\"none\" class=\"padd-0 inner-padding-end-0\">\r\n                        <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Max\" formControlName=\"max_ExpectedPrice\"></ion-input>\r\n                        <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n                      </ion-item>                      \r\n                    </ion-item>\r\n                    <ion-label>\r\n                      <div  class=\"web_error\" *ngIf=\"residentialsProperty.controls['min_ExpectedPrice'].invalid && (residentialsProperty.controls['min_ExpectedPrice'].dirty || residentialsProperty.controls['min_ExpectedPrice'].touched)\" >\r\n                      <div *ngIf=\"residentialsProperty.controls['min_ExpectedPrice'].errors.required\">*Min expected price is required</div>            \r\n                      </div>\r\n                    </ion-label>\r\n                  <ion-label>\r\n                    <div  class=\"web_error\" *ngIf=\"residentialsProperty.controls['max_ExpectedPrice'].invalid && (residentialsProperty.controls['max_ExpectedPrice'].dirty || residentialsProperty.controls['max_ExpectedPrice'].touched)\" >\r\n                      <div *ngIf=\"residentialsProperty.controls['max_ExpectedPrice'].errors.required\">*Max expected price is required</div>            \r\n                    </div>\r\n                  </ion-label>\r\n                  \r\n                  </div>\r\n       \r\n                    <div class=\"buy-range list_bg\">   \r\n                        <ion-label>Area</ion-label>   \r\n                      \r\n                      <ion-item lines=\"none\">      \r\n                        <ion-item lines=\"none\" class=\"padd-0\">\r\n                          <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Min\" formControlName=\"minArea\"></ion-input>\r\n                          <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n                        </ion-item>                        \r\n                        <ion-item lines=\"none\" class=\"padd-0 inner-padding-end-0\">\r\n                          <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Max\" formControlName=\"maxArea\"></ion-input>\r\n                          <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n                        </ion-item>                        \r\n                      </ion-item>\r\n                      <ion-label>\r\n                        <div  class=\"web_error\" *ngIf=\"residentialsProperty.controls['minArea'].invalid && (residentialsProperty.controls['minArea'].dirty || residentialsProperty.controls['minArea'].touched)\" >\r\n                          <div *ngIf=\"residentialsProperty.controls['minArea'].errors.required\">*Min area is required</div>            \r\n                        </div>\r\n                      </ion-label>\r\n                      <ion-label>\r\n                        <div  class=\"web_error\" *ngIf=\"residentialsProperty.controls['maxArea'].invalid && (residentialsProperty.controls['maxArea'].dirty || residentialsProperty.controls['maxArea'].touched)\" >\r\n                          <div *ngIf=\"residentialsProperty.controls['maxArea'].errors.required\">*Max area is required</div>            \r\n                      </div>\r\n                      </ion-label>\r\n                    </div>\r\n\r\n         <div class=\"buy-range list_bg\"> \r\n         \r\n        <span class=\"bedrooms\" *ngIf=\"showBedrooms === true\">\r\n          <ion-label><ion-img src=\"../../assets/images/icons/svg/bedrooms.svg\" alt=\"image missing\"></ion-img>\r\n            Bedrooms</ion-label>            \r\n        </span> \r\n        <ng-container *ngIf=\"showBedrooms === true\">\r\n        <span *ngFor=\"let property of typeOfProperty\">\r\n          <span class=\"property-type\">{{property.ProjectSubCategory}}</span>\r\n        </span>\r\n      </ng-container>\r\n      \r\n      </div>\r\n      <ion-item lines=\"none\">\r\n        <ion-text color=\"danger\">\r\n          <p>All fields are mandatory. Please provide all informations</p>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-button type=\"submit\" class=\"submitBtn\" >Submit</ion-button>\r\n    </form>\r\n         </div>\r\n      \r\n    \r\n      <div class=\"slider-bottom list_bg\" *ngSwitchCase=\"'Commercial'\">\r\n        <swiper\r\n        [spaceBetween]=\"5\"\r\n        [slidesPerView]=\"4.9\"\r\n        [centeredSlides]=\"false\"     \r\n        [navigation]=\"false\"          \r\n        \r\n        class=\"mySwiper buy-property-slider\">\r\n\r\n        <ng-container *ngFor=\"let residentials of commercialProp; let i = index\">\r\n          <ng-template  swiperSlide>\r\n            <span  (click)=\"clickEvent(i, residentials.PropertyTypeID)\">              \r\n            <ion-img src=\"{{residentials.image}}\" alt=\"image missing\"></ion-img>           \r\n            <p>{{residentials.PropertySubCategory}}</p>\r\n            <fa-icon *ngIf=\"status == i\" class=\"active\" [icon]=\"faCheck\"></fa-icon>\r\n            <!-- <span *ngIf=\"status == i\" class=\"active\">\r\n              \r\n            </span> -->\r\n          </span>\r\n          </ng-template>\r\n          <span slot=\"wrapper-end\">Wrapper End</span>\r\n        </ng-container>\r\n        </swiper>\r\n        <form [formGroup]=\"commercialProperty\" (ngSubmit)=\"onSubmitCommercial()\">\r\n        <div class=\"buy-range list_bg\">\r\n          <ion-label>Price Range</ion-label>\r\n            \r\n         <ion-item lines=\"none\">      \r\n           <ion-item lines=\"none\" class=\"padd-0\">\r\n             <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Min\" formControlName=\"min_ExpectedPrice\"></ion-input>\r\n             <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n           </ion-item>           \r\n           <ion-item lines=\"none\" class=\"padd-0 inner-padding-end-0\">\r\n             <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Max\" formControlName=\"max_ExpectedPrice\"></ion-input>\r\n             <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n           </ion-item>           \r\n         </ion-item>\r\n         <ion-label>\r\n            <div  class=\"web_error\" *ngIf=\"commercialProperty.controls['min_ExpectedPrice'].invalid && (commercialProperty.controls['min_ExpectedPrice'].dirty || commercialProperty.controls['min_ExpectedPrice'].touched)\" >\r\n              <div *ngIf=\"commercialProperty.controls['min_ExpectedPrice'].errors.required\">*Min Expected price is required</div>            \r\n          </div>\r\n         </ion-label>\r\n         <ion-label>\r\n            <div  class=\"web_error\" *ngIf=\"commercialProperty.controls['max_ExpectedPrice'].invalid && (commercialProperty.controls['max_ExpectedPrice'].dirty || commercialProperty.controls['max_ExpectedPrice'].touched)\" >\r\n              <div *ngIf=\"commercialProperty.controls['max_ExpectedPrice'].errors.required\">*Max Expected price is required</div>            \r\n            </div>\r\n         </ion-label>\r\n       </div>\r\n     \r\n       <div class=\"buy-range list_bg\">   \r\n           <ion-label>Area</ion-label>   \r\n        \r\n         <ion-item lines=\"none\">      \r\n           <ion-item lines=\"none\" class=\"padd-0\">\r\n             <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Min\" formControlName=\"minArea\"></ion-input>\r\n             <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n           </ion-item>\r\n           \r\n           <ion-item lines=\"none\" class=\"padd-0 inner-padding-end-0\">\r\n             <ion-input inputmode=\"numeric\" type=\"number\" placeholder=\"Max\" formControlName=\"maxArea\"></ion-input>\r\n             <fa-icon [icon]=\"faIndianRupeeSign\"></fa-icon>\r\n           </ion-item>\r\n           \r\n         </ion-item> \r\n         <ion-label>\r\n          <div  class=\"web_error\" *ngIf=\"commercialProperty.controls['minArea'].invalid && (commercialProperty.controls['minArea'].dirty || commercialProperty.controls['minArea'].touched)\" >\r\n            <div *ngIf=\"commercialProperty.controls['minArea'].errors.required\">*Min area is required</div>            \r\n          </div>\r\n         </ion-label>\r\n         <ion-label>\r\n          <div  class=\"web_error\" *ngIf=\"commercialProperty.controls['maxArea'].invalid && (commercialProperty.controls['maxArea'].dirty || commercialProperty.controls['maxArea'].touched)\" >\r\n            <div *ngIf=\"commercialProperty.controls['maxArea'].errors.required\">*Max area is required</div>            \r\n          </div>\r\n         </ion-label>        \r\n       </div>\r\n       <div class=\"buy-range list_bg\"> \r\n         \r\n        <span class=\"bedrooms\" *ngIf=\"showBedrooms === true\">\r\n          <ion-label><ion-img src=\"../../assets/images/icons/svg/bedrooms.svg\" alt=\"image missing\"></ion-img>\r\n            Bedrooms</ion-label>            \r\n        </span> \r\n        <ng-container *ngIf=\"showBedrooms === true\">\r\n        <span *ngFor=\"let property of typeOfProperty\">\r\n          <span class=\"property-type\">{{property.ProjectSubCategory}}</span>\r\n        </span>\r\n      </ng-container>\r\n      <ion-item lines=\"none\">\r\n        <ion-text color=\"danger\">\r\n          <p>All fields are mandatory. Please provide all informations</p>\r\n        </ion-text>\r\n      </ion-item>\r\n      </div>\r\n       <ion-button type=\"submit\" class=\"submitBtn\">Submit</ion-button>\r\n        </form>\r\n      </div>\r\n  \r\n      </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_buy-property_buy-property_module_ts.js.map