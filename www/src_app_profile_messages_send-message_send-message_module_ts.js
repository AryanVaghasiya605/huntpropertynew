"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_messages_send-message_send-message_module_ts"],{

/***/ 89670:
/*!******************************************************************************!*\
  !*** ./src/app/profile/messages/send-message/send-message-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendMessagePageRoutingModule": () => (/* binding */ SendMessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _send_message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-message.page */ 65524);




const routes = [
    {
        path: '',
        component: _send_message_page__WEBPACK_IMPORTED_MODULE_0__.SendMessagePage
    }
];
let SendMessagePageRoutingModule = class SendMessagePageRoutingModule {
};
SendMessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendMessagePageRoutingModule);



/***/ }),

/***/ 96360:
/*!**********************************************************************!*\
  !*** ./src/app/profile/messages/send-message/send-message.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendMessagePageModule": () => (/* binding */ SendMessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _send_message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-message-routing.module */ 89670);
/* harmony import */ var _send_message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-message.page */ 65524);







let SendMessagePageModule = class SendMessagePageModule {
};
SendMessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _send_message_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendMessagePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_send_message_page__WEBPACK_IMPORTED_MODULE_1__.SendMessagePage]
    })
], SendMessagePageModule);



/***/ }),

/***/ 65524:
/*!********************************************************************!*\
  !*** ./src/app/profile/messages/send-message/send-message.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendMessagePage": () => (/* binding */ SendMessagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _send_message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-message.page.html?ngResource */ 90218);
/* harmony import */ var _send_message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-message.page.scss?ngResource */ 40249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 20070);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ 42735);








let SendMessagePage = class SendMessagePage {
    constructor(_fb, _mainSVC, _nativeStorage, _activatedRoute) {
        this._fb = _fb;
        this._mainSVC = _mainSVC;
        this._nativeStorage = _nativeStorage;
        this._activatedRoute = _activatedRoute;
        this.chatId = {
            user_id: ''
        };
    }
    ngOnInit() {
        this.sendMessage = this._fb.group({
            message: ['']
        });
        this._nativeStorage.getItem('token').then((token) => {
            // console.log(token)
        });
    }
    ionViewWillEnter() {
        this._activatedRoute.params.subscribe((param) => {
            //  console.log(param)
            this.userName = param.name;
            this.chatId = {
                user_id: param.id
            };
            this._mainSVC.getChatBoxList(this.chatId).then((data) => {
                let parseData = JSON.parse(data.data);
                this.chatBoxList = parseData.data;
                this.chatBoxList.sort((a, b) => 0 - (a > b ? -1 : 1));
                //  console.log(this.chatBoxList);
            });
        });
    }
    onSubmit() {
        // console.log(this.chatId)
        let formdata = {
            "to_user_id": this.chatId.user_id,
            "msg": this.sendMessage.value.message
        };
        console.log(formdata);
        this._mainSVC.sendMessage(formdata).then((data) => {
            //  console.log('data', data);
            this.ionViewWillEnter();
            this.sendMessage.reset();
        });
    }
};
SendMessagePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
SendMessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-send-message',
        template: _send_message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_send_message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendMessagePage);



/***/ }),

