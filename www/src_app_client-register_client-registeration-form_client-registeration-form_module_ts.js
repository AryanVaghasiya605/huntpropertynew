"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_client-register_client-registeration-form_client-registeration-form_module_ts"],{

/***/ 3974:
/*!*******************************************************************************************************!*\
  !*** ./src/app/client-register/client-registeration-form/client-registeration-form-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegisterationFormPageRoutingModule": () => (/* binding */ ClientRegisterationFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_registeration_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-registeration-form.page */ 37576);




const routes = [
    {
        path: '',
        component: _client_registeration_form_page__WEBPACK_IMPORTED_MODULE_0__.ClientRegisterationFormPage
    }
];
let ClientRegisterationFormPageRoutingModule = class ClientRegisterationFormPageRoutingModule {
};
ClientRegisterationFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientRegisterationFormPageRoutingModule);



/***/ }),

/***/ 27474:
/*!***********************************************************************************************!*\
  !*** ./src/app/client-register/client-registeration-form/client-registeration-form.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegisterationFormPageModule": () => (/* binding */ ClientRegisterationFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_registeration_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-registeration-form-routing.module */ 3974);
/* harmony import */ var _client_registeration_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-registeration-form.page */ 37576);
/* harmony import */ var src_app_custom_range_custom_range_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/custom-range/custom-range.page */ 56974);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);









let ClientRegisterationFormPageModule = class ClientRegisterationFormPageModule {
};
ClientRegisterationFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _client_registeration_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientRegisterationFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule
        ],
        declarations: [_client_registeration_form_page__WEBPACK_IMPORTED_MODULE_1__.ClientRegisterationFormPage, src_app_custom_range_custom_range_page__WEBPACK_IMPORTED_MODULE_2__.CustomRangePage]
    })
], ClientRegisterationFormPageModule);



/***/ }),

/***/ 37576:
/*!*********************************************************************************************!*\
  !*** ./src/app/client-register/client-registeration-form/client-registeration-form.page.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegisterationFormPage": () => (/* binding */ ClientRegisterationFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_registeration_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-registeration-form.page.html?ngResource */ 39178);
/* harmony import */ var _client_registeration_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-registeration-form.page.scss?ngResource */ 86164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 42735);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 20070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ 91944);










