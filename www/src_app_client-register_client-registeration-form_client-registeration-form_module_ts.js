"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_client-register_client-registeration-form_client-registeration-form_module_ts"],{

/***/ 29558:
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
/* harmony import */ var _client_registeration_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-registeration-form.page */ 38105);




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

/***/ 4884:
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
/* harmony import */ var _client_registeration_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-registeration-form-routing.module */ 29558);
/* harmony import */ var _client_registeration_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-registeration-form.page */ 38105);
/* harmony import */ var src_app_custom_range_custom_range_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/custom-range/custom-range.page */ 56008);
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

/***/ 38105:
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
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ 91557);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ 67241);










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

module.exports = "ion-item, ion-content {\n  --background:#fff;\n  color: #000;\n}\n\nion-input, ion-textarea {\n  border: solid 1px #E4E4E4;\n  --padding-start: 15px !important;\n  color: #000;\n}\n\n.client-form-list {\n  padding: 0 15px;\n}\n\n.client-form-list ion-label {\n  color: #000;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.client-form-list ion-item {\n  --background:#fff;\n  color: #000;\n}\n\n.client-form-list span {\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%;\n}\n\n.availableFormWrapper {\n  padding: 0 15px;\n  color: #000;\n  display: flex;\n}\n\n.availableFormWrapper ul {\n  padding-left: 0px;\n}\n\n.availableFormWrapper ul li {\n  color: #000;\n  list-style: none;\n  margin: 0 8px;\n  float: left;\n  width: 40%;\n  margin-bottom: 20px;\n}\n\n.availableFormWrapper ul li label {\n  position: relative;\n}\n\n.availableFormWrapper ul li label input[type=radio] {\n  margin-right: 5px;\n}\n\n.availableFormWrapper ul li label .checkmark {\n  position: absolute;\n  top: -2px;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-radius: 50%;\n  left: -1px;\n  border: solid 1px #C5C5C5;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.availableFormWrapper ul li label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  top: 4px;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #FE1300;\n}\n\n.nextBtn {\n  width: 100%;\n  height: 40px;\n}\n\n.projectType {\n  color: #000;\n  padding-left: 15px;\n}\n\n.clients-btn {\n  width: 50%;\n  line-height: 30px;\n  display: inline-block;\n  text-align: center;\n  margin: 0 6px;\n  background: #fff;\n  color: #000;\n  border: solid 1px #E4E4E4;\n}\n\n.clients-btn.active {\n  color: #fff;\n  background-color: #FE1300;\n}\n\n.monthlyRent.color-black {\n  padding-left: 16px;\n  margin-top: 20px;\n  display: block;\n}\n\n.range app-custom-range {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n\n.color-black {\n  color: #000;\n}\n\nion-item ion-select {\n  width: 100%;\n  border: solid 1px #E4E4E4;\n  --padding-start: 10px;\n  border-radius: 5px;\n}\n\n.purpose a {\n  border: solid 1px #E4E4E4;\n  display: inline-block;\n  border-radius: 5px;\n  margin: 0px 3px;\n  color: #bebcbc;\n  width: 100px;\n  text-align: center;\n  line-height: 31px;\n  text-decoration: underline;\n}\n\n.purpose a.active {\n  background-color: #FE1300;\n  color: #fff;\n}\n\n.bankLoan {\n  margin-top: 10px;\n}\n\n.bankLoan a {\n  border-radius: 10px;\n  border-radius: 20%;\n  width: auto;\n  padding: 0 19px;\n}\n\n.bankLoan ion-item {\n  -webkit-padding-start: 0;\n  --padding-start: 0;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  margin-top: 10px;\n  position: relative;\n  width: 100%;\n  overflow: visible;\n}\n\n.bankLoan ion-item ion-input {\n  margin: 0 5px;\n  width: 135px;\n}\n\n.bankLoan ion-item span {\n  position: absolute;\n  right: -9px;\n  top: 10px;\n  z-index: 9;\n  border-radius: 50%;\n  border: solid 1px #bebcbc;\n  padding: 2px 6px;\n}\n\nion-input {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1yZWdpc3RlcmF0aW9uLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXVCLGlCQUFBO0VBQWtCLFdBQUE7QUFHekM7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUxJO0VBQVcsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLGNBQUE7QUFVaEQ7O0FBVEk7RUFBVSxpQkFBQTtFQUFtQixXQUFBO0FBYWpDOztBQVpJO0VBQ0ksbUJBQUE7RUFBcUIscUJBQUE7RUFBc0IsV0FBQTtBQWdCbkQ7O0FBWkE7RUFBdUIsZUFBQTtFQUNuQixXQUFBO0VBQ0EsYUFBQTtBQWdCSjs7QUFmSTtFQUNJLGlCQUFBO0FBaUJSOztBQWhCUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBa0JaOztBQWpCWTtFQUNJLGtCQUFBO0FBbUJoQjs7QUFsQmdCO0VBQ0ksaUJBQUE7QUFvQnBCOztBQWxCZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFvQnBCOztBQWpCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBbUJwQjs7QUFoQm1CO0VBQ0MsY0FBQTtBQWtCcEI7O0FBZmtCO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFpQnBCOztBQVhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUFjLFdBQUE7RUFBYSxrQkFBQTtBQWlCM0I7O0FBaEJBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFvQko7O0FBbEJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFxQko7O0FBbEJJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXFCUjs7QUFsQkE7RUFDUSxXQUFBO0FBcUJSOztBQWxCSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFxQlI7O0FBakJJO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBb0JSOztBQWpCSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQW1CUjs7QUFoQkE7RUFDSSxnQkFBQTtBQW1CSjs7QUFsQkk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFvQlI7O0FBbEJJO0VBQ0csd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBb0JQOztBQW5CTztFQUNDLGFBQUE7RUFDQSxZQUFBO0FBcUJSOztBQW5CTztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBcUJSOztBQWpCQTtFQUFVLGtCQUFBO0FBcUJWIiwiZmlsZSI6ImNsaWVudC1yZWdpc3RlcmF0aW9uLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0sIGlvbi1jb250ZW50eyAtLWJhY2tncm91bmQ6I2ZmZjtjb2xvcjogIzAwMDt9XHJcbmlvbi1pbnB1dCxpb24tdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uY2xpZW50LWZvcm0tbGlzdHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGlvbi1sYWJlbHsgY29sb3I6ICMwMDA7IG1hcmdpbi1ib3R0b206IDVweDsgZGlzcGxheTogYmxvY2s7fVxyXG4gICAgaW9uLWl0ZW17IC0tYmFja2dyb3VuZDojZmZmOyBjb2xvcjogIzAwMDt9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmF2YWlsYWJsZUZvcm1XcmFwcGVyeyBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoZWNrbWFya3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNDNUM1QzU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkUxMzAwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5leHRCdG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4ucHJvamVjdFR5cGV7IGNvbG9yOiAjMDAwOyBwYWRkaW5nLWxlZnQ6IDE1cHg7fVxyXG4uY2xpZW50cy1idG57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MCA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xyXG59XHJcbi5jbGllbnRzLWJ0bi5hY3RpdmV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTEzMDA7XHJcbn1cclxuLm1vbnRobHlSZW50LmNvbG9yLWJsYWNre1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yYW5nZSB7XHJcbiAgICBhcHAtY3VzdG9tLXJhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi5jb2xvci1ibGFja3tcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuaW9uLWl0ZW17XHJcbiAgICBpb24tc2VsZWN0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNFNEU0RTQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxufVxyXG4ucHVycG9zZSB7XHJcbiAgICBhe1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNFNEU0RTQ7ICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjYmViY2JjO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhLmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkUxMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcbi5iYW5rTG9hbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBhe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwIDE5cHg7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgIC0tcGFkZGluZy1zdGFydDogMDsgXHJcbiAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzVweDtcclxuICAgICAgIH1cclxuICAgICAgIHNwYW57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtOXB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjYmViY2JjO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWlucHV0e3BhZGRpbmctbGVmdDogMTVweDt9Il19 */";

