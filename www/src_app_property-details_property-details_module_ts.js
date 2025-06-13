"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_property-details_property-details_module_ts"],{

/***/ 30277:
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
/* harmony import */ var _property_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-details.page */ 22248);




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

/***/ 61988:
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
/* harmony import */ var _property_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-details-routing.module */ 30277);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _property_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-details.page */ 22248);








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

/***/ 22248:
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
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ 91557);







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

module.exports = ".list-img {\n  position: relative;\n}\n.list-img img {\n  width: 100%;\n}\n.list-img fa-icon {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n}\n.bg-white {\n  background: #fff;\n  display: flex;\n  width: 100%;\n  padding: 15px 15px;\n}\n.bg-white span {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n.bg-white span img {\n  width: 100%;\n}\n.bg-white span h6 {\n  margin: 0;\n  font-size: 12px;\n  color: #aaaaaa;\n}\n.bg-white .right-content {\n  display: flex;\n  width: 100%;\n  color: #000;\n}\n.bg-white .right-content span {\n  width: 55%;\n  height: auto;\n}\n.bg-white .right-content span div {\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.bg-white .right-content span div button {\n  background: red;\n  height: 40px;\n  border-radius: 5px;\n  padding: 0 10px;\n}\n.bg-white .right-content span .bedroom {\n  margin-top: 26px;\n}\n.bg-white .right-content span:nth-child(2) {\n  margin-right: 0;\n  width: 45%;\n}\n.property-detail-wrapper .property-detail {\n  margin-top: 10px;\n  background: #fff;\n  padding-top: 15px;\n}\n.property-detail-wrapper .property-detail label {\n  color: #000;\n  padding-left: 15px;\n}\n.property-detail-wrapper .property-detail p {\n  color: #000;\n  padding: 15px;\n  margin: 0;\n}\n.property-detail-wrapper .property-detail .right-content {\n  position: relative;\n  padding-bottom: 10px;\n}\n.property-detail-wrapper .property-detail .right-content .border-bottom {\n  border-bottom: solid 1px #aaaaaa;\n  padding: 1px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  width: 80%;\n}\n.bg-white .right-content {\n  position: relative;\n  padding-bottom: 10px;\n}\n.bg-white .right-content .border-bottom {\n  border-bottom: solid 1px #aaaaaa;\n  padding: 1px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  width: 80%;\n}\n.buttons {\n  position: fixed;\n  height: 50px;\n  z-index: 9;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n}\n.buttons ion-button {\n  width: 50%;\n  height: 50px;\n  margin: 0;\n}\n.buttons ion-button fa-icon {\n  font-size: 23px;\n  margin-right: 5px;\n}\n.buttons ion-button.enq {\n  margin-right: 10px;\n}\n.bold {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRVI7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNHLFdBQUE7QUFHWDtBQURRO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR1o7QUFBSTtFQUFnQixhQUFBO0VBQWUsV0FBQTtFQUMzQixXQUFBO0FBSVI7QUFISTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBS1I7QUFKUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQU1aO0FBTFk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU9oQjtBQUxRO0VBQ0ksZ0JBQUE7QUFPWjtBQUhJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFLUjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUFSO0FBQ1E7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNSO0FBU0k7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBTlI7QUFPUTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTFo7QUFVQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVBKO0FBUUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFOUjtBQU9RO0VBQ0ksZUFBQTtFQUNSLGlCQUFBO0FBTEo7QUFRSTtFQUNJLGtCQUFBO0FBTlI7QUFTQTtFQUNJLGdCQUFBO0FBTkoiLCJmaWxlIjoicHJvcGVydHktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pbWd7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBmYS1pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5iZy13aGl0ZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWNvbnRlbnR7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgc3BhbntcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7ICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJlZHJvb217XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuLnByb3BlcnR5LWRldGFpbC13cmFwcGVye1xyXG5cclxuLnByb3BlcnR5LWRldGFpbHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWNvbnRlbnR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIC5ib3JkZXItYm90dG9te1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYWFhYWFhO1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG59XHJcblxyXG4uYmctd2hpdGV7XHJcbiAgICAucmlnaHQtY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAuYm9yZGVyLWJvdHRvbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNhYWFhYWE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYnV0dG9uc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmYS1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uLmVucXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmJvbGR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */";

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