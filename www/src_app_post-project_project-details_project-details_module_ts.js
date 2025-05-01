"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_post-project_project-details_project-details_module_ts"],{

/***/ 14007:
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
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.page */ 23289);




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

/***/ 68671:
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
/* harmony import */ var _project_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details-routing.module */ 14007);
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details.page */ 23289);







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

/***/ 23289:
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
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 42735);






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

module.exports = ".back-btn {\n  font-size: 20px;\n}\n\nion-item {\n  --background: #fff;\n}\n\n.details-wrapper {\n  background: #fff;\n  height: 100vh;\n}\n\n.details-wrapper .first-row {\n  display: flex;\n  flex-direction: row;\n  padding-top: 15px;\n  border-bottom: solid 3px #E7E7E7;\n  padding-bottom: 15px;\n}\n\n.details-wrapper .first-row .left-sec {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding-left: 15px;\n}\n\n.details-wrapper .first-row .left-sec span {\n  color: #000;\n}\n\n.details-wrapper .first-row .right-sec {\n  color: #000;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding-right: 15px;\n}\n\n.details-wrapper .first-row .right-sec .phone_number {\n  background: #FF1200;\n  color: #fff;\n  line-height: 30px;\n  border-radius: 5px;\n}\n\n.details-wrapper .sec-row {\n  padding-bottom: 15px;\n}\n\n.details-wrapper .sec-row h3 {\n  display: block;\n  color: #000;\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.details-wrapper .sec-row .client_details {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  color: #000;\n}\n\n.details-wrapper .sec-row .client_details .address {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding-left: 15px;\n}\n\n.details-wrapper .sec-row .client_details .address .add {\n  font-weight: 500;\n  font-size: 15px;\n}\n\n.details-wrapper .sec-row .client_details .address span {\n  font-size: 14px;\n}\n\n.details-wrapper .sec-row .client_details .location {\n  width: 50%;\n  display: flex;\n  padding-right: 15px;\n  flex-direction: column;\n}\n\n.details-wrapper .sec-row .client_details .location .loc {\n  font-weight: 500;\n  font-size: 15px;\n}\n\n.details-wrapper .sec-row .client_details .location span {\n  font-size: 14px;\n}\n\n.details-wrapper .sec-row .sec_row_right {\n  width: 50%;\n}\n\n.details-wrapper .buttons {\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.details-wrapper .buttons .enq {\n  line-height: 45px;\n  color: #fff;\n  width: 50%;\n  margin: 0;\n  border: none;\n  height: 45px;\n}\n\n.details-wrapper .buttons .chat {\n  margin: 0;\n  line-height: 45px;\n  color: #fff;\n  width: 50%;\n  --background: #E3E3E3;\n  color: #4a4a4a;\n  border: none;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZlZW4lMjBrdW1hciUyMGthdGl5YXJcXE9uZURyaXZlXFxEZXNrdG9wXFxodW50bmV3XFxodW50cHJvcGVydHluZXdcXHNyY1xcYXBwXFxwb3N0LXByb2plY3RcXHByb2plY3QtZGV0YWlsc1xccHJvamVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGVBQUE7QUNFWDs7QUREQTtFQUFTLGtCQUFBO0FDS1Q7O0FESkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNPSjs7QUROSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ1FSOztBRFBRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDU1o7O0FEUlk7RUFDSSxXQUFBO0FDVWhCOztBRFBRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1NaOztBRFJZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1VoQjs7QUROSTtFQUNJLG9CQUFBO0FDUVI7O0FEUFE7RUFBSSxjQUFBO0VBQWdCLFdBQUE7RUFBWSxrQkFBQTtFQUFvQixlQUFBO0FDYTVEOztBRFpRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNjWjs7QURaWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2NoQjs7QURiZ0I7RUFBTSxnQkFBQTtFQUFrQixlQUFBO0FDaUJ4Qzs7QURoQmdCO0VBQ0ksZUFBQTtBQ2tCcEI7O0FEZlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNpQmhCOztBRGhCZ0I7RUFBTSxnQkFBQTtFQUFrQixlQUFBO0FDb0J4Qzs7QURuQmdCO0VBQ0ksZUFBQTtBQ3FCcEI7O0FEakJRO0VBQ0ksVUFBQTtBQ21CWjs7QURoQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNrQlI7O0FEakJRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ21CWjs7QURqQlE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDbUJaIiwiZmlsZSI6InByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idG57IGZvbnQtc2l6ZTogMjBweDt9XHJcbmlvbi1pdGVtey0tYmFja2dyb3VuZDogI2ZmZjt9XHJcbi5kZXRhaWxzLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC5maXJzdC1yb3d7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjRTdFN0U3O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIC5sZWZ0LXNlY3tcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtc2Vje1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gICAgICAgICAgICAucGhvbmVfbnVtYmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGMTIwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWMtcm93e1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGgzeyBkaXNwbGF5OiBibG9jazsgY29sb3I6ICMwMDA7cGFkZGluZy1sZWZ0OiAxNXB4OyBmb250LXNpemU6IDE4cHg7fVxyXG4gICAgICAgIC5jbGllbnRfZGV0YWlsc3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmFkZHJlc3N7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAuYWRkeyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IDE1cHg7fVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC5sb2N7IGZvbnQtd2VpZ2h0OiA1MDA7IGZvbnQtc2l6ZTogMTVweDt9XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjX3Jvd19yaWdodHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuZW5xe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGF0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRTNFM0UzO1xyXG4gICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJhY2stYnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRldGFpbHMtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uZGV0YWlscy13cmFwcGVyIC5maXJzdC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICNFN0U3RTc7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmRldGFpbHMtd3JhcHBlciAuZmlyc3Qtcm93IC5sZWZ0LXNlYyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5kZXRhaWxzLXdyYXBwZXIgLmZpcnN0LXJvdyAubGVmdC1zZWMgc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmRldGFpbHMtd3JhcHBlciAuZmlyc3Qtcm93IC5yaWdodC1zZWMge1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5kZXRhaWxzLXdyYXBwZXIgLmZpcnN0LXJvdyAucmlnaHQtc2VjIC5waG9uZV9udW1iZXIge1xuICBiYWNrZ3JvdW5kOiAjRkYxMjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5kZXRhaWxzLXdyYXBwZXIgLnNlYy1yb3cge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5kZXRhaWxzLXdyYXBwZXIgLnNlYy1yb3cgaDMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmRldGFpbHMtd3JhcHBlciAuc2VjLXJvdyAuY2xpZW50X2RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sb3I6ICMwMDA7XG59XG4uZGV0YWlscy13cmFwcGVyIC5zZWMtcm93IC5jbGllbnRfZGV0YWlscyAuYWRkcmVzcyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5kZXRhaWxzLXdyYXBwZXIgLnNlYy1yb3cgLmNsaWVudF9kZXRhaWxzIC5hZGRyZXNzIC5hZGQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZGV0YWlscy13cmFwcGVyIC5zZWMtcm93IC5jbGllbnRfZGV0YWlscyAuYWRkcmVzcyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRldGFpbHMtd3JhcHBlciAuc2VjLXJvdyAuY2xpZW50X2RldGFpbHMgLmxvY2F0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kZXRhaWxzLXdyYXBwZXIgLnNlYy1yb3cgLmNsaWVudF9kZXRhaWxzIC5sb2NhdGlvbiAubG9jIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmRldGFpbHMtd3JhcHBlciAuc2VjLXJvdyAuY2xpZW50X2RldGFpbHMgLmxvY2F0aW9uIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGV0YWlscy13cmFwcGVyIC5zZWMtcm93IC5zZWNfcm93X3JpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5kZXRhaWxzLXdyYXBwZXIgLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGV0YWlscy13cmFwcGVyIC5idXR0b25zIC5lbnEge1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uZGV0YWlscy13cmFwcGVyIC5idXR0b25zIC5jaGF0IHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIC0tYmFja2dyb3VuZDogI0UzRTNFMztcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA0NXB4O1xufSJdfQ== */";

