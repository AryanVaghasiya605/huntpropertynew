"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_messages_messages_module_ts"],{

/***/ 94484:
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
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 7533);




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
    },
    {
        path: 'send-message',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_messages_send-message_send-message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./send-message/send-message.module */ 28397)).then(m => m.SendMessagePageModule)
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

/***/ 26182:
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
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-routing.module */ 94484);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 7533);







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

/***/ 7533:
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
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ 91557);







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

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  color: #ffffff;\n  text-align: left;\n}\nion-content, ion-item {\n  --background: #ffff;\n  --border-color: #e3e3e3;\n}\n.list_text {\n  color: #000;\n}\n.list_text_bottom {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUFBO0VBQVcsY0FBQTtFQUFnQixlQUFBO0FBSTNCO0FBSEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSjtBQUZBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQUtKO0FBQUE7RUFBWSxXQUFBO0FBR1o7QUFGQTtFQUFtQixlQUFBO0FBTW5CIiwiZmlsZSI6Im1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmctY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6I2UxNGI0YzsgICAgXHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbi5iYWNrLWJ0bnsgY29sb3I6ICNmZmZmZmY7IGZvbnQtc2l6ZTogMjVweDt9XHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxufVxyXG5pb24tY29udGVudCwgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNlM2UzZTM7XHJcbiAgICBpb24taXRlbXtcclxuXHJcbiAgICB9XHJcbn1cclxuLmxpc3RfdGV4dHsgY29sb3I6ICMwMDA7fVxyXG4ubGlzdF90ZXh0X2JvdHRvbXsgZm9udC1zaXplOiAxMnB4O31cclxuIl19 */";

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