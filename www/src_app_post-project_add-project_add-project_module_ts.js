"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_post-project_add-project_add-project_module_ts"],{

/***/ 70664:
/*!************************************************************************!*\
  !*** ./src/app/post-project/add-project/add-project-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProjectPageRoutingModule": () => (/* binding */ AddProjectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project.page */ 91185);




const routes = [
    {
        path: '',
        component: _add_project_page__WEBPACK_IMPORTED_MODULE_0__.AddProjectPage
    },
];
let AddProjectPageRoutingModule = class AddProjectPageRoutingModule {
};
AddProjectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddProjectPageRoutingModule);



/***/ }),

/***/ 86207:
/*!****************************************************************!*\
  !*** ./src/app/post-project/add-project/add-project.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProjectPageModule": () => (/* binding */ AddProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _add_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project-routing.module */ 70664);
/* harmony import */ var _add_project_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project.page */ 91185);
/* harmony import */ var _floor_plan_floor_plan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../floor-plan/floor-plan.page */ 54797);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 28775);










let AddProjectPageModule = class AddProjectPageModule {
};
AddProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProjectPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule
        ],
        declarations: [_add_project_page__WEBPACK_IMPORTED_MODULE_1__.AddProjectPage, _floor_plan_floor_plan_page__WEBPACK_IMPORTED_MODULE_2__.FloorPlanPage]
    })
], AddProjectPageModule);



/***/ }),

/***/ 91185:
/*!**************************************************************!*\
  !*** ./src/app/post-project/add-project/add-project.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProjectPage": () => (/* binding */ AddProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project.page.html?ngResource */ 97304);
/* harmony import */ var _add_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project.page.scss?ngResource */ 94266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ 91557);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ 67241);










