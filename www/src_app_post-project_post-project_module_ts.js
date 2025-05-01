"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_post-project_post-project_module_ts"],{

/***/ 78110:
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
/* harmony import */ var _post_project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-project.page */ 9334);




const routes = [
    {
        path: '',
        component: _post_project_page__WEBPACK_IMPORTED_MODULE_0__.PostProjectPage
    },
    {
        path: 'add-project',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_angular-fontawesome_fesm2015_angular-fontawesome_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_mjs"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("default-src_app_post-project_floor-plan_floor-plan_page_ts"), __webpack_require__.e("src_app_post-project_add-project_add-project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-project/add-project.module */ 4925)).then(m => m.AddProjectPageModule)
    },
    {
        path: 'floor-plan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_post-project_floor-plan_floor-plan_page_ts"), __webpack_require__.e("src_app_post-project_floor-plan_floor-plan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./floor-plan/floor-plan.module */ 95286)).then(m => m.FloorPlanPageModule)
    },
    {
        path: 'project-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_post-project_project-details_project-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project-details/project-details.module */ 68671)).then(m => m.ProjectDetailsPageModule)
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

/***/ 93190:
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
/* harmony import */ var _post_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-project-routing.module */ 78110);
/* harmony import */ var _post_project_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-project.page */ 9334);







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

/***/ 9334:
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
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 20070);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ 42735);
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

module.exports = ".clients_header {\n  display: flex;\n  flex-direction: row;\n}\n.clients_header ion-title {\n  margin-left: 10px;\n}\n.clients_header ion-label {\n  margin-right: 10px;\n  font-size: 40px;\n}\nion-content {\n  --background:#fff;\n}\nion-content ion-item {\n  --background:#fff;\n}\nion-content ion-item ion-label h2 {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcHJvamVjdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdmVlbiUyMGt1bWFyJTIwa2F0aXlhclxcT25lRHJpdmVcXERlc2t0b3BcXGh1bnRuZXdcXGh1bnRwcm9wZXJ0eW5ld1xcc3JjXFxhcHBcXHBvc3QtcHJvamVjdFxccG9zdC1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRyxpQkFBQTtBQ0VQO0FEQUk7RUFBVyxrQkFBQTtFQUFvQixlQUFBO0FDSW5DO0FERkE7RUFDSSxpQkFBQTtBQ0tKO0FESkk7RUFDSSxpQkFBQTtBQ01SO0FESlk7RUFBSSxXQUFBO0FDT2hCIiwiZmlsZSI6InBvc3QtcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50c19oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVseyBtYXJnaW4tcmlnaHQ6IDEwcHg7IGZvbnQtc2l6ZTogNDBweDt9XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgaDJ7IGNvbG9yOiAjMDAwO31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY2xpZW50c19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmNsaWVudHNfaGVhZGVyIGlvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNsaWVudHNfaGVhZGVyIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2ZmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */";

/***/ }),

/***/ 33588:
/*!****************************************************************!*\
  !*** ./src/app/post-project/post-project.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\n  <ion-toolbar class=\"header-bg-color\">    \n    <ion-icon slot=\"start\" routerLink=\"/splash/tabs/home\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\n    <ion-title slot=\"start\" class=\"header-title\">Projects</ion-title>\n    <ion-label slot=\"end\" (click)=\"addProject()\">+</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" *ngFor=\"let list of projectlist\" (click)=\"projectDetails(list.project_id)\">    \n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/images/user.png\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{list.builder_name}}</h2>\n        <p>{{list.ProjectTypeId}}</p>\n        <p>{{list.proj_address}}, {{list.proj_city}}, {{list.proj_state}}</p>\n      </ion-label>    \n  </ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_post-project_post-project_module_ts.js.map