let ClientRegisterationFormPage = class ClientRegisterationFormPage {
    constructor(_fb, _main, _nativeStorage, _router, _utilService) {
        this._fb = _fb;
        this._main = _main;
        this._nativeStorage = _nativeStorage;
        this._router = _router;
        this._utilService = _utilService;
        this.model = { option: 'option3' };
        this.steps = 1;
        this.min = 1;
        this.max = 10;
        this.hideNextBtn = true;
        this.showSubmitBtn = false;
        this.showPreviousBtn = false;
        this.faIndianRupeeSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faIndianRupeeSign;
        this.loanRequired = false;
        this.propertyType = "";
        this.activeTab = '';
        this.possessionTabActive = '';
        this.projectPurpose = "Residential";
        this.projectTypeTabActive = '';
        this.setLocation = "Delhi";
        this.location = [
            { id: "1", locationName: "Delhi" },
            { id: "2", locationName: "Noida" },
            { id: "3", locationName: "Greater Noida" },
            { id: "4", locationName: "Ghaziabad" },
        ];
    }
    ngOnInit() {
        this.clientRegistraionForm = this._fb.group({
            // client_name:['Rahul Verma'],
            // client_email:['rahul@gmail.com'],
            // client_phone:['9876543210'],
            // client_address:['123, Sector 5, Laxmi nagar'],
            // how_know:['Sms'],
            // propertyType:['Residential'],
            // projectType:['Flat'],
            // projectType_cat:['1 BHK'],
            // project_purpose:['Investment'],
            // size_property:['1000'],
            // size_property_unit:['SQFT'],
            // property_possession:['Ready to move'],
            // property_location:['Noida, Gurugram, Faridabad'],
            // property_investment:['Less than 30 Lakhs'],
            // bank_loan:['Yes'],
            // self_funding_percent:['50'],
            // bank_loan_funding_percent:['50'],
            // deal_finalise_duration:['With in a Week'],
            // createdBy:['46']
            client_name: [''],
            client_email: [''],
            client_phone: [''],
            client_address: ['123, Sector 5, Laxmi nagar'],
            how_know: [''],
            propertyType: [''],
            projectType: [''],
            projectType_cat: [''],
            project_purpose: [''],
            size_property: [''],
            size_property_unit: [''],
            property_possession: [''],
            property_location: [''],
            property_investment: [''],
            bank_loan: [''],
            self_funding_percent: [''],
            bank_loan_funding_percent: [''],
            deal_finalise_duration: [''],
            createdBy: ['']
        });
    }
    ionViewWillEnter() {
        // console.log('location',this.location)
        this._nativeStorage.getItem('userId').then((data) => {
            this.clientRegistraionForm.get('createdBy').setValue(data);
        });
        this.steps = 1;
        this._main.projectType().then((data) => {
            let parseData = JSON.parse(data.data);
            console.group(parseData.data);
            this.projectTypes = parseData.data;
        });
        let id = 1;
        this.getProjectTypeId(id, this.propertyType);
        this.getCategoryId(1);
        this.getSubcategoryId(1);
        this.setActive(this.projectPurpose);
        this.getLocation(this.setLocation);
    }
    getRangeValue(ev) {
        //console.log(ev)  
        this.budget = ev;
    }
    getProjectTypeId(id, propertyType) {
        this.projectTypeTabActive = propertyType;
        this.propertyType = propertyType;
        let data = {
            projecttypeid: id
        };
        this._main.getProjectCatogery(data).then((data) => {
            let parseData = JSON.parse(data.data);
            console.group(parseData.data);
            this.projectCatogery = parseData.data;
            this.getId = this.projectCatogery[0].Id;
            this.ProjectCategory = this.projectCatogery[0].ProjectCategory;
            // console.log('this.getId', this.getId);
            this.getCategoryId(this.getId);
        });
    }
    updateValue(ev) {
        // console.log('event', ev.target.value)
    }
    getCategoryId(ev) {
        // console.log(ev)
        let data = {
            projectcategoryid: ''
        };
        if (ev === this.getId) {
            // debugger;
            data.projectcategoryid = ev;
        }
        else if (ev.target.value != '') {
            // console.log('else')
            data.projectcategoryid = ev.target.value;
            this.projectCatogery.forEach(element => {
                // console.log(element)
                if (ev.target.value === element.Id) {
                    this.ProjectCategory = element.ProjectCategory;
                    // break;         
                }
            });
            // console.log(' this.ProjectCategory',  this.ProjectCategory)
        }
        //console.log(data)
        this._main.getProjectSubCatogery(data).then((data) => {
            let parseData = JSON.parse(data.data);
            console.group(parseData.data);
            this.projectSubCatogery = parseData.data;
            this.getSubCatId = this.projectSubCatogery[0].Id;
            this.ProjectSubCategory = this.projectSubCatogery[0].ProjectSubCategory;
            // console.log('this.getSubCatId', this.getSubCatId);
        });
    }
    getSubcategoryId(ev) {
        // console.log('sub',ev)    
        if (ev === this.getSubCatId) {
            // debugger;
            this.getSubCatId = ev;
        }
        else if (ev.target.value != '') {
            //  console.log('else')
            this.getSubCatId = ev.target.value;
            this.projectSubCatogery.forEach(element => {
                if (ev.target.value === element.Id) {
                    this.ProjectSubCategory = element.ProjectSubCategory;
                }
            });
        }
    }
    setActive(tab) {
        // console.log(tab)
        this.projectPurpose = tab;
        return this.activeTab = tab;
    }
    getPossessionStatus(tab) {
        // console.log(tab)
        this.clientRegistraionForm.get('property_possession').setValue(tab);
        return this.possessionTabActive = tab;
    }
    getLocation(ev) {
        // console.log(ev.target.value)
        this.location.forEach((ele) => {
            //  console.log(ele)
            if (ev.target.value == ele.id) {
                //  console.log('ghgh')
                return this.setLocation = ele.locationName;
                // this.clientRegistraionForm.get('property_location').setValue(ele.locationName); 
            }
        });
        //  console.log(this.setLocation)
    }
    getParaMeter(ev) {
        // console.log(ev.target.value)
        this.clientRegistraionForm.get('size_property_unit').setValue(ev.target.value);
    }
    bankLoanRequired(val) {
        this.loanRequired = true;
        if (val === "No") {
            this.loanRequired = false;
        }
        this.clientRegistraionForm.get('bank_loan').setValue(val);
    }
    closeLoanRequiredInput() {
        this.loanRequired = false;
    }
    closingDeal(val) {
        this.clientRegistraionForm.get('deal_finalise_duration').setValue(val);
        return this.closingDealTab = val;
    }
    onSubmit() {
        this.steps++;
        this.showPreviousBtn = true;
        let initialBudget = 1;
        this.payload =
            { client_name: this.clientRegistraionForm.get('client_name').value,
                client_email: this.clientRegistraionForm.get('client_email').value,
                client_phone: this.clientRegistraionForm.get('client_phone').value,
                client_address: this.clientRegistraionForm.get('client_address').value,
                how_know: this.clientRegistraionForm.get('how_know').value,
                propertyType: this.propertyType,
                projectType: this.ProjectCategory,
                projectType_cat: this.ProjectSubCategory,
                project_purpose: this.projectPurpose,
                size_property: this.clientRegistraionForm.get('size_property').value,
                size_property_unit: this.clientRegistraionForm.get('size_property_unit').value,
                property_possession: this.clientRegistraionForm.get('property_possession').value,
                property_location: this.setLocation,
                property_investment: this.budget === undefined ? "Less Then " + initialBudget + " Cr." : "Less Then " + this.budget + " Cr.",
                bank_loan: this.clientRegistraionForm.get('bank_loan').value,
                self_funding_percent: this.clientRegistraionForm.get('self_funding_percent').value,
                bank_loan_funding_percent: this.clientRegistraionForm.get('bank_loan_funding_percent').value,
                deal_finalise_duration: this.clientRegistraionForm.get('deal_finalise_duration').value,
                createdBy: this.clientRegistraionForm.get('createdBy').value
            },
            this._nativeStorage.setItem('formData', this.payload);
        //console.log(this.payload);
        //console.log(this.clientRegistraionForm.value);
        if (this.steps === 4) {
            this.showPreviousBtn = false;
            this.hideNextBtn = false;
            this.showSubmitBtn = false;
            let formData = this._nativeStorage.getItem('formData').then((payload) => {
                //  console.log(payload);
                this._main.clientRegistration(payload).then((data) => {
                    this.hideNextBtn = false;
                    this.showSubmitBtn = false;
                    this.showPreviousBtn = false;
                    // console.log(data)
                    if (data.status === 200) {
                        // console.log('success')
                        this._router.navigateByUrl('/client-register');
                        this._utilService.presentToast('Data is inserted successfully', 'toaster-background');
                    }
                });
            });
        }
    }
    submitButtonClicked() {
        //  console.log('clicked')
        this.steps = 0;
        this.showPreviousBtn = false;
    }
    goBack() {
        this.steps--;
        this.hideNextBtn = true;
    }
};
ClientRegisterationFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService }
];
ClientRegisterationFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-client-registeration-form',
        template: _client_registeration_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_client_registeration_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientRegisterationFormPage);