let AddProjectPage = class AddProjectPage {
    constructor(_fb, _main, _nativeStorage, _route, _utilService) {
        this._fb = _fb;
        this._main = _main;
        this._nativeStorage = _nativeStorage;
        this._route = _route;
        this._utilService = _utilService;
        this.model = { option: 'option3' };
        this.steps = 1;
        this.hideNextBtn = true;
        this.showSubmitBtn = false;
        this.showPreviousBtn = true;
        this.checkBoxData = [];
        this.paymentsPlan = [];
        this.faUpload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUpload;
        // persons: Array<Person> = [];
        this.amentiesSelectedData = [];
        this.projectType = [];
        this.imagecategory = [];
        this.imageCatagory = [];
        this.imageName = [];
        this.isFlexiOpen = false;
        this.downPayment = false;
        this.special = false;
        this.isContructionPlan = false;
        this.enableOtherCharges = false;
        this.enableOtherPayments = false;
        this.activeTab = '';
        this.previews = [];
        this.progressInfos = [];
        this.finalImageData = [];
        this.storeSitePlanImg = [];
    }
    ngOnInit() {
        this.addProjectForm = this._fb.group({
            ProjectTypeId: [''],
            pname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            builder_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            builder_rera: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            project_rera: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proj_state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proj_city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proj_locality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proj_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proj_landmark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            PropertyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            amenities: [''],
            flexiPayments: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            downPayments: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            specialPayments: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            constructionLinkPayments: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            bsp_amount_flexi: [''],
            bsp_details_flexi: [''],
            bsp_amount_downpayment: [''],
            bsp_details_downpayment: [''],
            bsp_amount_special: [''],
            bsp_details_special: [''],
            bsp_amount_construction: [''],
            bsp_details_construction: [''],
            // installment_field:[''],      
            otherCharges: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            otherPayments: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            termAndCondition: [''],
            image_category: [''],
            image_name: [''],
        });
    }
    ionViewWillEnter() {
        this._nativeStorage.getItem('userId').then((userId) => {
            var _a;
            // console.log(userId)
            (_a = this.addProjectForm.get('userId')) === null || _a === void 0 ? void 0 : _a.setValue(userId);
        });
        this.checkBoxData = [
            { checkboxName: "Car Parking", id: "parking", checked: false },
            { checkboxName: "Kid's Playground", id: "playground", checked: true },
            { checkboxName: "Club House", id: "club", checked: false },
            { checkboxName: "Restraunts", id: "restraunts", checked: false },
            { checkboxName: "Fitness Gym", id: "gym", checked: false },
            { checkboxName: "School", id: "school", checked: false },
            { checkboxName: "Hospital", id: "hospital", checked: false },
            { checkboxName: "Swimming Pool", id: "pool", checked: false },
            { checkboxName: "24 Hour Water Supply", id: "waterSupply", checked: false },
            { checkboxName: "FireFighting Equipment", id: "fire", checked: false },
            { checkboxName: "Power Backup", id: "Powerbackup", checked: false },
            { checkboxName: "Yoga", id: "yoga", checked: false },
            { checkboxName: "Library", id: "library", checked: false }
        ];
        this.paymentsPlan = [
            { checkboxName: "Flexi Payment Plan", id: "flexi", checked: false },
            { checkboxName: "Down Payment Plan", id: "DownPayment", checked: false },
            { checkboxName: "Special Payment Plan", id: "Special", checked: false },
            { checkboxName: "Construction Link Plan", id: "Construction", checked: false }
        ];
        this.imagecategory = [
            { value: "Exterior View", id: "Exterior" },
            { value: "Lift & Lobby", id: "LiftLobby" },
            { value: "Entrance", id: "Entrance" },
            { value: "Surrounding", id: "Surrounding" },
            { value: "Location", id: "Location" },
            { value: "Master", id: "Master" },
            { value: "Floor", id: "Floor" },
            { value: "Logo", id: "Logo" },
            { value: "Banner", id: "Banner" }
        ];
        this._main.projectType().then((data) => {
            let parseData = JSON.parse(data.data);
            console.group(parseData.data);
            this.projectType = parseData.data;
        });
        this._main.getStateList().then((stateList) => {
            let parseData = JSON.parse(stateList.data);
            this.stateList = parseData;
            console.group(this.stateList);
            this.stateListIndex = this.stateList[0].Id;
        });
        let stateId = {
            stateid: this.stateListIndex
        };
        this.getCityListOnChange(stateId);
        this.addItem();
        this.AddflexiPaymentPlan();
        this.AddChargesOtherThenBsp();
        this.AddChargesOtherPayments();
        let tab = "Exterior";
        this.imageGallery(tab);
    }
    createItem() {
        return this._fb.group({
            accomodation_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            size_Sqft: '',
            site_plan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            cluster_plan: '',
            floor_plan: ''
        });
    }
    get propertyType() {
        return this.PropertyType = this.addProjectForm.get('PropertyType');
    }
    addItem() {
        this.PropertyType.push(this.createItem());
    }
    removeItem(i) {
        let remove = this.addProjectForm.get('PropertyType');
        remove.removeAt(i);
    }
    get result() {
        return this.checkBoxData.filter(item => item.checked);
    }
    isCheckBoxSelected(ev) {
        this.amentiesSelectedData.push(ev.target.value);
        this.addProjectForm.get('amenities').setValue(this.amentiesSelectedData);
        //console.log(this.amentiesSelectedData)
    }
    stateLisOnChange(ev) {
        // console.log(ev.target.value);
        let stateId = {
            stateid: ev.target.value
        };
        this.getCityListOnChange(stateId);
    }
    getCityListOnChange(stateId) {
        this._main.getCityList(stateId).then((data) => {
            var _a;
            //   console.log(data)
            let parseData = JSON.parse(data.data);
            this.cityList = parseData;
            this.cityListIndex = (_a = this.cityList[0]) === null || _a === void 0 ? void 0 : _a.Id;
            // console.log(parseData)
        });
    }
    createBspInputforFlexi() {
        return this._fb.group({
            payment_description: [''],
            payment_percent: [''],
        });
    }
    get flexiPaymentsArrayControl() {
        return this.flexiPayment = this.addProjectForm.get('flexiPayments');
    }
    AddflexiPaymentPlan() {
        this.flexiPayment.push(this.createBspInputforFlexi());
    }
    removeflexiPaymentPlan(i) {
        this.flexiPayment = this.addProjectForm.get('flexiPayments');
        this.flexiPayment.removeAt(i);
    }
    bspDetailsFlexiOnChange() {
    }
    createBspInputForDown() {
        return this._fb.group({
            payment_description: [''],
            payment_percent: [''],
        });
    }
    get downPaymentsArrayControl() {
        return this.downPayments = this.addProjectForm.get('downPayments');
    }
    AddDownPaymentPlan() {
        this.downPayments.push(this.createBspInputForDown());
    }
    removeDownPaymentPlan(i) {
        this.downPayments = this.addProjectForm.get('downPayments');
        this.downPayments.removeAt(i);
    }
    createBspInputForSpecial() {
        return this._fb.group({
            installment_field: [''],
            installment_value: [''],
        });
    }
    get specialPaymentsArrayControl() {
        return this.specialPayments = this.addProjectForm.get('specialPayments');
    }
    AddSpecialPaymentPlan() {
        this.specialPayments.push(this.createBspInputForSpecial());
    }
    removeSpecialPaymentPlan(i) {
        this.specialPayments = this.addProjectForm.get('specialPayments');
        this.specialPayments.removeAt(i);
    }
    createBspInputForConstruction() {
        return this._fb.group({
            payment_description: [''],
            payment_percent: [''],
        });
    }
    get constructionLinkPaymentsArrayControl() {
        return this.constructionLinkPayments = this.addProjectForm.get('constructionLinkPayments');
    }
    AddConstructionPaymentPlan() {
        this.constructionLinkPayments.push(this.createBspInputForConstruction());
    }
    removeConstructionPaymentPlan(i) {
        this.constructionLinkPayments = this.addProjectForm.get('constructionLinkPayments');
        this.constructionLinkPayments.removeAt(i);
    }
    createInputOtherThenBsp() {
        return this._fb.group({
            chrg_other_bsp_description: [''],
            chrg_other_bsp_charges: [''],
            chrg_other_bsp_detail: [''],
            chrg_other_bsp_detail2: [''],
        });
    }
    get otherChargesArrayControl() {
        return this.otherCharges = this.addProjectForm.get('otherCharges');
    }
    AddChargesOtherThenBsp() {
        this.otherCharges.push(this.createInputOtherThenBsp());
    }
    removeChargesOtherThenBsp(i) {
        this.otherCharges = this.addProjectForm.get('otherCharges');
        this.otherCharges.removeAt(i);
        if (i < 1) {
            this.enableOtherCharges = false;
            this.otherPaymentIncluded(this.enableOtherCharges);
        }
        else {
            this.enableOtherCharges = true;
        }
    }
    otherChargesIncluded(val) {
        // console.log(val) 
        val === true ? this.enableOtherCharges = true : this.enableOtherCharges = false;
    }
    createInputOtherPayments() {
        return this._fb.group({
            other_payment_description: [''],
            other_payment_charges: [''],
            other_payment_detail: [''],
            other_payment_detail2: [''],
        });
    }
    get otherPaymentsArrayControl() {
        return this.otherPayments = this.addProjectForm.get('otherPayments');
    }
    AddChargesOtherPayments() {
        this.otherPayments.push(this.createInputOtherPayments());
    }
    removeChargesOtherPayments(i) {
        this.otherPayments = this.addProjectForm.get('otherPayments');
        //console.log(i) 
        this.otherPayments.removeAt(i);
        if (i < 1) {
            this.enableOtherPayments = false;
            this.otherPaymentIncluded(this.enableOtherPayments);
        }
        else {
            this.enableOtherPayments = true;
        }
    }
    otherPaymentIncluded(val) {
        // console.log(val) 
        val === true ? this.enableOtherPayments = true : this.enableOtherPayments = false;
    }
    clusterPlan(ev) {
        //console.log(ev)
    }
    floorPlan(ev) {
        // console.log(ev)
    }
    isPaymentPlanSelected(ev, checked) {
        //console.log(ev.target.value, checked)
        if (checked === 'flexi') {
            this.isFlexiOpen = true;
        }
        else {
            this.isFlexiOpen = false;
        }
        if (checked === 'DownPayment') {
            this.downPayment = true;
        }
        else {
            this.downPayment = false;
        }
        if (checked === 'Special') {
            this.special = true;
        }
        else {
            this.special = false;
        }
        if (checked === 'Construction') {
            this.isContructionPlan = true;
        }
        else {
            this.isContructionPlan = false;
        }
        //console.log(this.addProjectForm.value)
    }
    addPerson() {
        // this.persons.push(new Person());
    }
    getprojectType(ev) {
        // console.log(ev.target.value);
    }
    getPlanTypeId() {
    }
    getAccomodationType() {
    }
    imageGallery(tab) {
        console.group(tab);
        return this.activeTab = tab;
    }
    sitePlan(ev) {
        // console.log(ev.target.files)
        let sitePlanImag;
        for (let index = 0; index < ev.target.files.length; index++) {
            sitePlanImag = ev.target.files[index];
            // console.log(sitePlanImag);
            this.storeSitePlanImg.push(sitePlanImag);
            // console.log(this.storeSitePlanImg, 'length', this.storeSitePlanImg.length);   
        }
        let imageData = {
            image_name: ''
        };
        for (let i = 0; i < this.storeSitePlanImg.length; i++) {
            imageData = {
                image_name: this.storeSitePlanImg[i]
            };
            //console.log(this.storeSitePlanImg[0]);
            this.finalImageData.push(imageData);
            this.createItem().get('site_plan').setValue(this.finalImageData);
            break;
        }
        // console.log(this.addProjectForm.value)
    }
    fileUpload(ev, activeTab) {
        //  console.log(ev.target.files, activeTab)
        // this.selectedFiles = ev.target.File;
        this.imageCatagory.push(activeTab);
        // this.imageName.push(this.selectedFiles[0].name)
        this.addProjectForm.get('image_category').setValue(this.imageCatagory);
        // this.addProjectForm.get('image_name').setValue(this.imageName)
        // this.message = [];
        this.progressInfos = [];
        for (let index = 0; index < ev.target.files.length; index++) {
            this.selectedFiles = ev.target.files[index];
            //  console.log(this.selectedFiles)
            // this.previews = [];
            this.previews.push(this.selectedFiles);
        }
        // console.log(this.previews[0])
        // console.log(this.previews.length, ev.target.files.length)
        let imageData = {
            image_category: '',
            image_name: ''
        };
        for (let i = 0; i < this.previews.length; i++) {
            imageData = {
                image_category: activeTab,
                image_name: this.previews[i]
            };
            // console.log(imageData)      
            this.finalImageData.push(imageData);
        }
        // console.log(this.finalImageData)
        this.addProjectForm.get('image_category').setValue(this.finalImageData);
        //  console.log(this.addProjectForm.value)
        // if (this.selectedFiles && this.selectedFiles[0]) {
        //   const numberOfFiles = this.selectedFiles.length;
        //   for (let i = 0; i < numberOfFiles; i++) {
        //     const reader = new FileReader();
        //     reader.onload = (e: any) => {
        //       this.previews.push(e.target.result);
        //     };
        //     reader.readAsDataURL(this.selectedFiles[i]);
        //   }
        // }
        // this.addProjectForm.get('image_name').setValue(this.previews)
    }
    onSubmit() {
        this.steps++;
        // console.log(this.addProjectForm.value, 'steps', this.steps++);
        if (this.steps === 4) {
            this.showPreviousBtn = true;
            this.hideNextBtn = false;
            this.showSubmitBtn = true;
        }
    }
    getSubcategory() {
    }
    submitButtonClicked() {
        //console.log('clicked')
        this.steps = 0;
        this.showPreviousBtn = false;
        // console.log(this.addProjectForm.value);
        this._main.postProject(this.addProjectForm.value).then((data) => {
            //     console.log(data)
            if (data.status === 200) {
                this._utilService.presentToast('Data is inserted successfully', 'toaster-background');
                setTimeout(() => {
                    this._route.navigateByUrl('/post-project');
                }, 1000);
            }
        });
    }
    goBack() {
        this.steps--;
        this.hideNextBtn = true;
        this.showSubmitBtn = false;
    }
};
AddProjectPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService }
];
AddProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-project',
        template: _add_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddProjectPage);



