"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_post-project_project-details_project-details_module_ts"],{

/***/ 79041:
/*!********************************************************************************!*\
  !*** ./src/app/post-project/project-details/project-details-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsPageRoutingModule": () => (/* binding */ ProjectDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.page */ 34302);




const routes = [
    {
        path: '',
        component: _project_details_page__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsPage
    }
];
let ProjectDetailsPageRoutingModule = class ProjectDetailsPageRoutingModule {
};
ProjectDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProjectDetailsPageRoutingModule);



/***/ }),

/***/ 98013:
/*!************************************************************************!*\
  !*** ./src/app/post-project/project-details/project-details.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsPageModule": () => (/* binding */ ProjectDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _project_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details-routing.module */ 79041);
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details.page */ 34302);







let ProjectDetailsPageModule = class ProjectDetailsPageModule {
};
ProjectDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _project_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsPageRoutingModule
        ],
        declarations: [_project_details_page__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailsPage]
    })
], ProjectDetailsPageModule);



/***/ }),

/***/ 34302:
/*!**********************************************************************!*\
  !*** ./src/app/post-project/project-details/project-details.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsPage": () => (/* binding */ ProjectDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _project_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.page.html?ngResource */ 13929);
/* harmony import */ var _project_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details.page.scss?ngResource */ 88896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 91557);






let ProjectDetailsPage = class ProjectDetailsPage {
    constructor(_router, _activateRoute, _mainSvc) {
        this._router = _router;
        this._activateRoute = _activateRoute;
        this._mainSvc = _mainSvc;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this._activateRoute.params.subscribe((params) => {
            // console.log('params', params.project_id);
            let id = params.project_id;
            id = 4;
            this._mainSvc.clientDetails(id).then((data) => {
                //  console.log(data)
                if (data.status === 200) {
                    let parseData = JSON.parse(data.data);
                    //    console.log(parseData.data);
                    this.projectDetails = parseData.data;
                }
            });
        });
    }
};
ProjectDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService }
];
ProjectDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-project-details',
        template: _project_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectDetailsPage);



/***/ }),