/***/ }),

/***/ 13929:
/*!***********************************************************************************!*\
  !*** ./src/app/post-project/project-details/project-details.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\n  <ion-toolbar class=\"header-bg-color\">    \n    <ion-icon slot=\"start\" routerLink=\"/posted-property\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\n    <ion-title slot=\"start\" class=\"header-title\">Projects Details</ion-title>    \n  </ion-toolbar>\n  \n</ion-header>\n<ion-content>\n  <ion-img src=\"../../../assets/images/register-image.jpeg\"></ion-img>\n<div class=\"details-wrapper\" *ngFor=\"let info of projectDetails\">\n  <div class=\"first-row\">\n    <div class=\"left-sec\">\n      <span>\n       <ion-label>{{info.client_name}}</ion-label> </span>\n      <span>{{info.client_email}}</span>\n      <span>Posted on {{info.createdOn | date: 'mediumDate'}}</span>\n    </div>\n    <div class=\"right-sec\">\n      <span>{{info.client_phone}}</span>\n      <button class=\"phone_number\" type=\"tel:{{info.client_phone}}\">View Phone Number</button>\n    </div>\n  </div>\n  <div class=\"sec-row\">  \n    <h3>Client Details</h3>  \n    <div class=\"client_details\">\n      \n      <div class=\"address\">\n        <span class=\"add\">Address</span>\n        <span>{{info.client_address}}</span>\n      </div>\n      <div class=\"location\">\n        <span class=\"loc\">Location</span>\n        <span>{{info.property_location}}</span>\n      </div>\n    </div>\n    \n  </div>\n  <div class=\"sec-row\">  \n    <h3>Property</h3>  \n    <div class=\"client_details\">      \n      <div class=\"address\">\n        <span class=\"add\">Property Type</span>\n        <span>{{info.propertyType}}</span>\n      </div>\n      <div class=\"location\">\n        <span class=\"loc\">Project Type</span>\n        <span>{{info.projectType}}</span>\n      </div>\n    </div>    \n  </div>\n  <div class=\"sec-row\">    \n    <div class=\"client_details\">      \n      <div class=\"address\">\n        <span class=\"add\">project Type Category</span>\n        <span>{{info.projectType_cat}}</span>\n      </div>\n      <div class=\"location\">\n        <span class=\"loc\">Source</span>\n        <span>{{info.how_know}}</span>\n      </div>\n    </div>    \n  </div>\n  <div class=\"sec-row\">  \n    <h3>Status</h3>  \n    <div class=\"client_details\">      \n      <div class=\"address\">\n        <span class=\"add\">Property Size Unit</span>\n        <span>{{info.size_property_unit}}</span>\n      </div>\n      <div class=\"location\">\n        <span class=\"loc\">Possession Status</span>\n        <span>{{info.property_possession}}</span>\n      </div>\n    </div>    \n  </div>\n  <div class=\"sec-row\">\n    <div class=\"client_details\">      \n      <div class=\"address\">\n        <span class=\"add\">Property Size</span>\n        <span>{{info.size_property}}</span>\n      </div>\n      <div class=\"location\">\n        <span class=\"loc\">Investment Purpose</span>\n        <span>{{info.project_purpose}}</span>\n      </div>\n    </div>    \n  </div>\n  <div class=\"sec-row\">  \n    <h3>Loan</h3>  \n    <div class=\"client_details\">      \n      <div class=\"address\">\n        <span class=\"add\">Self funding</span>\n        <span>{{info.self_funding_percent}}</span>\n      </div>\n      <div class=\"location\">\n        <span class=\"loc\">Bank Loan</span>\n        <span>{{info.bank_loan}}</span>\n      </div>\n    </div>    \n  </div>\n  <div class=\"buttons\">\n    <ion-button class=\"enq\">Enquire Now</ion-button>\n    <ion-button class=\"chat\">Chat</ion-button>\n  </div>\n</div>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_post-project_project-details_project-details_module_ts.js.map