/***/ }),

/***/ 86164:
/*!**********************************************************************************************************!*\
  !*** ./src/app/client-register/client-registeration-form/client-registeration-form.page.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-item, ion-content {\n  --background:#fff;\n  color: #000;\n}\n\nion-input, ion-textarea {\n  border: solid 1px #E4E4E4;\n  --padding-start: 15px !important;\n  color: #000;\n}\n\n.client-form-list {\n  padding: 0 15px;\n}\n\n.client-form-list ion-label {\n  color: #000;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.client-form-list ion-item {\n  --background:#fff;\n  color: #000;\n}\n\n.client-form-list span {\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%;\n}\n\n.availableFormWrapper {\n  padding: 0 15px;\n  color: #000;\n  display: flex;\n}\n\n.availableFormWrapper ul {\n  padding-left: 0px;\n}\n\n.availableFormWrapper ul li {\n  color: #000;\n  list-style: none;\n  margin: 0 8px;\n  float: left;\n  width: 40%;\n  margin-bottom: 20px;\n}\n\n.availableFormWrapper ul li label {\n  position: relative;\n}\n\n.availableFormWrapper ul li label input[type=radio] {\n  margin-right: 5px;\n}\n\n.availableFormWrapper ul li label .checkmark {\n  position: absolute;\n  top: -2px;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-radius: 50%;\n  left: -1px;\n  border: solid 1px #C5C5C5;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.availableFormWrapper ul li label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  top: 4px;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #FE1300;\n}\n\n.nextBtn {\n  width: 100%;\n  height: 40px;\n}\n\n.projectType {\n  color: #000;\n  padding-left: 15px;\n}\n\n.clients-btn {\n  width: 50%;\n  line-height: 30px;\n  display: inline-block;\n  text-align: center;\n  margin: 0 6px;\n  background: #fff;\n  color: #000;\n  border: solid 1px #E4E4E4;\n}\n\n.clients-btn.active {\n  color: #fff;\n  background-color: #FE1300;\n}\n\n.monthlyRent.color-black {\n  padding-left: 16px;\n  margin-top: 20px;\n  display: block;\n}\n\n.range app-custom-range {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n\n.color-black {\n  color: #000;\n}\n\nion-item ion-select {\n  width: 100%;\n  border: solid 1px #E4E4E4;\n  --padding-start: 10px;\n  border-radius: 5px;\n}\n\n.purpose a {\n  border: solid 1px #E4E4E4;\n  display: inline-block;\n  border-radius: 5px;\n  margin: 0px 3px;\n  color: #bebcbc;\n  width: 100px;\n  text-align: center;\n  line-height: 31px;\n  text-decoration: underline;\n}\n\n.purpose a.active {\n  background-color: #FE1300;\n  color: #fff;\n}\n\n.bankLoan {\n  margin-top: 10px;\n}\n\n.bankLoan a {\n  border-radius: 10px;\n  border-radius: 20%;\n  width: auto;\n  padding: 0 19px;\n}\n\n.bankLoan ion-item {\n  -webkit-padding-start: 0;\n  --padding-start: 0;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  margin-top: 10px;\n  position: relative;\n  width: 100%;\n  overflow: visible;\n}\n\n.bankLoan ion-item ion-input {\n  margin: 0 5px;\n  width: 135px;\n}\n\n.bankLoan ion-item span {\n  position: absolute;\n  right: -9px;\n  top: 10px;\n  z-index: 9;\n  border-radius: 50%;\n  border: solid 1px #bebcbc;\n  padding: 2px 6px;\n}\n\nion-input {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1yZWdpc3RlcmF0aW9uLWZvcm0ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2ZWVuJTIwa3VtYXIlMjBrYXRpeWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcaHVudG5ld1xcaHVudHByb3BlcnR5bmV3XFxzcmNcXGFwcFxcY2xpZW50LXJlZ2lzdGVyXFxjbGllbnQtcmVnaXN0ZXJhdGlvbi1mb3JtXFxjbGllbnQtcmVnaXN0ZXJhdGlvbi1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF1QixpQkFBQTtFQUFrQixXQUFBO0FDR3pDOztBREZBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURMSTtFQUFXLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixjQUFBO0FDVWhEOztBRFRJO0VBQVUsaUJBQUE7RUFBbUIsV0FBQTtBQ2FqQzs7QURaSTtFQUNJLG1CQUFBO0VBQXFCLHFCQUFBO0VBQXNCLFdBQUE7QUNnQm5EOztBRFpBO0VBQXVCLGVBQUE7RUFDbkIsV0FBQTtFQUNBLGFBQUE7QUNnQko7O0FEZkk7RUFDSSxpQkFBQTtBQ2lCUjs7QURoQlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ2tCWjs7QURqQlk7RUFDSSxrQkFBQTtBQ21CaEI7O0FEbEJnQjtFQUNJLGlCQUFBO0FDb0JwQjs7QURsQmdCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDb0JwQjs7QURqQmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ21CcEI7O0FEaEJtQjtFQUNDLGNBQUE7QUNrQnBCOztBRGZrQjtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDaUJwQjs7QURYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWkE7RUFBYyxXQUFBO0VBQWEsa0JBQUE7QUNpQjNCOztBRGhCQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNtQko7O0FEakJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDb0JKOztBRGxCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcUJKOztBRGxCSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNxQlI7O0FEbEJBO0VBQ1EsV0FBQTtBQ3FCUjs7QURsQkk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDcUJSOztBRGpCSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ29CUjs7QURqQkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNtQlI7O0FEaEJBO0VBQ0ksZ0JBQUE7QUNtQko7O0FEbEJJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDb0JSOztBRGxCSTtFQUNHLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ29CUDs7QURuQk87RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQ3FCUjs7QURuQk87RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ3FCUjs7QURqQkE7RUFBVSxrQkFBQTtBQ3FCViIsImZpbGUiOiJjbGllbnQtcmVnaXN0ZXJhdGlvbi1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLCBpb24tY29udGVudHsgLS1iYWNrZ3JvdW5kOiNmZmY7Y29sb3I6ICMwMDA7fVxyXG5pb24taW5wdXQsaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmNsaWVudC1mb3JtLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBpb24tbGFiZWx7IGNvbG9yOiAjMDAwOyBtYXJnaW4tYm90dG9tOiA1cHg7IGRpc3BsYXk6IGJsb2NrO31cclxuICAgIGlvbi1pdGVteyAtLWJhY2tncm91bmQ6I2ZmZjsgY29sb3I6ICMwMDA7fVxyXG4gICAgc3BhbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdmFpbGFibGVGb3JtV3JhcHBlcnsgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGVja21hcmt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjQzVDNUM1O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZFMTMwMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5uZXh0QnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnByb2plY3RUeXBleyBjb2xvcjogIzAwMDsgcGFkZGluZy1sZWZ0OiAxNXB4O31cclxuLmNsaWVudHMtYnRue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOjAgNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxufVxyXG4uY2xpZW50cy1idG4uYWN0aXZle1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkUxMzAwO1xyXG59XHJcbi5tb250aGx5UmVudC5jb2xvci1ibGFja3tcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucmFuZ2Uge1xyXG4gICAgYXBwLWN1c3RvbS1yYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4uY29sb3ItYmxhY2t7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbmlvbi1pdGVte1xyXG4gICAgaW9uLXNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnB1cnBvc2Uge1xyXG4gICAgYXtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0OyAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDNweDtcclxuICAgICAgICBjb2xvcjogI2JlYmNiYztcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYS5hY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFMTMwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG4uYmFua0xvYW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAxOXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7IFxyXG4gICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICB3aWR0aDogMTM1cHg7XHJcbiAgICAgICB9XHJcbiAgICAgICBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTlweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2JlYmNiYztcclxuICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1pbnB1dHtwYWRkaW5nLWxlZnQ6IDE1cHg7fSIsImlvbi1pdGVtLCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWEge1xuICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jbGllbnQtZm9ybS1saXN0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmNsaWVudC1mb3JtLWxpc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2xpZW50LWZvcm0tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jbGllbnQtZm9ybS1saXN0IHNwYW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXZhaWxhYmxlRm9ybVdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmF2YWlsYWJsZUZvcm1XcmFwcGVyIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uYXZhaWxhYmxlRm9ybVdyYXBwZXIgdWwgbGkge1xuICBjb2xvcjogIzAwMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDhweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYXZhaWxhYmxlRm9ybVdyYXBwZXIgdWwgbGkgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXZhaWxhYmxlRm9ybVdyYXBwZXIgdWwgbGkgbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5hdmFpbGFibGVGb3JtV3JhcHBlciB1bCBsaSBsYWJlbCAuY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogLTFweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0M1QzVDNTtcbn1cbi5hdmFpbGFibGVGb3JtV3JhcHBlciB1bCBsaSBsYWJlbCAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmF2YWlsYWJsZUZvcm1XcmFwcGVyIHVsIGxpIGxhYmVsIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXZhaWxhYmxlRm9ybVdyYXBwZXIgdWwgbGkgbGFiZWwgLmNoZWNrbWFyazphZnRlciB7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI0ZFMTMwMDtcbn1cblxuLm5leHRCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucHJvamVjdFR5cGUge1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uY2xpZW50cy1idG4ge1xuICB3aWR0aDogNTAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xufVxuXG4uY2xpZW50cy1idG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTEzMDA7XG59XG5cbi5tb250aGx5UmVudC5jb2xvci1ibGFjayB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yYW5nZSBhcHAtY3VzdG9tLXJhbmdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sb3ItYmxhY2sge1xuICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnB1cnBvc2UgYSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNFNEU0RTQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDBweCAzcHg7XG4gIGNvbG9yOiAjYmViY2JjO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnB1cnBvc2UgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkUxMzAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJhbmtMb2FuIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5iYW5rTG9hbiBhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMCAxOXB4O1xufVxuLmJhbmtMb2FuIGlvbi1pdGVtIHtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLmJhbmtMb2FuIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiAxMzVweDtcbn1cbi5iYW5rTG9hbiBpb24taXRlbSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTlweDtcbiAgdG9wOiAxMHB4O1xuICB6LWluZGV4OiA5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZWJjYmM7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn0iXX0= */";

