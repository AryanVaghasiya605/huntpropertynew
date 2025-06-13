"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_post-project_post-project_module_ts"],{

/***/ 43849:
/*!*************************************************************!*\
  !*** ./src/app/post-project/post-project-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostProjectPageRoutingModule": () => (/* binding */ PostProjectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _post_project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-project.page */ 68794);




const routes = [
    {
        path: '',
        component: _post_project_page__WEBPACK_IMPORTED_MODULE_0__.PostProjectPage
    },
    {
        path: 'add-project',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("default-src_app_post-project_floor-plan_floor-plan_page_ts"), __webpack_require__.e("src_app_post-project_add-project_add-project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-project/add-project.module */ 86207)).then(m => m.AddProjectPageModule)
    },
    {
        path: 'floor-plan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_post-project_floor-plan_floor-plan_page_ts"), __webpack_require__.e("src_app_post-project_floor-plan_floor-plan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./floor-plan/floor-plan.module */ 36008)).then(m => m.FloorPlanPageModule)
    },
    {
        path: 'project-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_post-project_project-details_project-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project-details/project-details.module */ 98013)).then(m => m.ProjectDetailsPageModule)
    },
];
let PostProjectPageRoutingModule = class PostProjectPageRoutingModule {
};
PostProjectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostProjectPageRoutingModule);



/***/ }),

/***/ 34025:
/*!*****************************************************!*\
  !*** ./src/app/post-project/post-project.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostProjectPageModule": () => (/* binding */ PostProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _post_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-project-routing.module */ 43849);
/* harmony import */ var _post_project_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-project.page */ 68794);







let PostProjectPageModule = class PostProjectPageModule {
};
PostProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _post_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostProjectPageRoutingModule
        ],
        declarations: [_post_project_page__WEBPACK_IMPORTED_MODULE_1__.PostProjectPage]
    })
], PostProjectPageModule);



/***/ }),

/***/ 68794:
/*!***************************************************!*\
  !*** ./src/app/post-project/post-project.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostProjectPage": () => (/* binding */ PostProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _post_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-project.page.html?ngResource */ 33588);
/* harmony import */ var _post_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-project.page.scss?ngResource */ 64602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ 91557);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








let PostProjectPage = class PostProjectPage {
    constructor(_router, _nativeStorage, _mainSvc, loadingCtrl) {
        this._router = _router;
        this._nativeStorage = _nativeStorage;
        this._mainSvc = _mainSvc;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: '',
                duration: 1000,
            });
            loading.present();
        });
    }
    ionViewWillEnter() {
        this._nativeStorage.getItem('userId').then((data) => {
            this._mainSvc.projectListing(47).then((data) => {
                // console.log('dsadsa',data);
                this.showLoading();
                if (data.status == 200) {
                    let parseData = JSON.parse(data.data);
                    this.projectlist = parseData.data;
                    //  console.log(parseData.data);
                }
            });
        });
    }
    addProject() {
        this._router.navigateByUrl('/post-project/add-project');
    }
    projectDetails(id) {
        //console.log(id)
        this._router.navigate(['/post-project/project-details', { project_id: id }]);
    }
};
PostProjectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
PostProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-post-project',
        template: _post_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_post_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostProjectPage);



/***/ }),

/***/ 64602:
/*!****************************************************************!*\
  !*** ./src/app/post-project/post-project.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".clients_header {\n  display: flex;\n  flex-direction: row;\n}\n.clients_header ion-title {\n  margin-left: 10px;\n}\n.clients_header ion-label {\n  margin-right: 10px;\n  font-size: 40px;\n}\nion-content {\n  --background:#fff;\n}\nion-content ion-item {\n  --background:#fff;\n}\nion-content ion-item ion-label h2 {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcHJvamVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0csaUJBQUE7QUFFUDtBQUFJO0VBQVcsa0JBQUE7RUFBb0IsZUFBQTtBQUluQztBQUZBO0VBQ0ksaUJBQUE7QUFLSjtBQUpJO0VBQ0ksaUJBQUE7QUFNUjtBQUpZO0VBQUksV0FBQTtBQU9oQiIsImZpbGUiOiJwb3N0LXByb2plY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudHNfaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHsgbWFyZ2luLXJpZ2h0OiAxMHB4OyBmb250LXNpemU6IDQwcHg7fVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGgyeyBjb2xvcjogIzAwMDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 33588:
/*!****************************************************************!*\
  !*** ./src/app/post-project/post-project.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon slot=\"start\" routerLink=\"/splash/tabs/home\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title slot=\"start\" class=\"header-title\">Projects</ion-title>\r\n    <ion-label slot=\"end\" (click)=\"addProject()\">+</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"none\" *ngFor=\"let list of projectlist\" (click)=\"projectDetails(list.project_id)\">    \r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../../assets/images/user.png\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{list.builder_name}}</h2>\r\n        <p>{{list.ProjectTypeId}}</p>\r\n        <p>{{list.proj_address}}, {{list.proj_city}}, {{list.proj_state}}</p>\r\n      </ion-label>    \r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_post-project_post-project_module_ts.js.map