/***/ 40249:
/*!*********************************************************************************!*\
  !*** ./src/app/profile/messages/send-message/send-message.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  display: inline-block;\n}\nion-content {\n  --background: #ffff;\n}\nion-content .content .content-box {\n  height: 90%;\n  margin-top: 20px;\n  display: inline-block;\n  width: 100%;\n}\nion-content .content .content-box ion-item {\n  --background:#fff;\n  color: #000;\n}\nion-content .content .content-box ion-item .mesg {\n  width: 60%;\n  text-overflow: wrap;\n}\nion-content .content .content-box ion-item .created_on {\n  width: 40%;\n  margin-left: 20px;\n  color: #e3e3e3;\n}\nion-content .send_message_wrapper {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  z-index: 99;\n  background: #fff;\n}\nion-content .send_message_wrapper form {\n  display: flex;\n  width: 100%;\n}\nion-content .send_message_wrapper form ion-input {\n  color: #000;\n  border: solid 1px #e3e3e3;\n  flex-grow: 1;\n}\nion-content .send_message_wrapper form .send_mess-btn {\n  height: 40px;\n  margin: 0;\n}\nion-content .send_message_wrapper form .send_mess-btn ion-icon {\n  font-size: 26px;\n  color: #fff;\n  margin: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtbWVzc2FnZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2ZWVuJTIwa3VtYXIlMjBrYXRpeWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcaHVudG5ld1xcaHVudHByb3BlcnR5bmV3XFxzcmNcXGFwcFxccHJvZmlsZVxcbWVzc2FnZXNcXHNlbmQtbWVzc2FnZVxcc2VuZC1tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjtBREFBO0VBQVcsY0FBQTtFQUFnQixlQUFBO0FDSTNCO0FERkE7RUFDSSxxQkFBQTtBQ0lKO0FEREE7RUFDSSxtQkFBQTtBQ0lKO0FERlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNJWjtBREhZO0VBQVMsaUJBQUE7RUFBbUIsV0FBQTtBQ094QztBRE5ZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDUWhCO0FETlk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUWhCO0FERkk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0lSO0FESFE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0taO0FESlE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDRCxZQUFBO0FDTVg7QURIUTtFQUNJLFlBQUE7RUFDQSxTQUFBO0FDS1o7QURKUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNNWiIsImZpbGUiOiJzZW5kLW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZy1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojZTE0YjRjOyAgICBcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuLmJhY2stYnRueyBjb2xvcjogI2ZmZmZmZjsgZm9udC1zaXplOiAyNXB4O31cclxuXHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICAuY29udGVudC1ib3h7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBpb24taXRlbXstLWJhY2tncm91bmQ6I2ZmZjsgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIC5tZXNne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNyZWF0ZWRfb257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2UzZTNlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VuZF9tZXNzYWdlX3dyYXBwZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwIDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2UzZTNlMztcclxuICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VuZF9tZXNzLWJ0bntcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG59IiwiLmhlYWRlci1iZy1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojZTE0YjRjO1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG59XG4uaGVhZGVyLWJnLWNvbG9yIC5iYWNrLWJ0biB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uaGVhZGVyLWJnLWNvbG9yIC5oZWFkZXItdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5jb250ZW50LWJveCB7XG4gIGhlaWdodDogOTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLmNvbnRlbnQtYm94IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLmNvbnRlbnQtYm94IGlvbi1pdGVtIC5tZXNnIHtcbiAgd2lkdGg6IDYwJTtcbiAgdGV4dC1vdmVyZmxvdzogd3JhcDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5jb250ZW50LWJveCBpb24taXRlbSAuY3JlYXRlZF9vbiB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogI2UzZTNlMztcbn1cbmlvbi1jb250ZW50IC5zZW5kX21lc3NhZ2Vfd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5pb24tY29udGVudCAuc2VuZF9tZXNzYWdlX3dyYXBwZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLnNlbmRfbWVzc2FnZV93cmFwcGVyIGZvcm0gaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlM2UzZTM7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbmlvbi1jb250ZW50IC5zZW5kX21lc3NhZ2Vfd3JhcHBlciBmb3JtIC5zZW5kX21lc3MtYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAuc2VuZF9tZXNzYWdlX3dyYXBwZXIgZm9ybSAuc2VuZF9tZXNzLWJ0biBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogNXB4IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 90218:
/*!*********************************************************************************!*\
  !*** ./src/app/profile/messages/send-message/send-message.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon routerLink=\"/messages\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title class=\"header-title\">{{userName}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"content\">\r\n    <span class=\"content-box\">\r\n      <ion-item *ngFor=\"let list of chatBoxList\" lines=\"none\">\r\n       <span class=\"mesg\"> {{list.Message}}</span> \r\n       <!-- <span class=\"created_on\">{{list.Created_on | date: 'MMM d, y, h:mm a'}}</span> -->\r\n      </ion-item>\r\n      <ion-item lines=\"none\"></ion-item>\r\n    </span>\r\n  </div>\r\n  <div class=\"send_message_wrapper\">\r\n    <form [formGroup]=\"sendMessage\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-input placeholder=\"Please enter your message\" formControlName=\"message\">\r\n\r\n    </ion-input>\r\n    <ion-button type=\"submit\" [disabled]=\"!sendMessage.valid\" class=\"send_mess-btn\">\r\n      <ion-icon name=\"send\"></ion-icon>\r\n     </ion-button>\r\n     </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_messages_send-message_send-message_module_ts.js.map