/***/ }),

/***/ 39178:
/*!**********************************************************************************************************!*\
  !*** ./src/app/client-register/client-registeration-form/client-registeration-form.page.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\n  <ion-toolbar class=\"header-bg-color\">    \n    <ion-icon slot=\"start\" routerLink=\"/client-register\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\n    <ion-title slot=\"start\" class=\"header-title\">Client Registration Form</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<form [formGroup]=\"clientRegistraionForm\" (ngSubmit)=\"onSubmit()\">\n<div class=\"first-step-registration\" *ngIf=\"steps === 1\">\n  <ion-item lines=\"none\">Client Details</ion-item>\n  <div class=\"client-form-list\">  \n      <span>\n        <ion-label>Name</ion-label>\n        <ion-input formControlName=\"client_name\"></ion-input>\n      </span>\n      <span>\n        <ion-label>Email</ion-label>\n        <ion-input formControlName=\"client_email\"></ion-input>\n      </span>\n      <span>\n        <ion-label>Contact</ion-label>\n        <ion-input formControlName=\"client_phone\"></ion-input>\n      </span>\n      <span>\n        <ion-label>Address</ion-label>\n        <ion-textarea formControlName=\"client_address\"></ion-textarea>\n      </span>\n    \n  </div>\n  <ion-item lines=\"none\">How do you get to know about us?</ion-item>\n  <div class=\"availableFormWrapper\">\n    <ul>\n      <li>\n        <label class=\"container\">\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"sms\" >\n          SMS\n          <span class=\"checkmark\"></span>\n        </label>\n      </li>\n      <li>\n        <label class=\"container\">\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Newspaper\" >\n          Newspaper\n          <span class=\"checkmark\"></span>\n        </label>\n      </li>\n      <li>\n        <label class=\"container\">\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Friend\" >\n          Friend\n          <span class=\"checkmark\"></span>\n        </label>\n      </li>\n      <li>\n        <label class=\"container\">\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Facebook\" >\n          Facebook\n          <span class=\"checkmark\"></span>\n        </label>\n      </li>\n      <li>\n        <label class=\"container\">\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Instagram\" >\n          Instagram\n          <span class=\"checkmark\"></span>\n        </label>\n      </li>\n      <li>\n        <label class=\"container\">\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Google\" >\n          Google\n          <span class=\"checkmark\"></span>\n        </label>\n      </li>\n      <li>\n        <label class=\"container\">\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Walk In\" >\n          Walk In\n          <span class=\"checkmark\"></span>\n        </label>\n      </li>\n    </ul>  \n  </div>\n  <ion-item lines=\"none\">\n    <ion-text color=\"danger\">\n      <p>All fields are mandatory. Please provide all informations</p>\n    </ion-text>\n  </ion-item>\n</div>\n<div class=\"second-step-registration\" *ngIf=\"steps === 2\">\n<ion-item lines=\"none\">Project Looking for</ion-item>\n<div class=\"projectType\">Please choose project type</div>\n<ion-item lines=\"none\">\n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[0].Id, projectTypes[0].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[0].PropertyType || projectTypes[0].PropertyType == \n  projectPurpose}\">{{projectTypes[0].PropertyType}}</div>    \n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[1].Id, projectTypes[1].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[1].PropertyType}\"> {{projectTypes[1].PropertyType}}</div>  \n</ion-item>\n<ion-item lines=\"none\">  \n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[2].Id, projectTypes[2].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[2].PropertyType}\">{{projectTypes[2].PropertyType}}</div> \n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[3].Id, projectTypes[3].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[3].PropertyType}\">{{projectTypes[3].PropertyType}}</div>    \n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[4].Id, projectTypes[4].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[4].PropertyType}\"> {{projectTypes[4].PropertyType}}</div>\n</ion-item>\n<span class=\"monthlyRent color-black\" slot=\"start\">\n    Category\n  </span> \n<ion-item lines=\"none\">\n  <ion-select  placeholder=\"Select Category\" value=\"{{getId}}\" (ionChange)=\"getCategoryId($event)\">\n    <ion-select-option *ngFor=\"let item of projectCatogery\" value=\"{{item.Id}}\">{{item.ProjectCategory}}</ion-select-option>      \n  </ion-select>  \n</ion-item>\n<span class=\"monthlyRent color-black\" slot=\"start\">\n  Subcategory\n</span>\n<ion-item lines=\"none\">\n<ion-select placeholder=\"Select SubCategory\" value=\"{{getSubCatId}}\" (ionChange)=\"getSubcategoryId($event)\">\n  <ion-select-option *ngFor=\"let item of projectSubCatogery\" value=\"{{item.Id}}\">{{item.ProjectSubCategory}}</ion-select-option>\n    \n</ion-select>\n</ion-item>\n\n<span class=\"monthlyRent color-black\" slot=\"start\">\n  Subcategory\n</span>\n<ion-item lines=\"none\">\n<div class=\"purpose\">\n  <a (click)=\"setActive('Investment')\" [ngClass]=\"{ 'active':  activeTab == 'Investment'}\">Investment</a>\n  <a (click)=\"setActive('selfUse')\" [ngClass]=\"{ 'active': activeTab == 'selfUse' }\">Self Use</a>\n  <a (click)=\"setActive('both')\" [ngClass]=\"{ 'active': activeTab == 'both' }\">Both</a>\n</div>\n</ion-item>\n<span class=\"monthlyRent color-black\" slot=\"start\">Size</span>\n<span class=\"monthlyRent color-black\" slot=\"start\">\n    Parameter\n  </span>\n<ion-item lines=\"none\">\n  <ion-select type=\"text\" placeholder=\"Select Category\" value=\"SQFT\" (ionChange)=\"getParaMeter($event)\">\n    <ion-select-option value=\"SQFT\">SQFT</ion-select-option>\n    <ion-select-option value=\"SQMTR\">SQMTR</ion-select-option>\n    <ion-select-option value=\"SQYD\">SQYD</ion-select-option>   \n  </ion-select>\n</ion-item>\n<span class=\"monthlyRent color-black\" slot=\"start\">\n  Property Size\n</span>\n<ion-item lines=\"none\">\n<ion-input formControlName=\"size_property\"></ion-input>\n</ion-item>\n<ion-item lines=\"none\">\n  <ion-text color=\"danger\">\n    <p>All fields are mandatory. Please provide all informations</p>\n  </ion-text>\n</ion-item>\n</div>\n<div class=\"second-step-registration\" *ngIf=\"steps === 3\">\n  \n  <div class=\"projectType\">Possession Status</div>\n  <ion-item lines=\"none\">\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Ready to move')\" [ngClass]=\"{'active': possessionTabActive == 'Ready to move'}\">Ready to move</div>    \n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Under Construction')\" [ngClass]=\"{'active': possessionTabActive == 'Under Construction'}\">Under Construction</div>  \n  </ion-item>\n  <ion-item lines=\"none\">  \n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Within 6 months')\" [ngClass]=\"{'active': possessionTabActive == 'Within 6 months'}\">Within 6 months</div> \n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Within 9 months')\" [ngClass]=\"{'active': possessionTabActive == 'Within 9 months'}\">Within 9 months</div>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Within 12 months')\" [ngClass]=\"{'active': possessionTabActive == 'Within 12 months'}\">Within 12 months</div>\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('More Then Year')\" [ngClass]=\"{'active': possessionTabActive == 'More Then Year'}\">More Then Year </div>\n  </ion-item>\n  <span class=\"monthlyRent color-black\" slot=\"start\">\n      Location{{location[0].id}}\n    </span> \n  <ion-item lines=\"none\">    \n    <ion-select  placeholder=\"Select Location\" value=\"{{location[0].id}}\"  (ionChange)=\"getLocation($event)\">\n      <ion-select-option *ngFor=\"let item of location\" value=\"{{item.id}}\">{{item.locationName}}</ion-select-option>      \n    </ion-select>  \n  </ion-item>\n  \n  <span class=\"monthlyRent color-black\" slot=\"start\">\n    Budget   \n  </span>\n  <ion-item lines=\"none\" class=\"range\">\n    <app-custom-range [min]=\"min\" [max]=\"max\" [step]=\"1\" (sliderVal)=\"getRangeValue($event)\"></app-custom-range>\n  </ion-item>\n  \n  <span class=\"monthlyRent color-black\" slot=\"start\">\n    Bank Loan\n  </span>\n  <ion-item lines=\"none\">\n  <div class=\"purpose bankLoan\">\n    <a (click)=\"bankLoanRequired('Yes')\">Yes</a>\n    <a (click)=\"bankLoanRequired('No')\">No</a>\n    <ion-item lines=\"none\" *ngIf=\"loanRequired\">\n      <ion-input placeholder=\"Self funding - %\" maxlength=\"3\" formControlName=\"self_funding_percent\"></ion-input>\n      <ion-input placeholder=\"Bank Loan - %\" maxlength=\"2\" formControlName=\"bank_loan_funding_percent\"></ion-input>\n      <span (click)=\"closeLoanRequiredInput()\">X</span>\n    </ion-item>   \n  </div>\n  </ion-item>    \n  <div class=\"monthlyRent color-black\">Close the Deal</div>\n  <ion-item lines=\"none\">\n    <div class=\"clients-btn\" (click)=\"closingDeal('With in a 2 to 3 Days')\" [ngClass]=\"{'active': closingDealTab === 'With in a 2 to 3 Days'}\">With in a 2 to 3 Days</div>    \n    <div class=\"clients-btn\" (click)=\"closingDeal('With in a Weak')\" [ngClass]=\"{'active': closingDealTab === 'With in a Weak'}\">With in a Weak</div>  \n  </ion-item>\n  <ion-item lines=\"none\">\n    <div class=\"clients-btn\" (click)=\"closingDeal('With in a Month')\" [ngClass]=\"{'active': closingDealTab === 'With in a Month'}\">With in a Month</div>  \n    <div class=\"clients-btn\" (click)=\"closingDeal('With in 2 Weeks')\" [ngClass]=\"{'active': closingDealTab === 'With in 2 Weeks'}\">With in 2 Weeks</div>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <div class=\"clients-btn\" (click)=\"closingDeal('Other Plz Specify')\" [ngClass]=\"{'active': closingDealTab === 'Other Plz Specify'}\">Other Plz Specify</div> \n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-text color=\"danger\">\n      <p>All fields are mandatory. Please provide all informations</p>\n    </ion-text>\n  </ion-item>\n  </div>\n<ion-item lines=\"none\">\n  <ion-button *ngIf=\"steps > 1 && showPreviousBtn\" class=\"nextBtn\" type=\"button\" (click)=\"goBack()\">Previous</ion-button>\n  <ion-button *ngIf=\"hideNextBtn\" class=\"nextBtn\" type=\"submit\">Next</ion-button>\n  <ion-button *ngIf=\"steps > 2  && showSubmitBtn\" class=\"nextBtn submitBtn\"  type=\"submit\">Submit</ion-button>\n</ion-item>\n\n</form> \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_client-register_client-registeration-form_client-registeration-form_module_ts.js.map