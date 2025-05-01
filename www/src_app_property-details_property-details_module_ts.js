"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_property-details_property-details_module_ts"],{

/***/ 20121:
/*!*********************************************************************!*\
  !*** ./src/app/property-details/property-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyDetailsPageRoutingModule": () => (/* binding */ PropertyDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _property_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-details.page */ 88297);




const routes = [
    {
        path: '',
        component: _property_details_page__WEBPACK_IMPORTED_MODULE_0__.PropertyDetailsPage
    }
];
let PropertyDetailsPageRoutingModule = class PropertyDetailsPageRoutingModule {
};
PropertyDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PropertyDetailsPageRoutingModule);



/***/ }),

/***/ 70242:
/*!*************************************************************!*\
  !*** ./src/app/property-details/property-details.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyDetailsPageModule": () => (/* binding */ PropertyDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _property_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-details-routing.module */ 20121);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _property_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-details.page */ 88297);








let PropertyDetailsPageModule = class PropertyDetailsPageModule {
};
PropertyDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _property_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropertyDetailsPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_property_details_page__WEBPACK_IMPORTED_MODULE_1__.PropertyDetailsPage]
    })
], PropertyDetailsPageModule);



/***/ }),

/***/ 88297:
/*!***********************************************************!*\
  !*** ./src/app/property-details/property-details.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyDetailsPage": () => (/* binding */ PropertyDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _property_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-details.page.html?ngResource */ 85564);
/* harmony import */ var _property_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-details.page.scss?ngResource */ 17163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ 42735);







let PropertyDetailsPage = class PropertyDetailsPage {
    constructor(_route, _mainSvc, router) {
        this._route = _route;
        this._mainSvc = _mainSvc;
        this.router = router;
        this.faArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowLeft;
        this.faIndianRupee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faIndianRupee;
        this.faMessage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMessage;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this._route.params.subscribe((data) => {
            // console.log(data)
            let parseData = JSON.parse(data.id);
            this.lat = data.lat;
            this.long = data.long;
            let getId = {
                Id: parseData
            };
            //   console.log('listing', parseData);      
            this._mainSvc.getPropertyDetails(getId).then((data) => {
                let parseData = JSON.parse(data.data);
                this.propertyDetails = parseData;
                //   console.log('propertyDetails', this.propertyDetails)
                this.propertyDetails.attr.forEach(element => {
                    //    console.log(element); 
                    if (element.AttributeName == 'Expected Price') {
                        return this.expectedPrice = element.value;
                    }
                    else if (element.AttributeName == 'Floor Number') {
                        return this.floorNumber = element.value;
                    }
                    else if (element.AttributeName == 'Bedrooms') {
                        return this.bedRooms = element.value;
                    }
                    else if (element.AttributeName == 'Carpet Area') {
                        return this.carpetArea = element.value;
                    }
                    else if (element.AttributeName == 'Built Up Area') {
                        return this.builtUpArea = element.value;
                    }
                    else if (element.AttributeName == 'Super Area') {
                        return this.superArea = element.value;
                    }
                    else if (element.AttributeName == 'Age Of Construction') {
                        return this.constructionAge = element.value;
                    }
                    else if (element.AttributeName == 'Transaction Type') {
                        return this.transactionType = element.value;
                    }
                    else if (element.AttributeName == 'Possession Status') {
                        return this.possessionStatus = element.value;
                    }
                    else if (element.AttributeName == 'Finishing Status') {
                        return this.finishingStatus = element.value;
                    }
                    else if (element.AttributeName == 'Type Of Ownership') {
                        return this.ownerShip = element.value;
                    }
                });
            });
        });
    }
    ionViewDidEnter() {
        this.showMap();
    }
    redirectToSendMessage(sendUserId) {
        this.router.navigate(['/messages/send-message', { id: sendUserId }]);
    }
    showMap() {
        let location = new google.maps.LatLng(this.lat, this.long);
        const options = {
            center: location,
            zoom: 15,
            disabledDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    }
};
PropertyDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PropertyDetailsPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef, static: false },] }]
};
PropertyDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-property-details',
        template: _property_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_property_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertyDetailsPage);



/***/ }),