/***/ }),

/***/ 39178:
/*!**********************************************************************************************************!*\
  !*** ./src/app/client-register/client-registeration-form/client-registeration-form.page.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon slot=\"start\" routerLink=\"/client-register\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title slot=\"start\" class=\"header-title\">Client Registration Form</ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<form [formGroup]=\"clientRegistraionForm\" (ngSubmit)=\"onSubmit()\">\r\n<div class=\"first-step-registration\" *ngIf=\"steps === 1\">\r\n  <ion-item lines=\"none\">Client Details</ion-item>\r\n  <div class=\"client-form-list\">  \r\n      <span>\r\n        <ion-label>Name</ion-label>\r\n        <ion-input formControlName=\"client_name\"></ion-input>\r\n      </span>\r\n      <span>\r\n        <ion-label>Email</ion-label>\r\n        <ion-input formControlName=\"client_email\"></ion-input>\r\n      </span>\r\n      <span>\r\n        <ion-label>Contact</ion-label>\r\n        <ion-input formControlName=\"client_phone\"></ion-input>\r\n      </span>\r\n      <span>\r\n        <ion-label>Address</ion-label>\r\n        <ion-textarea formControlName=\"client_address\"></ion-textarea>\r\n      </span>\r\n    \r\n  </div>\r\n  <ion-item lines=\"none\">How do you get to know about us?</ion-item>\r\n  <div class=\"availableFormWrapper\">\r\n    <ul>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"sms\" >\r\n          SMS\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Newspaper\" >\r\n          Newspaper\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Friend\" >\r\n          Friend\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Facebook\" >\r\n          Facebook\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Instagram\" >\r\n          Instagram\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Google\" >\r\n          Google\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" formControlName=\"how_know\" name=\"how_know\" value=\"Walk In\" >\r\n          Walk In\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n    </ul>  \r\n  </div>\r\n  <ion-item lines=\"none\">\r\n    <ion-text color=\"danger\">\r\n      <p>All fields are mandatory. Please provide all informations</p>\r\n    </ion-text>\r\n  </ion-item>\r\n</div>\r\n<div class=\"second-step-registration\" *ngIf=\"steps === 2\">\r\n<ion-item lines=\"none\">Project Looking for</ion-item>\r\n<div class=\"projectType\">Please choose project type</div>\r\n<ion-item lines=\"none\">\r\n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[0].Id, projectTypes[0].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[0].PropertyType || projectTypes[0].PropertyType == \r\n  projectPurpose}\">{{projectTypes[0].PropertyType}}</div>    \r\n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[1].Id, projectTypes[1].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[1].PropertyType}\"> {{projectTypes[1].PropertyType}}</div>  \r\n</ion-item>\r\n<ion-item lines=\"none\">  \r\n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[2].Id, projectTypes[2].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[2].PropertyType}\">{{projectTypes[2].PropertyType}}</div> \r\n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[3].Id, projectTypes[3].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[3].PropertyType}\">{{projectTypes[3].PropertyType}}</div>    \r\n  <div class=\"clients-btn\" (click)=\"getProjectTypeId(projectTypes[4].Id, projectTypes[4].PropertyType)\" [ngClass]=\"{'active': projectTypeTabActive == projectTypes[4].PropertyType}\"> {{projectTypes[4].PropertyType}}</div>\r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n    Category\r\n  </span> \r\n<ion-item lines=\"none\">\r\n  <ion-select  placeholder=\"Select Category\" value=\"{{getId}}\" (ionChange)=\"getCategoryId($event)\">\r\n    <ion-select-option *ngFor=\"let item of projectCatogery\" value=\"{{item.Id}}\">{{item.ProjectCategory}}</ion-select-option>      \r\n  </ion-select>  \r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n  Subcategory\r\n</span>\r\n<ion-item lines=\"none\">\r\n<ion-select placeholder=\"Select SubCategory\" value=\"{{getSubCatId}}\" (ionChange)=\"getSubcategoryId($event)\">\r\n  <ion-select-option *ngFor=\"let item of projectSubCatogery\" value=\"{{item.Id}}\">{{item.ProjectSubCategory}}</ion-select-option>\r\n    \r\n</ion-select>\r\n</ion-item>\r\n\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n  Subcategory\r\n</span>\r\n<ion-item lines=\"none\">\r\n<div class=\"purpose\">\r\n  <a (click)=\"setActive('Investment')\" [ngClass]=\"{ 'active':  activeTab == 'Investment'}\">Investment</a>\r\n  <a (click)=\"setActive('selfUse')\" [ngClass]=\"{ 'active': activeTab == 'selfUse' }\">Self Use</a>\r\n  <a (click)=\"setActive('both')\" [ngClass]=\"{ 'active': activeTab == 'both' }\">Both</a>\r\n</div>\r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">Size</span>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n    Parameter\r\n  </span>\r\n<ion-item lines=\"none\">\r\n  <ion-select type=\"text\" placeholder=\"Select Category\" value=\"SQFT\" (ionChange)=\"getParaMeter($event)\">\r\n    <ion-select-option value=\"SQFT\">SQFT</ion-select-option>\r\n    <ion-select-option value=\"SQMTR\">SQMTR</ion-select-option>\r\n    <ion-select-option value=\"SQYD\">SQYD</ion-select-option>   \r\n  </ion-select>\r\n</ion-item>\r\n<span class=\"monthlyRent color-black\" slot=\"start\">\r\n  Property Size\r\n</span>\r\n<ion-item lines=\"none\">\r\n<ion-input formControlName=\"size_property\"></ion-input>\r\n</ion-item>\r\n<ion-item lines=\"none\">\r\n  <ion-text color=\"danger\">\r\n    <p>All fields are mandatory. Please provide all informations</p>\r\n  </ion-text>\r\n</ion-item>\r\n</div>\r\n<div class=\"second-step-registration\" *ngIf=\"steps === 3\">\r\n  \r\n  <div class=\"projectType\">Possession Status</div>\r\n  <ion-item lines=\"none\">\r\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Ready to move')\" [ngClass]=\"{'active': possessionTabActive == 'Ready to move'}\">Ready to move</div>    \r\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Under Construction')\" [ngClass]=\"{'active': possessionTabActive == 'Under Construction'}\">Under Construction</div>  \r\n  </ion-item>\r\n  <ion-item lines=\"none\">  \r\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Within 6 months')\" [ngClass]=\"{'active': possessionTabActive == 'Within 6 months'}\">Within 6 months</div> \r\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Within 9 months')\" [ngClass]=\"{'active': possessionTabActive == 'Within 9 months'}\">Within 9 months</div>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('Within 12 months')\" [ngClass]=\"{'active': possessionTabActive == 'Within 12 months'}\">Within 12 months</div>\r\n    <div class=\"clients-btn\" (click)=\"getPossessionStatus('More Then Year')\" [ngClass]=\"{'active': possessionTabActive == 'More Then Year'}\">More Then Year </div>\r\n  </ion-item>\r\n  <span class=\"monthlyRent color-black\" slot=\"start\">\r\n      Location{{location[0].id}}\r\n    </span> \r\n  <ion-item lines=\"none\">    \r\n    <ion-select  placeholder=\"Select Location\" value=\"{{location[0].id}}\"  (ionChange)=\"getLocation($event)\">\r\n      <ion-select-option *ngFor=\"let item of location\" value=\"{{item.id}}\">{{item.locationName}}</ion-select-option>      \r\n    </ion-select>  \r\n  </ion-item>\r\n  \r\n  <span class=\"monthlyRent color-black\" slot=\"start\">\r\n    Budget   \r\n  </span>\r\n  <ion-item lines=\"none\" class=\"range\">\r\n    <app-custom-range [min]=\"min\" [max]=\"max\" [step]=\"1\" (sliderVal)=\"getRangeValue($event)\"></app-custom-range>\r\n  </ion-item>\r\n  \r\n  <span class=\"monthlyRent color-black\" slot=\"start\">\r\n    Bank Loan\r\n  </span>\r\n  <ion-item lines=\"none\">\r\n  <div class=\"purpose bankLoan\">\r\n    <a (click)=\"bankLoanRequired('Yes')\">Yes</a>\r\n    <a (click)=\"bankLoanRequired('No')\">No</a>\r\n    <ion-item lines=\"none\" *ngIf=\"loanRequired\">\r\n      <ion-input placeholder=\"Self funding - %\" maxlength=\"3\" formControlName=\"self_funding_percent\"></ion-input>\r\n      <ion-input placeholder=\"Bank Loan - %\" maxlength=\"2\" formControlName=\"bank_loan_funding_percent\"></ion-input>\r\n      <span (click)=\"closeLoanRequiredInput()\">X</span>\r\n    </ion-item>   \r\n  </div>\r\n  </ion-item>    \r\n  <div class=\"monthlyRent color-black\">Close the Deal</div>\r\n  <ion-item lines=\"none\">\r\n    <div class=\"clients-btn\" (click)=\"closingDeal('With in a 2 to 3 Days')\" [ngClass]=\"{'active': closingDealTab === 'With in a 2 to 3 Days'}\">With in a 2 to 3 Days</div>    \r\n    <div class=\"clients-btn\" (click)=\"closingDeal('With in a Weak')\" [ngClass]=\"{'active': closingDealTab === 'With in a Weak'}\">With in a Weak</div>  \r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <div class=\"clients-btn\" (click)=\"closingDeal('With in a Month')\" [ngClass]=\"{'active': closingDealTab === 'With in a Month'}\">With in a Month</div>  \r\n    <div class=\"clients-btn\" (click)=\"closingDeal('With in 2 Weeks')\" [ngClass]=\"{'active': closingDealTab === 'With in 2 Weeks'}\">With in 2 Weeks</div>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <div class=\"clients-btn\" (click)=\"closingDeal('Other Plz Specify')\" [ngClass]=\"{'active': closingDealTab === 'Other Plz Specify'}\">Other Plz Specify</div> \r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-text color=\"danger\">\r\n      <p>All fields are mandatory. Please provide all informations</p>\r\n    </ion-text>\r\n  </ion-item>\r\n  </div>\r\n<ion-item lines=\"none\">\r\n  <ion-button *ngIf=\"steps > 1 && showPreviousBtn\" class=\"nextBtn\" type=\"button\" (click)=\"goBack()\">Previous</ion-button>\r\n  <ion-button *ngIf=\"hideNextBtn\" class=\"nextBtn\" type=\"submit\">Next</ion-button>\r\n  <ion-button *ngIf=\"steps > 2  && showSubmitBtn\" class=\"nextBtn submitBtn\"  type=\"submit\">Submit</ion-button>\r\n</ion-item>\r\n\r\n</form> \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_client-register_client-registeration-form_client-registeration-form_module_ts.js.map