"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_messages_send-message_send-message_module_ts"],{

/***/ 79367:
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
/* harmony import */ var _send_message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-message.page */ 12120);




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

/***/ 28397:
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
/* harmony import */ var _send_message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-message-routing.module */ 79367);
/* harmony import */ var _send_message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-message.page */ 12120);







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

/***/ 12120:
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
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ 91557);








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
        // console.log(formdata)
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

module.exports = ".header-bg-color {\n  --background:#e14b4c;\n  --padding-start: 15px;\n}\n.header-bg-color .back-btn {\n  color: #ffffff;\n  font-size: 25px;\n}\n.header-bg-color .header-title {\n  display: inline-block;\n}\nion-content {\n  --background: #ffff;\n}\nion-content .content .content-box {\n  height: 90%;\n  margin-top: 20px;\n  display: inline-block;\n  width: 100%;\n}\nion-content .content .content-box ion-item {\n  --background:#fff;\n  color: #000;\n}\nion-content .content .content-box ion-item .mesg {\n  width: 60%;\n  text-overflow: wrap;\n}\nion-content .content .content-box ion-item .created_on {\n  width: 40%;\n  margin-left: 20px;\n  color: #e3e3e3;\n}\nion-content .send_message_wrapper {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  z-index: 99;\n  background: #fff;\n}\nion-content .send_message_wrapper form {\n  display: flex;\n  width: 100%;\n}\nion-content .send_message_wrapper form ion-input {\n  color: #000;\n  border: solid 1px #e3e3e3;\n  flex-grow: 1;\n}\nion-content .send_message_wrapper form .send_mess-btn {\n  height: 40px;\n  margin: 0;\n}\nion-content .send_message_wrapper form .send_mess-btn ion-icon {\n  font-size: 26px;\n  color: #fff;\n  margin: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFBQTtFQUFXLGNBQUE7RUFBZ0IsZUFBQTtBQUkzQjtBQUZBO0VBQ0kscUJBQUE7QUFJSjtBQURBO0VBQ0ksbUJBQUE7QUFJSjtBQUZRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBSVo7QUFIWTtFQUFTLGlCQUFBO0VBQW1CLFdBQUE7QUFPeEM7QUFOWTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQVFoQjtBQU5ZO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFoQjtBQUZJO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUhRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFLWjtBQUpRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0QsWUFBQTtBQU1YO0FBSFE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtBQUtaO0FBSlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTVoiLCJmaWxlIjoic2VuZC1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmctY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6I2UxNGI0YzsgICAgXHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbi5iYWNrLWJ0bnsgY29sb3I6ICNmZmZmZmY7IGZvbnQtc2l6ZTogMjVweDt9XHJcblxyXG4uaGVhZGVyLXRpdGxle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgLmNvbnRlbnQtYm94e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiNmZmY7IGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAubWVzZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiB3cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jcmVhdGVkX29ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlM2UzZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlbmRfbWVzc2FnZV93cmFwcGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMCA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlM2UzZTM7XHJcbiAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlbmRfbWVzcy1idG57XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

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