/***/ 17163:
/*!************************************************************************!*\
  !*** ./src/app/property-details/property-details.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".list-img {\n  position: relative;\n}\n.list-img img {\n  width: 100%;\n}\n.list-img fa-icon {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n}\n.bg-white {\n  background: #fff;\n  display: flex;\n  width: 100%;\n  padding: 15px 15px;\n}\n.bg-white span {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n.bg-white span img {\n  width: 100%;\n}\n.bg-white span h6 {\n  margin: 0;\n  font-size: 12px;\n  color: #aaaaaa;\n}\n.bg-white .right-content {\n  display: flex;\n  width: 100%;\n  color: #000;\n}\n.bg-white .right-content span {\n  width: 55%;\n  height: auto;\n}\n.bg-white .right-content span div {\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.bg-white .right-content span div button {\n  background: red;\n  height: 40px;\n  border-radius: 5px;\n  padding: 0 10px;\n}\n.bg-white .right-content span .bedroom {\n  margin-top: 26px;\n}\n.bg-white .right-content span:nth-child(2) {\n  margin-right: 0;\n  width: 45%;\n}\n.property-detail-wrapper .property-detail {\n  margin-top: 10px;\n  background: #fff;\n  padding-top: 15px;\n}\n.property-detail-wrapper .property-detail label {\n  color: #000;\n  padding-left: 15px;\n}\n.property-detail-wrapper .property-detail p {\n  color: #000;\n  padding: 15px;\n  margin: 0;\n}\n.property-detail-wrapper .property-detail .right-content {\n  position: relative;\n  padding-bottom: 10px;\n}\n.property-detail-wrapper .property-detail .right-content .border-bottom {\n  border-bottom: solid 1px #aaaaaa;\n  padding: 1px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  width: 80%;\n}\n.bg-white .right-content {\n  position: relative;\n  padding-bottom: 10px;\n}\n.bg-white .right-content .border-bottom {\n  border-bottom: solid 1px #aaaaaa;\n  padding: 1px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  width: 80%;\n}\n.buttons {\n  position: fixed;\n  height: 50px;\n  z-index: 9;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n}\n.buttons ion-button {\n  width: 50%;\n  height: 50px;\n  margin: 0;\n}\n.buttons ion-button fa-icon {\n  font-size: 23px;\n  margin-right: 5px;\n}\n.buttons ion-button.enq {\n  margin-right: 10px;\n}\n.bold {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWRldGFpbHMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZlZW4lMjBrdW1hciUyMGthdGl5YXJcXE9uZURyaXZlXFxEZXNrdG9wXFxodW50bmV3XFxodW50cHJvcGVydHluZXdcXHNyY1xcYXBwXFxwcm9wZXJ0eS1kZXRhaWxzXFxwcm9wZXJ0eS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0VSO0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDRyxXQUFBO0FDR1g7QUREUTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0daO0FEQUk7RUFBZ0IsYUFBQTtFQUFlLFdBQUE7RUFDM0IsV0FBQTtBQ0lSO0FESEk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0tSO0FESlE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNNWjtBRExZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNPaEI7QURMUTtFQUNJLGdCQUFBO0FDT1o7QURISTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FDS1I7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUNBUjtBRENRO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDUjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQ05SO0FET1E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0xaO0FEVUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNQSjtBRFFJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDTlI7QURPUTtFQUNJLGVBQUE7RUFDUixpQkFBQTtBQ0xKO0FEUUk7RUFDSSxrQkFBQTtBQ05SO0FEU0E7RUFDSSxnQkFBQTtBQ05KIiwiZmlsZSI6InByb3BlcnR5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgZmEtaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uYmctd2hpdGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodC1jb250ZW50eyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4OyAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZWRyb29te1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtd3JhcHBlcntcclxuXHJcbi5wcm9wZXJ0eS1kZXRhaWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5yaWdodC1jb250ZW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAuYm9yZGVyLWJvdHRvbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2FhYWFhYTtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxufVxyXG5cclxuLmJnLXdoaXRle1xyXG4gICAgLnJpZ2h0LWNvbnRlbnR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgLmJvcmRlci1ib3R0b217XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYWFhYWFhO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJ1dHRvbnN7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbi5lbnF7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi5ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSIsIi5saXN0LWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saXN0LWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5saXN0LWltZyBmYS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG59XG4uYmctd2hpdGUgc3BhbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5iZy13aGl0ZSBzcGFuIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJnLXdoaXRlIHNwYW4gaDYge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWFhYWE7XG59XG4uYmctd2hpdGUgLnJpZ2h0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwMDA7XG59XG4uYmctd2hpdGUgLnJpZ2h0LWNvbnRlbnQgc3BhbiB7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5iZy13aGl0ZSAucmlnaHQtY29udGVudCBzcGFuIGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJnLXdoaXRlIC5yaWdodC1jb250ZW50IHNwYW4gZGl2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5iZy13aGl0ZSAucmlnaHQtY29udGVudCBzcGFuIC5iZWRyb29tIHtcbiAgbWFyZ2luLXRvcDogMjZweDtcbn1cbi5iZy13aGl0ZSAucmlnaHQtY29udGVudCBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnByb3BlcnR5LWRldGFpbC13cmFwcGVyIC5wcm9wZXJ0eS1kZXRhaWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5wcm9wZXJ0eS1kZXRhaWwtd3JhcHBlciAucHJvcGVydHktZGV0YWlsIGxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5wcm9wZXJ0eS1kZXRhaWwtd3JhcHBlciAucHJvcGVydHktZGV0YWlsIHAge1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnByb3BlcnR5LWRldGFpbC13cmFwcGVyIC5wcm9wZXJ0eS1kZXRhaWwgLnJpZ2h0LWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnByb3BlcnR5LWRldGFpbC13cmFwcGVyIC5wcm9wZXJ0eS1kZXRhaWwgLnJpZ2h0LWNvbnRlbnQgLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2FhYWFhYTtcbiAgcGFkZGluZzogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5iZy13aGl0ZSAucmlnaHQtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYmctd2hpdGUgLnJpZ2h0LWNvbnRlbnQgLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2FhYWFhYTtcbiAgcGFkZGluZzogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5idXR0b25zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDk7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDA7XG59XG4uYnV0dG9ucyBpb24tYnV0dG9uIGZhLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmJ1dHRvbnMgaW9uLWJ1dHRvbi5lbnEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";

/***/ }),