/***/ 88896:
/*!***********************************************************************************!*\
  !*** ./src/app/post-project/project-details/project-details.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".back-btn {\n  font-size: 20px;\n}\n\nion-item {\n  --background: #fff;\n}\n\n.details-wrapper {\n  background: #fff;\n  height: 100vh;\n}\n\n.details-wrapper .first-row {\n  display: flex;\n  flex-direction: row;\n  padding-top: 15px;\n  border-bottom: solid 3px #E7E7E7;\n  padding-bottom: 15px;\n}\n\n.details-wrapper .first-row .left-sec {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding-left: 15px;\n}\n\n.details-wrapper .first-row .left-sec span {\n  color: #000;\n}\n\n.details-wrapper .first-row .right-sec {\n  color: #000;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding-right: 15px;\n}\n\n.details-wrapper .first-row .right-sec .phone_number {\n  background: #FF1200;\n  color: #fff;\n  line-height: 30px;\n  border-radius: 5px;\n}\n\n.details-wrapper .sec-row {\n  padding-bottom: 15px;\n}\n\n.details-wrapper .sec-row h3 {\n  display: block;\n  color: #000;\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.details-wrapper .sec-row .client_details {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  color: #000;\n}\n\n.details-wrapper .sec-row .client_details .address {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding-left: 15px;\n}\n\n.details-wrapper .sec-row .client_details .address .add {\n  font-weight: 500;\n  font-size: 15px;\n}\n\n.details-wrapper .sec-row .client_details .address span {\n  font-size: 14px;\n}\n\n.details-wrapper .sec-row .client_details .location {\n  width: 50%;\n  display: flex;\n  padding-right: 15px;\n  flex-direction: column;\n}\n\n.details-wrapper .sec-row .client_details .location .loc {\n  font-weight: 500;\n  font-size: 15px;\n}\n\n.details-wrapper .sec-row .client_details .location span {\n  font-size: 14px;\n}\n\n.details-wrapper .sec-row .sec_row_right {\n  width: 50%;\n}\n\n.details-wrapper .buttons {\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.details-wrapper .buttons .enq {\n  line-height: 45px;\n  color: #fff;\n  width: 50%;\n  margin: 0;\n  border: none;\n  height: 45px;\n}\n\n.details-wrapper .buttons .chat {\n  margin: 0;\n  line-height: 45px;\n  color: #fff;\n  width: 50%;\n  --background: #E3E3E3;\n  color: #4a4a4a;\n  border: none;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxlQUFBO0FBRVg7O0FBREE7RUFBUyxrQkFBQTtBQUtUOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFRUjs7QUFQUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVNaOztBQVJZO0VBQ0ksV0FBQTtBQVVoQjs7QUFQUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFTWjs7QUFSWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFVaEI7O0FBTkk7RUFDSSxvQkFBQTtBQVFSOztBQVBRO0VBQUksY0FBQTtFQUFnQixXQUFBO0VBQVksa0JBQUE7RUFBb0IsZUFBQTtBQWE1RDs7QUFaUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBY1o7O0FBWlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFjaEI7O0FBYmdCO0VBQU0sZ0JBQUE7RUFBa0IsZUFBQTtBQWlCeEM7O0FBaEJnQjtFQUNJLGVBQUE7QUFrQnBCOztBQWZZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBaUJoQjs7QUFoQmdCO0VBQU0sZ0JBQUE7RUFBa0IsZUFBQTtBQW9CeEM7O0FBbkJnQjtFQUNJLGVBQUE7QUFxQnBCOztBQWpCUTtFQUNJLFVBQUE7QUFtQlo7O0FBaEJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBa0JSOztBQWpCUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFtQlo7O0FBakJRO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQW1CWiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnRueyBmb250LXNpemU6IDIwcHg7fVxyXG5pb24taXRlbXstLWJhY2tncm91bmQ6ICNmZmY7fVxyXG4uZGV0YWlscy13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAuZmlyc3Qtcm93e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI0U3RTdFNztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAubGVmdC1zZWN7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LXNlY3tcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICAgICAgICAgICAgLnBob25lX251bWJlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjEyMDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VjLXJvd3tcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBoM3sgZGlzcGxheTogYmxvY2s7IGNvbG9yOiAjMDAwO3BhZGRpbmctbGVmdDogMTVweDsgZm9udC1zaXplOiAxOHB4O31cclxuICAgICAgICAuY2xpZW50X2RldGFpbHN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hZGRyZXNze1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgLmFkZHsgZm9udC13ZWlnaHQ6IDUwMDsgZm9udC1zaXplOiAxNXB4O31cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAubG9jeyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IDE1cHg7fVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY19yb3dfcmlnaHR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbnN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmVucXtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hhdHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0UzRTNFMztcclxuICAgICAgICAgICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 13929:
/*!***********************************************************************************!*\
  !*** ./src/app/post-project/project-details/project-details.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon slot=\"start\" routerLink=\"/posted-property\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title slot=\"start\" class=\"header-title\">Projects Details</ion-title>    \r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n<ion-content>\r\n  <ion-img src=\"../../../assets/images/register-image.jpeg\"></ion-img>\r\n<div class=\"details-wrapper\" *ngFor=\"let info of projectDetails\">\r\n  <div class=\"first-row\">\r\n    <div class=\"left-sec\">\r\n      <span>\r\n       <ion-label>{{info.client_name}}</ion-label> </span>\r\n      <span>{{info.client_email}}</span>\r\n      <span>Posted on {{info.createdOn | date: 'mediumDate'}}</span>\r\n    </div>\r\n    <div class=\"right-sec\">\r\n      <span>{{info.client_phone}}</span>\r\n      <button class=\"phone_number\" type=\"tel:{{info.client_phone}}\">View Phone Number</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"sec-row\">  \r\n    <h3>Client Details</h3>  \r\n    <div class=\"client_details\">\r\n      \r\n      <div class=\"address\">\r\n        <span class=\"add\">Address</span>\r\n        <span>{{info.client_address}}</span>\r\n      </div>\r\n      <div class=\"location\">\r\n        <span class=\"loc\">Location</span>\r\n        <span>{{info.property_location}}</span>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"sec-row\">  \r\n    <h3>Property</h3>  \r\n    <div class=\"client_details\">      \r\n      <div class=\"address\">\r\n        <span class=\"add\">Property Type</span>\r\n        <span>{{info.propertyType}}</span>\r\n      </div>\r\n      <div class=\"location\">\r\n        <span class=\"loc\">Project Type</span>\r\n        <span>{{info.projectType}}</span>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n  <div class=\"sec-row\">    \r\n    <div class=\"client_details\">      \r\n      <div class=\"address\">\r\n        <span class=\"add\">project Type Category</span>\r\n        <span>{{info.projectType_cat}}</span>\r\n      </div>\r\n      <div class=\"location\">\r\n        <span class=\"loc\">Source</span>\r\n        <span>{{info.how_know}}</span>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n  <div class=\"sec-row\">  \r\n    <h3>Status</h3>  \r\n    <div class=\"client_details\">      \r\n      <div class=\"address\">\r\n        <span class=\"add\">Property Size Unit</span>\r\n        <span>{{info.size_property_unit}}</span>\r\n      </div>\r\n      <div class=\"location\">\r\n        <span class=\"loc\">Possession Status</span>\r\n        <span>{{info.property_possession}}</span>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n  <div class=\"sec-row\">\r\n    <div class=\"client_details\">      \r\n      <div class=\"address\">\r\n        <span class=\"add\">Property Size</span>\r\n        <span>{{info.size_property}}</span>\r\n      </div>\r\n      <div class=\"location\">\r\n        <span class=\"loc\">Investment Purpose</span>\r\n        <span>{{info.project_purpose}}</span>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n  <div class=\"sec-row\">  \r\n    <h3>Loan</h3>  \r\n    <div class=\"client_details\">      \r\n      <div class=\"address\">\r\n        <span class=\"add\">Self funding</span>\r\n        <span>{{info.self_funding_percent}}</span>\r\n      </div>\r\n      <div class=\"location\">\r\n        <span class=\"loc\">Bank Loan</span>\r\n        <span>{{info.bank_loan}}</span>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n  <div class=\"buttons\">\r\n    <ion-button class=\"enq\">Enquire Now</ion-button>\r\n    <ion-button class=\"chat\">Chat</ion-button>\r\n  </div>\r\n</div>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_post-project_project-details_project-details_module_ts.js.map