"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_messages_messages_module_ts"],{

/***/ 5604:
/*!*************************************************************!*\
  !*** ./src/app/profile/messages/messages-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageRoutingModule": () => (/* binding */ MessagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 39604);




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
    },
    {
        path: 'send-message',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_messages_send-message_send-message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./send-message/send-message.module */ 96360)).then(m => m.SendMessagePageModule)
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ 61730:
/*!*****************************************************!*\
  !*** ./src/app/profile/messages/messages.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageModule": () => (/* binding */ MessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-routing.module */ 5604);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 39604);







let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagesPageRoutingModule
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_1__.MessagesPage]
    })
], MessagesPageModule);



/***/ }),

/***/ 39604:
/*!***************************************************!*\
  !*** ./src/app/profile/messages/messages.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPage": () => (/* binding */ MessagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page.html?ngResource */ 26514);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss?ngResource */ 52654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 20070);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ 42735);







let MessagesPage = class MessagesPage {
    constructor(_nativeStorage, _mainSvc, _router, _ngZone) {
        this._nativeStorage = _nativeStorage;
        this._mainSvc = _mainSvc;
        this._router = _router;
        this._ngZone = _ngZone;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this._nativeStorage.getItem('userId').then((data) => {
            let userData = {
                userid: data
            };
            this._mainSvc.getMessageInbox(userData).then((data) => {
                let parseData = JSON.parse(data.data);
                this.inboxList = parseData.data;
                // console.log(this.inboxList);
            });
        });
    }
    showChat(id, name) {
        // console.log(id)
        this._ngZone.run(() => {
            this._router.navigate(['/messages/send-message', { id: id, name: name }]);
        });
    }
};
MessagesPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-messages',
        template: _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessagesPage);



/***/ }),

/***/ 52654:
/*!****************************************************************!*\
  !*** ./src/app/profile/messages/messages.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  color: #ffffff;\n  text-align: left;\n}\nion-content, ion-item {\n  --background: #ffff;\n  --border-color: #e3e3e3;\n}\n.list_text {\n  color: #000;\n}\n.list_text_bottom {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdmVlbiUyMGt1bWFyJTIwa2F0aXlhclxcT25lRHJpdmVcXERlc2t0b3BcXGh1bnRuZXdcXGh1bnRwcm9wZXJ0eW5ld1xcc3JjXFxhcHBcXHByb2ZpbGVcXG1lc3NhZ2VzXFxtZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURBQTtFQUFXLGNBQUE7RUFBZ0IsZUFBQTtBQ0kzQjtBREhBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDS0o7QURGQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNLSjtBREFBO0VBQVksV0FBQTtBQ0daO0FERkE7RUFBbUIsZUFBQTtBQ01uQiIsImZpbGUiOiJtZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJnLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlMTRiNGM7ICAgIFxyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4uYmFjay1idG57IGNvbG9yOiAjZmZmZmZmOyBmb250LXNpemU6IDI1cHg7fVxyXG4uaGVhZGVyLXRpdGxle1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbn1cclxuaW9uLWNvbnRlbnQsIGlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZTNlM2UzO1xyXG4gICAgaW9uLWl0ZW17XHJcblxyXG4gICAgfVxyXG59XHJcbi5saXN0X3RleHR7IGNvbG9yOiAjMDAwO31cclxuLmxpc3RfdGV4dF9ib3R0b217IGZvbnQtc2l6ZTogMTJweDt9XHJcbiIsIi5oZWFkZXItYmctY29sb3Ige1xuICAtLWJhY2tncm91bmQ6I2UxNGI0YztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xufVxuLmhlYWRlci1iZy1jb2xvciAuYmFjay1idG4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmhlYWRlci1iZy1jb2xvciAuaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1jb250ZW50LCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZTNlM2UzO1xufVxuLmxpc3RfdGV4dCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubGlzdF90ZXh0X2JvdHRvbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";

/***/ }),

/***/ 26514:
/*!****************************************************************!*\
  !*** ./src/app/profile/messages/messages.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <div class=\"header-title\">Profile</div>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item  *ngFor=\"let list of inboxList\">    \r\n      <ion-avatar slot=\"start\">\r\n        <img alt=\"Silhouette of a person's head\" src=\"../../../assets/images/icons/message-default-img.png\" />\r\n      </ion-avatar>\r\n      <ion-label class=\"list_text\" (click)=\"showChat(list.user, list.Name)\">{{list.Name}}\r\n        <ion-label class=\"list_text_bottom\">{{list.Message}}</ion-label>\r\n      </ion-label>\r\n    </ion-item>\r\n  <!-- <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img alt=\"Silhouette of a person's head\" src=\"../../../assets/images/icons/message-default-img.png\" />\r\n    </ion-avatar>\r\n    <ion-label class=\"list_text\">tejasavi Kapoor\r\n      <ion-label class=\"list_text_bottom\">Hello</ion-label>\r\n    </ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img alt=\"Silhouette of a person's head\" src=\"../../../assets/images/icons/message-default-img.png\" />\r\n    </ion-avatar>\r\n    <ion-label class=\"list_text\">T Kapoor\r\n      <ion-label class=\"list_text_bottom\">Hi</ion-label>\r\n    </ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img alt=\"Silhouette of a person's head\" src=\"../../../assets/images/icons/message-default-img.png\" />\r\n    </ion-avatar>\r\n    <ion-label class=\"list_text\">Naveen\r\n      <ion-label class=\"list_text_bottom\">hello</ion-label>\r\n    </ion-label>    \r\n  </ion-item> -->\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_messages_messages_module_ts.js.map