/***/ 85564:
/*!************************************************************************!*\
  !*** ./src/app/property-details/property-details.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Tab 1 small\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar class=\"list-img\">\r\n   <img src=\"../../assets/images/proList.PNG\" alt=\"image missing\">\r\n    <fa-icon [icon]=\"faArrow\" routerLink=\"/posted-property\"></fa-icon>\r\n  </ion-toolbar>\r\n \r\n  <div class=\"bg-white\" lines=\"none\">\r\n    <span>\r\n      <img src=\"../../assets/images/icons/svg/user-avatar.svg\" alt=\"image missing\">\r\n    </span>\r\n    <div class=\"right-content\">\r\n    <span>\r\n      <div>Owner</div>\r\n      <div>{{propertyDetails?.UserName}}</div>\r\n      <h6>Posted on: {{propertyDetails?.CreatedOn | date: 'mediumDate' }}</h6>\r\n    </span>\r\n    <span>\r\n      <div>9899095939</div>\r\n      <div><button type=\"submit\">View Phone no.</button></div>\r\n    </span>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"property-detail-wrapper\">\r\n  <div class=\"property-detail\">\r\n    <label>Property details</label>\r\n  <div class=\"bg-white\" lines=\"none\">\r\n   \r\n    <span>\r\n      <img src=\"../../assets/images/icons/price.png\" alt=\"image missing\">\r\n    </span>\r\n    <div class=\"right-content\">\r\n    <span>\r\n      <div>Price</div>\r\n      <div><fa-icon [icon]=\"faIndianRupee\"></fa-icon><span class=\"bold\">{{expectedPrice}}</span></div>\r\n      <!-- <h6>Posted on: may 08, 2021</h6> -->\r\n    </span>\r\n    <span>\r\n      <div>Property For</div>\r\n      <div class=\"bold\">{{propertyDetails?.PropertyFor}}</div>\r\n    </span>\r\n    <div class=\"border-bottom\"></div>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"bg-white\" lines=\"none\">\r\n \r\n  <span>\r\n    <img src=\"../../assets/images/icons/configuration.png\" alt=\"image missing\">\r\n  </span>\r\n  <div class=\"right-content\">\r\n    \r\n  <span>    \r\n    <div>Configuration</div>\r\n    <div>Floors</div>\r\n    <div class=\"bold\">{{floorNumber}}</div>\r\n    <!-- <h6>Posted on: may 08, 2021</h6> -->\r\n  </span>\r\n  <span>\r\n    <div class=\"bedroom\">Bedrooms</div>\r\n    <div class=\"bold\">{{bedRooms}}</div>\r\n  </span>\r\n  <div class=\"border-bottom\"></div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"bg-white\" lines=\"none\">\r\n \r\n  <span>\r\n    <img src=\"../../assets/images/icons/area.png\" alt=\"image missing\">\r\n  </span>\r\n  <div class=\"right-content\">\r\n    \r\n  <span> \r\n    <div>Area</div>   \r\n    <div>Super Buildup area - <span class=\"bold\">{{superArea}}</span></div>\r\n    <div>Carpet Area- <span class=\"bold\">{{carpetArea}}</span></div>\r\n    \r\n    <!-- <h6>Posted on: may 08, 2021</h6> -->\r\n  </span>\r\n  <span>\r\n    <div class=\"bedroom\">BuiltUp Area</div>\r\n    <div class=\"bold\">{{builtUpArea}} Sqft</div>\r\n  </span>\r\n  <div class=\"border-bottom\"></div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"bg-white\" lines=\"none\">\r\n \r\n  <span>\r\n    <img src=\"../../assets/images/icons/status.png\" alt=\"image missing\">\r\n  </span>\r\n  <div class=\"right-content\">\r\n    \r\n  <span> \r\n    <div>Status</div>   \r\n    <div>Transaction Type - <span class=\"bold\">{{transactionType}}</span></div>\r\n    <div>Age of Construction - <span class=\"bold\">{{constructionAge}}</span></div>\r\n    \r\n    <!-- <h6>Posted on: may 08, 2021</h6> -->\r\n  </span>\r\n  <span>\r\n    <div class=\"bedroom\">Possession Status - <span class=\"bold\">{{possessionStatus}}</span></div>\r\n    <div>Furnishing Status - <span class=\"bold\">{{finishingStatus}}</span></div>\r\n  </span>\r\n  <div class=\"border-bottom\"></div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"bg-white\" lines=\"none\">\r\n \r\n  <span>\r\n    <img src=\"../../assets/images/icons/ownership.png\" alt=\"image missing\">\r\n  </span>\r\n  <div class=\"right-content\">\r\n    \r\n  <span> \r\n    <div>Ownership</div>   \r\n    <div>Type</div>\r\n    \r\n  </span>\r\n  <span>\r\n    <div class=\"bedroom bold\">{{ownerShip}}</div>\r\n  \r\n  </span>\r\n  <div class=\"border-bottom\"></div>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n<div class=\"property-detail-wrapper\" *ngIf=\"propertyDetails?.Description != ''\">\r\n  <div class=\"property-detail\">\r\n  <label>Property Description</label>\r\n  <p >{{propertyDetails?.Description}}</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"property-detail-wrapper\">\r\n  <div class=\"property-detail\">\r\n  <label>Property Location</label>\r\n  <!-- <p >\r\n    <img src=\"../../assets/images/map.PNG\" alt=\"\">\r\n   \r\n  </p> -->\r\n  <div #map id=\"map\" style=\"margin-bottom: 50px; height: 400px;\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"buttons\">\r\n  <ion-button class=\"enq\" (click)=\"redirectToSendMessage(propertyDetails.UserId)\">Enquire Now</ion-button>\r\n  <ion-button (click)=\"redirectToSendMessage(propertyDetails.UserId)\">\r\n    <fa-icon [icon]=\"faMessage\"></fa-icon>Chat\r\n  </ion-button>\r\n</div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_property-details_property-details_module_ts.js.map