/***/ }),

/***/ 94266:
/*!***************************************************************************!*\
  !*** ./src/app/post-project/add-project/add-project.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-item, ion-content {\n  --background:#fff;\n  color: #000;\n}\n\nion-input, ion-textarea {\n  border: solid 1px #E4E4E4;\n  --padding-start: 15px;\n  color: #000;\n}\n\n.client-form-list {\n  padding: 0 15px;\n}\n\n.client-form-list ion-label {\n  color: #000;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.client-form-list ion-item {\n  --background:#fff;\n  color: #000;\n}\n\n.client-form-list span {\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%;\n}\n\n.client-form-list ion-select {\n  border: solid 1px #E4E4E4;\n  --padding-start: 15px;\n  color: #000;\n}\n\n.availableFormWrapper {\n  padding: 0 15px;\n  color: #000;\n  display: flex;\n}\n\n.availableFormWrapper ul {\n  padding-left: 0px;\n}\n\n.availableFormWrapper ul li {\n  color: #000;\n  list-style: none;\n  margin: 0 8px;\n  float: left;\n  width: 40%;\n  margin-bottom: 20px;\n}\n\n.availableFormWrapper ul li label {\n  position: relative;\n}\n\n.availableFormWrapper ul li label input[type=radio] {\n  margin-right: 5px;\n}\n\n.availableFormWrapper ul li label .checkmark {\n  position: absolute;\n  top: -2px;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-radius: 50%;\n  left: -1px;\n  border: solid 1px #C5C5C5;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.availableFormWrapper ul li label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.availableFormWrapper ul li label .checkmark:after {\n  top: 4px;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #FE1300;\n}\n\n.nextBtn {\n  width: 100%;\n  height: 40px;\n}\n\n.projectType {\n  color: #000;\n  padding-left: 15px;\n}\n\n.clients-btn {\n  width: 50%;\n  line-height: 30px;\n  display: inline-block;\n  text-align: center;\n  margin: 0 6px;\n  background: #fff;\n  color: #000;\n  border: solid 1px #E4E4E4;\n}\n\n.monthlyRent.color-black {\n  padding-left: 16px;\n  margin-top: 20px;\n  display: block;\n}\n\n.color-black {\n  color: #000;\n}\n\nion-item ion-select {\n  width: 100%;\n  border: solid 1px #E4E4E4;\n  --padding-start: 10px;\n  border-radius: 5px;\n}\n\n.purpose a {\n  border: solid 1px #E4E4E4;\n  display: inline-block;\n  border-radius: 5px;\n  margin: 0px 3px;\n  color: #bebcbc;\n  width: 100px;\n  text-align: center;\n  line-height: 31px;\n  text-decoration: underline;\n}\n\nion-input {\n  padding-left: 15px;\n}\n\n.checkboxList {\n  padding: 0 15px;\n  color: #000;\n}\n\n.checkboxList ul {\n  padding: 0;\n  display: inline-block;\n}\n\n.checkboxList ul li {\n  width: 165px;\n  color: #000;\n  list-style: none;\n  float: left;\n  font-size: 13px;\n  /* margin: 5px; */\n  line-height: 50px;\n}\n\n.checkboxList ul li .styled-checkbox {\n  position: absolute;\n  opacity: 0;\n}\n\n.checkboxList ul li .styled-checkbox + label {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n}\n\n.checkboxList ul li .styled-checkbox + label:before {\n  content: \"\";\n  margin-right: 5px;\n  display: inline-block;\n  vertical-align: text-top;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border: solid 1px #E4E4E4;\n}\n\n.checkboxList ul li .styled-checkbox:checked + label:before {\n  background: #FE1300;\n}\n\n.checkboxList ul li .styled-checkbox:disabled + label {\n  color: #b8b8b8;\n  cursor: auto;\n}\n\n.checkboxList ul li .styled-checkbox:disabled + label:before {\n  box-shadow: none;\n  background: #ddd;\n}\n\n.checkboxList ul li .styled-checkbox:checked + label:after {\n  content: \"\";\n  position: absolute;\n  left: 5px;\n  top: 9px;\n  background: white;\n  width: 2px;\n  height: 2px;\n  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;\n  transform: rotate(45deg);\n}\n\n.checkboxList ul li label {\n  vertical-align: text-bottom;\n}\n\n.termCondition ul li {\n  width: 100%;\n}\n\nion-item {\n  position: relative;\n}\n\nion-item input[type=file] {\n  opacity: 0;\n  position: absolute;\n  z-index: 9;\n  top: 0;\n}\n\nion-item ion-input {\n  -webkit-padding-start: 15px;\n  --padding-start:15px;\n}\n\nion-item span {\n  display: inline-block;\n  width: 100%;\n}\n\nion-item span ion-input {\n  position: absolute;\n  z-index: 8;\n  top: 0;\n  border: solid 1px #E4E4E4;\n  display: inline-block;\n  width: 95%;\n  height: 100%;\n  -webkit-padding-start: 15px;\n  --padding-start:15px;\n}\n\nion-item span fa-icon {\n  right: 27px;\n  top: 10px;\n  z-index: 99;\n  color: #E4E4E4;\n  font-size: 22px;\n  position: absolute;\n}\n\n.remove {\n  background: #FE1300;\n  width: 150px;\n  line-height: 18px;\n  background: #FE1300;\n  width: 96px;\n  line-height: 28px;\n  display: flex;\n  padding: 0 15px;\n  color: #fff;\n  justify-content: center;\n  align-items: end;\n  flex-direction: row;\n  margin: 15px 19px 15px auto;\n}\n\n.add {\n  background: #FE1300;\n  width: 96px;\n  line-height: 28px;\n  display: flex;\n  padding: 0 15px;\n  color: #fff;\n  justify-content: center;\n  align-items: end;\n  flex-direction: row;\n  margin: 15px auto;\n}\n\n.third-step-registration .availableFormWrapper ul {\n  margin: 0;\n}\n\n.payment_wrapper ion-input {\n  width: 190px;\n}\n\n.payment_wrapper ion-input:nth-child(1) {\n  margin-right: 10px;\n}\n\n.payment_wrapper span {\n  display: inline-block;\n  margin-left: 5px;\n  width: auto;\n  position: absolute;\n  right: 0;\n  z-index: 999;\n}\n\n.payment_wrapper span .remove {\n  border: solid 1px #FE1300;\n  padding: 5px;\n  line-height: 10px;\n  width: auto;\n  border-radius: 50%;\n}\n\n.bsp_button {\n  display: flex;\n}\n\n.bsp_button span .add {\n  display: block;\n}\n\n.bsp_button span .remove {\n  display: block;\n}\n\n.four-step-registration .gallery ul li {\n  color: #000;\n  list-style: none;\n  width: 50%;\n  display: inline-block;\n  margin-bottom: 15px;\n}\n\n.four-step-registration .gallery ul li a {\n  color: #000;\n}\n\n.four-step-registration .gallery ul li a.active {\n  color: #FE1300;\n  text-decoration: underline;\n}\n\n.four-step-registration .projectType .boldRed {\n  font-weight: 500;\n  color: #FE1300;\n}\n\n.image_upload_btn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF1QixpQkFBQTtFQUFrQixXQUFBO0FBR3pDOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7QUFNSjs7QUFMSTtFQUFXLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixjQUFBO0FBVWhEOztBQVRJO0VBQVUsaUJBQUE7RUFBbUIsV0FBQTtBQWFqQzs7QUFaSTtFQUNJLG1CQUFBO0VBQXFCLHFCQUFBO0VBQXNCLFdBQUE7QUFnQm5EOztBQWRJO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFnQlI7O0FBWkE7RUFBdUIsZUFBQTtFQUNuQixXQUFBO0VBQ0EsYUFBQTtBQWdCSjs7QUFmSTtFQUNJLGlCQUFBO0FBaUJSOztBQWhCUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBa0JaOztBQWpCWTtFQUNJLGtCQUFBO0FBbUJoQjs7QUFsQmdCO0VBQ0ksaUJBQUE7QUFvQnBCOztBQWxCZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFvQnBCOztBQWpCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBbUJwQjs7QUFoQm1CO0VBQ0MsY0FBQTtBQWtCcEI7O0FBZmtCO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFpQnBCOztBQVZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUFjLFdBQUE7RUFBYSxrQkFBQTtBQWdCM0I7O0FBZkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBa0JKOztBQWhCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbUJKOztBQWpCQTtFQUNRLFdBQUE7QUFvQlI7O0FBakJJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQW9CUjs7QUFoQkk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFtQlI7O0FBZkE7RUFBVSxrQkFBQTtBQW1CVjs7QUFsQkE7RUFBZSxlQUFBO0VBQ1gsV0FBQTtBQXNCSjs7QUFyQkk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUF1QlI7O0FBdEJRO0VBQUksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXlCWjs7QUF4Qlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUEwQmhCOztBQXhCZ0I7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBMEJoQjs7QUF0QmdCO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQXdCaEI7O0FBcEJnQjtFQUNBLG1CQUFBO0FBc0JoQjs7QUFsQmdCO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFvQmhCOztBQWhCZ0I7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBa0JoQjs7QUFkZ0I7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnSEFDSTtFQU1KLHdCQUFBO0FBVWhCOztBQUhZO0VBQ0ksMkJBQUE7QUFLaEI7O0FBS1E7RUFDSSxXQUFBO0FBRlo7O0FBTUE7RUFDSSxrQkFBQTtBQUhKOztBQUlJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUFGUjs7QUFJSTtFQUVJLDJCQUFBO0VBQ0Esb0JBQUE7QUFIUjs7QUFLSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUhSOztBQUlRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFGWjs7QUFJUTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGWjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1RO0VBQ0ksU0FBQTtBQUhaOztBQVFJO0VBQ0ksWUFBQTtBQUxSOztBQU9JO0VBQ0ksa0JBQUE7QUFMUjs7QUFPSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUxSOztBQU1RO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKWjs7QUFTQTtFQUNJLGFBQUE7QUFOSjs7QUFRUTtFQUNJLGNBQUE7QUFOWjs7QUFRUTtFQUNJLGNBQUE7QUFOWjs7QUFjWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBWGhCOztBQVlnQjtFQUNJLFdBQUE7QUFWcEI7O0FBWWdCO0VBQVUsY0FBQTtFQUFnQiwwQkFBQTtBQVIxQzs7QUFhUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQVhaOztBQWVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpKIiwiZmlsZSI6ImFkZC1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLCBpb24tY29udGVudHsgLS1iYWNrZ3JvdW5kOiNmZmY7Y29sb3I6ICMwMDA7fVxyXG5pb24taW5wdXQsaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5jbGllbnQtZm9ybS1saXN0e1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgaW9uLWxhYmVseyBjb2xvcjogIzAwMDsgbWFyZ2luLWJvdHRvbTogNXB4OyBkaXNwbGF5OiBibG9jazt9XHJcbiAgICBpb24taXRlbXsgLS1iYWNrZ3JvdW5kOiNmZmY7IGNvbG9yOiAjMDAwO31cclxuICAgIHNwYW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdHtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmF2YWlsYWJsZUZvcm1XcmFwcGVyeyBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoZWNrbWFya3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNDNUM1QzU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkUxMzAwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZXh0QnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnByb2plY3RUeXBleyBjb2xvcjogIzAwMDsgcGFkZGluZy1sZWZ0OiAxNXB4O31cclxuLmNsaWVudHMtYnRue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOjAgNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxufVxyXG4ubW9udGhseVJlbnQuY29sb3ItYmxhY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbG9yLWJsYWNre1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5pb24taXRlbXtcclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59XHJcbi5wdXJwb3NlIHtcclxuICAgIGF7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0U0RTRFNDsgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICAgICAgY29sb3I6ICNiZWJjYmM7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5pb24taW5wdXR7cGFkZGluZy1sZWZ0OiAxNXB4O31cclxuLmNoZWNrYm94TGlzdHsgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsaXsgd2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgLyogbWFyZ2luOiA1cHg7ICovXHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAuc3R5bGVkLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLy8gdGFrZSBpdCBvdXQgb2YgZG9jdW1lbnQgZmxvd1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDsgLy8gaGlkZSBpdFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEJveC5cclxuICAgICAgICAgICAgICAgICYgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQm94IGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICY6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkUxMzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBzdGF0ZSBsYWJlbC5cclxuICAgICAgICAgICAgICAgICY6ZGlzYWJsZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I4YjhiODtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBib3guXHJcbiAgICAgICAgICAgICAgICAmOmRpc2FibGVkICsgbGFiZWw6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrbWFyay4gQ291bGQgYmUgcmVwbGFjZWQgd2l0aCBhbiBpbWFnZVxyXG4gICAgICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgMnB4IDAgMCB3aGl0ZSxcclxuICAgICAgICAgICAgICAgICAgICA0cHggMCAwIHdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIDRweCAtMnB4IDAgd2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgNHB4IC00cHggMCB3aGl0ZSxcclxuICAgICAgICAgICAgICAgICAgICA0cHggLTZweCAwIHdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIDRweCAtOHB4IDAgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlucHV0e1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbn1cclxuLnRlcm1Db25kaXRpb257XHJcbiAgICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW5wdXRbdHlwZT1cImZpbGVcIl17XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICBcclxuICAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjE1cHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogODtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRTRFNEU0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgcmlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRTRFNEU0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi5yZW1vdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkUxMzAwO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkUxMzAwO1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAxNXB4IDE5cHggMTVweCBhdXRvO1xyXG59XHJcbi5hZGR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkUxMzAwO1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuLnRoaXJkLXN0ZXAtcmVnaXN0cmF0aW9ue1xyXG4gICAgLmF2YWlsYWJsZUZvcm1XcmFwcGVye1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wYXltZW50X3dyYXBwZXJ7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0Om50aC1jaGlsZCgxKXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgLnJlbW92ZXtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZFMTMwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ic3BfYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgLmFkZHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZW1vdmV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZm91ci1zdGVwLXJlZ2lzdHJhdGlvbntcclxuXHJcbiAgICAuZ2FsbGVyeXtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhLmFjdGl2ZXsgY29sb3I6ICNGRTEzMDA7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9qZWN0VHlwZXtcclxuICAgICAgICAuYm9sZFJlZHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRTEzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pbWFnZV91cGxvYWRfYnRue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 97304:
/*!***************************************************************************!*\
  !*** ./src/app/post-project/add-project/add-project.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"clients_header\">\r\n  <ion-toolbar class=\"header-bg-color\">    \r\n    <ion-icon slot=\"start\" routerLink=\"/post-project\" class=\"back-btn\" name=\"arrow-back-outline\"></ion-icon>\r\n    <ion-title slot=\"start\" class=\"header-title\">Add Project</ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<form [formGroup]=\"addProjectForm\" (ngSubmit)=\"onSubmit()\">\r\n<div class=\"first-step-registration\" *ngIf=\"steps === 1\">\r\n  <ion-item lines=\"none\">Project info</ion-item>\r\n  <div class=\"client-form-list\">\r\n      <span>\r\n        <ion-label>Type</ion-label>\r\n        <ion-select type=\"text\" placeholder=\"Select Property Type\" formControlName=\"ProjectTypeId\" value=\"{{projectType[0]?.Id}}\" (ionChange)=\"getprojectType($event)\">\r\n          <ion-select-option *ngFor=\"let items of projectType\" value=\"{{items.Id}}\">{{items.PropertyType}}</ion-select-option>          \r\n        </ion-select>\r\n      </span>\r\n      <span>\r\n        <ion-label>Project Name</ion-label>\r\n        <ion-input formControlName=\"pname\"></ion-input>\r\n        <div class=\"web_error\"\r\n          *ngIf=\"addProjectForm.controls['pname'].invalid && (addProjectForm.controls['pname'].dirty || addProjectForm.controls['pname'].touched)\">\r\n          <div *ngIf=\"addProjectForm.controls['pname'].errors.required\">*Project name is required</div>\r\n        </div>\r\n      </span>\r\n      <span>\r\n        <ion-label>Project Rera Number</ion-label>\r\n        <ion-input formControlName=\"project_rera\"></ion-input>\r\n        <div class=\"web_error\"\r\n          *ngIf=\"addProjectForm.controls['project_rera'].invalid && (addProjectForm.controls['project_rera'].dirty || addProjectForm.controls['project_rera'].touched)\">\r\n          <div *ngIf=\"addProjectForm.controls['project_rera'].errors.required\">*Project Rera number is required</div>\r\n        </div>\r\n      </span>\r\n      <span>\r\n        <ion-label>Builder/Developer Name</ion-label>\r\n        <ion-input formControlName=\"builder_name\"></ion-input>\r\n        <div class=\"web_error\"\r\n          *ngIf=\"addProjectForm.controls['builder_name'].invalid && (addProjectForm.controls['builder_name'].dirty || addProjectForm.controls['builder_name'].touched)\">\r\n          <div *ngIf=\"addProjectForm.controls['builder_name'].errors.required\">*Builder number is required</div>\r\n        </div>\r\n      </span>\r\n      <span>\r\n        <ion-label>Builder/Developer Rera Number</ion-label>\r\n        <ion-input formControlName=\"builder_rera\"></ion-input>\r\n        <div class=\"web_error\"\r\n          *ngIf=\"addProjectForm.controls['builder_rera'].invalid && (addProjectForm.controls['builder_rera'].dirty || addProjectForm.controls['builder_rera'].touched)\">\r\n          <div *ngIf=\"addProjectForm.controls['builder_rera'].errors.required\">*Builder Rera number is required</div>\r\n        </div>\r\n      </span>\r\n      <span>\r\n        <ion-label>Description</ion-label>\r\n        <ion-textarea formControlName=\"description\"></ion-textarea>\r\n        <div class=\"web_error\"\r\n          *ngIf=\"addProjectForm.controls['description'].invalid && (addProjectForm.controls['description'].dirty || addProjectForm.controls['description'].touched)\">\r\n          <div *ngIf=\"addProjectForm.controls['description'].errors.required\">*Description is required</div>\r\n        </div>\r\n      </span>\r\n    \r\n  </div>\r\n  <ion-item lines=\"none\">Location</ion-item>\r\n  <div class=\"client-form-list\">\r\n        <span>\r\n          <ion-label>State</ion-label>\r\n          <ion-select type=\"text\" formControlName=\"proj_state\" [value]=\"stateListIndex\" placeholder=\"Select State\" (ionChange)=\"stateLisOnChange($event)\">\r\n            <ion-select-option *ngFor=\"let list of stateList\" value=\"{{list.Id}}\">{{list.State}}</ion-select-option>\r\n           </ion-select>           \r\n        </span>\r\n        <span>\r\n          <ion-label>City</ion-label>\r\n          <ion-select type=\"text\" formControlName=\"proj_city\" [value]=\"cityListIndex\" placeholder=\"Select State\" (onChange)=\"getSubcategory()\">\r\n            <ion-select-option  *ngFor=\"let list of cityList\" value=\"{{list.Id}}\">{{list.City}}</ion-select-option>\r\n          </ion-select>\r\n        </span>\r\n        <span>\r\n          <ion-label>Loacality</ion-label>\r\n          <ion-input formControlName=\"proj_locality\"></ion-input>\r\n          <div class=\"web_error\"\r\n            *ngIf=\"addProjectForm.controls['proj_locality'].invalid && (addProjectForm.controls['proj_locality'].dirty || addProjectForm.controls['proj_locality'].touched)\">\r\n            <div *ngIf=\"addProjectForm.controls['proj_locality'].errors.required\">*Project Locality is required</div>\r\n          </div>\r\n        </span>\r\n        <span>\r\n          <ion-label>Address</ion-label>\r\n          <ion-input formControlName=\"proj_address\"></ion-input>\r\n          <div class=\"web_error\"\r\n            *ngIf=\"addProjectForm.controls['proj_address'].invalid && (addProjectForm.controls['proj_address'].dirty || addProjectForm.controls['proj_address'].touched)\">\r\n            <div *ngIf=\"addProjectForm.controls['proj_address'].errors.required\">*Project Address is required</div>\r\n          </div>\r\n        </span>\r\n        <span>\r\n          <ion-label>Landmark</ion-label>\r\n          <ion-input formControlName=\"proj_landmark\"></ion-input>\r\n          <div class=\"web_error\"\r\n            *ngIf=\"addProjectForm.controls['proj_landmark'].invalid && (addProjectForm.controls['proj_landmark'].dirty || addProjectForm.controls['proj_landmark'].touched)\">\r\n            <div *ngIf=\"addProjectForm.controls['proj_landmark'].errors.required\">*Project Landmark is required</div>\r\n          </div>\r\n        </span>\r\n</div>\r\n<ion-item lines=\"none\">\r\n  <div *ngIf=\"!addProjectForm.invalid\">\r\n    <ion-text color=\"danger\">\r\n      <p>All fields are mandatory. Please provide all informations</p>\r\n    </ion-text>\r\n  </div>\r\n</ion-item>\r\n</div>\r\n<div class=\"second-step-registration\" *ngIf=\"steps === 2\">\r\n  <ion-item lines=\"none\">Cluster/Floor Plan</ion-item>\r\n  <div formArrayName=\"PropertyType\" *ngFor=\"let item of propertyType.controls; let i = index;\">\r\n    <div [formGroupName]=\"i\">\r\n      <span class=\"monthlyRent color-black\" slot=\"start\">\r\n        Accomodation Type\r\n      </span>\r\n      <ion-item lines=\"none\">\r\n        <ion-select type=\"text\" placeholder=\"Accomodation Type\" formControlName=\"accomodation_type\"\r\n          (onChange)=\"getAccomodationType()\">\r\n          <ion-select-option value=\"New Construction\">New Construction</ion-select-option>\r\n          <ion-select-option value=\"Less than 5 years\">Less than 5 years</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <span class=\"monthlyRent color-black\" slot=\"start\">\r\n        Size (SQFT)\r\n      </span>\r\n      <ion-item lines=\"none\">\r\n        <ion-input formControlName=\"size_Sqft\" type=\"text\" placeholder=\"Item description\"></ion-input>\r\n      </ion-item>\r\n      <span class=\"monthlyRent color-black\" slot=\"start\">\r\n        Site Plan\r\n      </span>\r\n      <ion-item lines=\"none\">\r\n        <input  type=\"file\" formControlName=\"site_plan\"  (change)=\"sitePlan($event)\">\r\n        <!-- <div class=\"web_error\"\r\n            *ngIf=\"addProjectForm.controls['site_plan'].invalid && (addProjectForm.controls['site_plan'].dirty || addProjectForm.controls['site_plan'].touched)\">\r\n            <div *ngIf=\"addProjectForm.controls['site_plan'].errors.required\">*Site plan is required</div>\r\n          </div> -->\r\n        <span>\r\n          <ion-input type=\"text\"  placeholder=\"choose site plan\" readOnly></ion-input>\r\n          <fa-icon [icon]=\"faUpload\"></fa-icon>\r\n        </span>\r\n      </ion-item>\r\n      <span class=\"monthlyRent color-black\" slot=\"start\">\r\n        Cluster Plan\r\n      </span>\r\n      <ion-item lines=\"none\">\r\n        <input formControlName=\"cluster_plan\" (change)=\"clusterPlan($event)\" type=\"file\">\r\n        <span>\r\n          <ion-input type=\"text\" placeholder=\"choose site plan\" readOnly></ion-input>\r\n          <fa-icon [icon]=\"faUpload\"></fa-icon>\r\n        </span>\r\n      </ion-item>\r\n      <span class=\"monthlyRent color-black\" slot=\"start\">\r\n        Floor Plan\r\n      </span>\r\n      <ion-item lines=\"none\">\r\n        <input formControlName=\"floor_plan\" (change)=\"floorPlan($event)\" type=\"file\">\r\n        <span>\r\n          <ion-input type=\"text\" placeholder=\"choose site plan\" readOnly></ion-input>\r\n          <fa-icon [icon]=\"faUpload\"></fa-icon>\r\n        </span>\r\n      </ion-item>\r\n      <span><a class=\"remove\" (click)=\"removeItem(i)\" *ngIf=\"i > 0\">Remove</a></span>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n<span><a class=\"add\" (click)=\"addItem()\">Add</a></span>\r\n<div class=\"checkboxList\">\r\n  Amenties:  \r\n  <ul>\r\n    <li *ngFor=\" let list of checkBoxData\">\r\n      <input  type=\"checkbox\"  (change)=\"isCheckBoxSelected($event)\" class=\"styled-checkbox\" name=\"\" id=\"{{list.id}}\" value=\"{{list.id}}\">\r\n      <label for=\"{{list.id}}\">{{list.checkboxName}}</label>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<ion-item lines=\"none\">\r\n  <div *ngIf=\"!addProjectForm.invalid\">\r\n    <ion-text color=\"danger\">\r\n      <p>All fields are mandatory. Please provide all informations</p>\r\n    </ion-text>\r\n  </div>\r\n</ion-item>\r\n</div>\r\n<div class=\"third-step-registration\" *ngIf=\"steps === 3\">\r\n  <ion-item lines=\"none\"></ion-item>\r\n  <div class=\"projectType\">Please choose payments plan</div>\r\n  <div class=\"checkboxList\">   \r\n    <ul>\r\n      <li *ngFor=\" let list of paymentsPlan\">\r\n        <input  type=\"radio\"  (change)=\"isPaymentPlanSelected($event, list.checked)\" [(ngModel)]=\"list.checked\" [ngModelOptions]=\"{standalone: true}\" class=\"styled-checkbox\" name=\"\" id=\"{{list.id}}\" value=\"{{list.id}}\">\r\n        <label for=\"{{list.id}}\">{{list.checkboxName}}</label>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"isFlexiOpen === true\">\r\n    <div class=\"projectType\">\r\n      <h3>Flexi Payment Plan</h3>\r\n    </div>\r\n    <div class=\"projectType\">Describe the Installment with % below.</div>\r\n    <div class=\"projectType\">\r\n      <h6>BSP Amount</h6>\r\n    </div>\r\n    <ion-item lines=\"none\">\r\n      <ion-input formControlName=\"bsp_amount_flexi\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-select type=\"text\" formControlName=\"bsp_details_flexi\"  value=\"Per SQFT\" placeholder=\"per SQFT\">\r\n        <ion-select-option value=\"Per SQFT\">Per SQFT</ion-select-option>\r\n        <ion-select-option value=\"Per SQYD\">Per SQYD</ion-select-option>\r\n        <ion-select-option value=\"Per SQMTR\">Per SQMTR</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div formArrayName=\"flexiPayments\" *ngFor=\"let item of flexiPaymentsArrayControl.controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <ion-item class=\"payment_wrapper\" lines=\"none\">\r\n          <ion-input placeholder=\"Description\" formControlName=\"payment_description\"></ion-input>\r\n          <ion-input placeholder=\"Percent (%)\" formControlName=\"payment_percent\" maxLength=\"3\"></ion-input>\r\n          <span><a class=\"remove\" (click)=\"removeflexiPaymentPlan(i)\">X</a></span>\r\n        </ion-item>\r\n    \r\n      </div>\r\n    \r\n    </div>\r\n    <span><a class=\"add\" (click)=\"AddflexiPaymentPlan()\">Add Row</a></span>\r\n    \r\n  </div>\r\n  <div *ngIf=\"downPayment === true\">\r\n    <div class=\"projectType\">\r\n      <h3>Down Payment Plan</h3>\r\n    </div>\r\n    \r\n    <div class=\"projectType\">\r\n      <h6>BSP Amount</h6>\r\n    </div>\r\n    <ion-item lines=\"none\">\r\n      <ion-input formControlName=\"bsp_amount_flexi\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-select type=\"text\" formControlName=\"bsp_details_flexi\" placeholder=\"per SQFT\">\r\n        <ion-select-option value=\"Per SQFT\">Per SQFT</ion-select-option>\r\n        <ion-select-option value=\"Per SQYD\">Per SQYD</ion-select-option>\r\n        <ion-select-option value=\"Per SQMTR\">Per SQMTR</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div formArrayName=\"downPayments\" *ngFor=\"let item of downPaymentsArrayControl.controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <ion-item class=\"payment_wrapper\" lines=\"none\">\r\n          <ion-input placeholder=\"Descriptionss\" formControlName=\"payment_description\"></ion-input>\r\n          <ion-input placeholder=\"Percent (%)\" formControlName=\"payment_percent\" maxLength=\"3\"></ion-input>\r\n          <span><a class=\"remove\" (click)=\"removeDownPaymentPlan(i)\">X</a></span>\r\n        </ion-item>\r\n      </div>\r\n    \r\n    </div>\r\n    <span><a class=\"add\" (click)=\"AddDownPaymentPlan()\">Add Row</a></span>\r\n  </div>\r\n\r\n  <div *ngIf=\"special === true\">\r\n    <div class=\"projectType\">\r\n      <h3>Special Payment Plan</h3>\r\n    </div>\r\n    \r\n    <div class=\"projectType\">\r\n      <h6>BSP Amount</h6>\r\n    </div>\r\n    <ion-item lines=\"none\">\r\n      <ion-input formControlName=\"bsp_amount_flexi\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-select type=\"text\" formControlName=\"bsp_details_flexi\" placeholder=\"per SQFT\">\r\n        <ion-select-option value=\"Per SQFT\">Per SQFT</ion-select-option>\r\n        <ion-select-option value=\"Per SQYD\">Per SQYD</ion-select-option>\r\n        <ion-select-option value=\"Per SQMTR\">Per SQMTR</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div class=\"projectType\">\r\n      <h6>You are requested to enter the number of EMI which you are required in Special Payment Plan.</h6>\r\n    </div>\r\n    <ion-item lines=\"none\">\r\n      <!-- No payload is required for this input -->\r\n      <!-- <ion-input formControlName=\"installment_field\"></ion-input> -->\r\n    </ion-item>\r\n    \r\n    <div formArrayName=\"specialPayments\" *ngFor=\"let item of specialPaymentsArrayControl.controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <ion-item class=\"payment_wrapper\" lines=\"none\">\r\n          <ion-input placeholder=\"Descriptionss\" formControlName=\"installment_field\"></ion-input>\r\n          <ion-input placeholder=\"Percent (%)\" formControlName=\"payment_percent\" maxLength=\"3\"></ion-input>\r\n          <span><a class=\"remove\" (click)=\"removeSpecialPaymentPlan(i)\">X</a></span>\r\n        </ion-item>\r\n      </div>\r\n    \r\n    </div>\r\n    <span><a class=\"add\" (click)=\"AddSpecialPaymentPlan()\">Add Row</a></span>\r\n  </div>\r\n\r\n  <div *ngIf=\"isContructionPlan === true\">\r\n    <div class=\"projectType\">\r\n      <h3>Construction Link Plan</h3>\r\n    </div>\r\n    \r\n    <div class=\"projectType\">\r\n      <h6>BSP Amount</h6>\r\n    </div>\r\n    <ion-item lines=\"none\">\r\n      <ion-input formControlName=\"bsp_amount_flexi\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-select type=\"text\" formControlName=\"bsp_details_flexi\" placeholder=\"per SQFT\">\r\n        <ion-select-option value=\"Per SQFT\">Per SQFT</ion-select-option>\r\n        <ion-select-option value=\"Per SQYD\">Per SQYD</ion-select-option>\r\n        <ion-select-option value=\"Per SQMTR\">Per SQMTR</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div formArrayName=\"constructionLinkPayments\" *ngFor=\"let item of constructionLinkPaymentsArrayControl.controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <ion-item class=\"payment_wrapper\" lines=\"none\">\r\n          <ion-input placeholder=\"Descriptions\" formControlName=\"payment_description\"></ion-input>\r\n          <ion-input placeholder=\"Percent (%)\" formControlName=\"payment_percent\" maxLength=\"3\"></ion-input>\r\n          <span><a class=\"remove\" (click)=\"removeConstructionPaymentPlan(i)\">X</a></span>\r\n        </ion-item>       \r\n      </div>\r\n    \r\n    </div>\r\n    <span><a class=\"add\" (click)=\"AddConstructionPaymentPlan()\">Add Row</a></span>\r\n  </div>\r\n   <ion-item lines=\"none\">Kindly Mention the Other Charges which are included in the Above Cost.</ion-item>\r\n  <div class=\"availableFormWrapper\">\r\n    <ul>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" name=\"options\" (change)=\"otherPaymentIncluded(true)\" >\r\n          yes\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" name=\"options\" (change)=\"otherPaymentIncluded(false)\" >\r\n          No\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>      \r\n    </ul>    \r\n  </div>\r\n  <div *ngIf=\"enableOtherPayments === true\">\r\n    <div formArrayName=\"otherPayments\" *ngFor=\"let item of otherPaymentsArrayControl.controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <ion-item class=\"payment_wrapper\" lines=\"none\">\r\n          <ion-input placeholder=\"Descriptions\" formControlName=\"other_payment_description\"></ion-input>\r\n          <ion-input placeholder=\"Charges\" formControlName=\"other_payment_charges\"></ion-input>\r\n          <span><a class=\"remove\" (click)=\"removeChargesOtherPayments(i)\">X</a></span>\r\n        </ion-item> \r\n        <ion-item lines=\"none\">\r\n          <ion-select type=\"text\" formControlName=\"other_payment_detail\" placeholder=\"per SQFT\">\r\n            <ion-select-option value=\"Per SQFT\">Per SQFT</ion-select-option>\r\n            <ion-select-option value=\"Per SQYD\">Per SQYD</ion-select-option>\r\n            <ion-select-option value=\"Per SQMTR\">Per SQMTR</ion-select-option>\r\n            <ion-select-option value=\"Per KVA\">Per KVA</ion-select-option>\r\n            <ion-select-option value=\"Per KWA\">Per KWA</ion-select-option>\r\n            <ion-select-option value=\"Per FLAT\">Per FLAT</ion-select-option>\r\n          </ion-select>\r\n          <ion-select type=\"text\" formControlName=\"other_payment_detail2\" placeholder=\"One Time\">\r\n            <ion-select-option value=\"One Time\">One Time</ion-select-option>\r\n            <ion-select-option value=\"Annually\">Annually</ion-select-option>\r\n            <ion-select-option value=\"Per Month\">Per Month</ion-select-option>\r\n            <ion-select-option value=\"Per Quater\">Per Quater</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>      \r\n      </div>\r\n    </div>\r\n    <span><a class=\"add\" (click)=\"AddChargesOtherPayments()\">Add Row</a></span>\r\n  </div>\r\n  <ion-item lines=\"none\">Is there any other charges, you didn't included in BSP or mention above ?</ion-item>\r\n  <div class=\"availableFormWrapper\">\r\n    <ul>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" name=\"options\" (change)=\"otherChargesIncluded(true)\" >\r\n          yes\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <label class=\"container\">\r\n          <input type=\"radio\" name=\"options\" (change)=\"otherChargesIncluded(false)\" >\r\n          No\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </li>      \r\n    </ul>  \r\n  </div>\r\n  <div *ngIf=\"enableOtherCharges === true\">\r\n    <div formArrayName=\"otherCharges\" *ngFor=\"let item of otherChargesArrayControl.controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <ion-item class=\"payment_wrapper\" lines=\"none\">\r\n          <ion-input placeholder=\"Descriptions\" formControlName=\"chrg_other_bsp_description\"></ion-input>\r\n          <ion-input placeholder=\"Charges\" formControlName=\"chrg_other_bsp_charges\"></ion-input>\r\n          <span><a class=\"remove\" (click)=\"removeChargesOtherThenBsp(i)\">X</a></span>\r\n        </ion-item> \r\n        <ion-item lines=\"none\">\r\n          <ion-select type=\"text\" formControlName=\"chrg_other_bsp_detail\" placeholder=\"per SQFT\">\r\n            <ion-select-option value=\"Per SQFT\">Per SQFT</ion-select-option>\r\n            <ion-select-option value=\"Per SQYD\">Per SQYD</ion-select-option>\r\n            <ion-select-option value=\"Per SQMTR\">Per SQMTR</ion-select-option>\r\n            <ion-select-option value=\"Per KVA\">Per KVA</ion-select-option>\r\n            <ion-select-option value=\"Per KWA\">Per KWA</ion-select-option>\r\n            <ion-select-option value=\"Per FLAT\">Per FLAT</ion-select-option>\r\n          </ion-select>\r\n          <ion-select type=\"text\" formControlName=\"chrg_other_bsp_detail2\" placeholder=\"One Time\">\r\n            <ion-select-option value=\"One Time\">One Time</ion-select-option>\r\n            <ion-select-option value=\"Annually\">Annually</ion-select-option>\r\n            <ion-select-option value=\"Per Month\">Per Month</ion-select-option>\r\n            <ion-select-option value=\"Per Quater\">Per Quater</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>      \r\n      </div>\r\n    </div>\r\n    <span><a class=\"add\" (click)=\"AddChargesOtherThenBsp()\">Add Row</a></span>\r\n  </div>\r\n  \r\n  <div class=\"checkboxList termCondition\">   \r\n    <ul>\r\n      <li>\r\n        <input  type=\"checkbox\" class=\"styled-checkbox\" formControlName=\"termAndCondition\" name=\"\" id=\"term\">\r\n        <label for=\"term\"> I agree to all the terms & conditions of the website.</label>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <ion-item lines=\"none\">\r\n    <div *ngIf=\"!addProjectForm.invalid\">\r\n      <ion-text color=\"danger\">\r\n        <p>All fields are mandatory. Please provide all informations</p>\r\n      </ion-text>\r\n    </div>\r\n  </ion-item>\r\n</div>\r\n<div class=\"four-step-registration\" *ngIf=\"steps === 4\">  \r\n    <div class=\"gallery\">\r\n      <ul>\r\n        <li (click)=\"imageGallery('Exterior')\">\r\n         <a [ngClass]=\"{ 'active':  activeTab == 'Exterior'}\">Exterior</a>\r\n        </li>\r\n        <li (click)=\"imageGallery('LiftLobby')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'LiftLobby'}\">Lift & Lobby</a>\r\n         </li>\r\n         <li (click)=\"imageGallery('Entrance')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'Entrance'}\">Entrance</a>\r\n         </li>\r\n         <li (click)=\"imageGallery('Surrounding')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'Surrounding'}\">Surrounding</a>\r\n         </li>\r\n         <li (click)=\"imageGallery('Location')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'Location'}\">Location</a>\r\n         </li>\r\n         <li (click)=\"imageGallery('Master')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'Master'}\">Master</a>\r\n         </li>\r\n         <li (click)=\"imageGallery('Floor')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'Floor'}\">Floor</a>\r\n         </li>\r\n         <li (click)=\"imageGallery('Logo')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'Logo'}\">Logo</a>\r\n         </li>\r\n         <li (click)=\"imageGallery('Banner')\">\r\n          <a [ngClass]=\"{ 'active':  activeTab == 'Banner'}\">Banner</a>\r\n         </li>\r\n      </ul>\r\n    </div>\r\n    \r\n      <div class=\"projectType\">\r\n          Upload photo and get upto <span class=\"boldRed\">5X RESPONSE</span><br>\r\n          <strong> 80% of people</strong> get attracted to properties with photos!\r\n      </div>\r\n      \r\n        <div class=\"image_upload_btn\">\r\n          <input hidden formControlName=\"image_category\">\r\n          <input type=\"file\" (change)=\"fileUpload($event, activeTab)\" multiple formControlName=\"image_name\">\r\n        </div>\r\n      \r\n  </div>\r\n<ion-item lines=\"none\">\r\n  <ion-button *ngIf=\"steps > 1 && showPreviousBtn\" class=\"nextBtn\" type=\"button\" (click)=\"goBack()\">Previous</ion-button>\r\n  <ion-button *ngIf=\"hideNextBtn\" class=\"nextBtn\" type=\"submit\">Next</ion-button>\r\n  <ion-button *ngIf=\"steps > 2 && showSubmitBtn\" class=\"nextBtn submitBtn\" type=\"submit\" disabled=\"!addProjectForm.valid\" (click)=\"submitButtonClicked()\">Submit</ion-button>\r\n</ion-item>\r\n\r\n</form> \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_post-project_add-project_add-project_module_ts.js.map