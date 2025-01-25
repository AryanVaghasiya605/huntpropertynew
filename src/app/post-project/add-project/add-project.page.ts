import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { MainService } from 'src/app/services/main.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.page.html',
  styleUrls: ['./add-project.page.scss'],
})
export class AddProjectPage implements OnInit {
  model = { option: 'option3' };
  steps:number = 1;
  addProjectForm:FormGroup;
  hideNextBtn:boolean = true;
  showSubmitBtn:boolean = false;
  showPreviousBtn:boolean = true;
  checkBoxData = [];
  paymentsPlan = [];
  PropertyType:FormArray;
  flexiPayment:FormArray;
  constructionLinkPayments:FormArray;
  faUpload = faUpload;
  checkBoxList: any[];
  // persons: Array<Person> = [];
  amentiesSelectedData = [];
  projectType = [];
  imagecategory = [];
  stateList:any;
  stateListIndex:number;
  cityList:any;
  cityListIndex:number;
  downPayments:FormArray;
  otherCharges:FormArray;
  otherPayments:FormArray;
  specialPayments:FormArray;
  imageCatagory = [];
  imageName = [];
  isFlexiOpen:boolean = false;
  downPayment:boolean = false;
  special:boolean = false;
  isContructionPlan:boolean = false;
  enableOtherCharges:boolean = false;
  enableOtherPayments:boolean = false;
  showBspButtons:string;
  showBspDownPaymentButton:string;
  public activeTab: string = '';
  selectedFiles?: FileList;
  previews = [];
  progressInfos = [];
  finalImageData = []
  storeSitePlanImg= [];
  constructor(
    private _fb:FormBuilder,
    private _main:MainService,
    private _nativeStorage:NativeStorage,
    private _route:Router,
    private _utilService:UtilService
  ) { }

  ngOnInit() {
    this.addProjectForm = this._fb.group({
      ProjectTypeId:[''],
      pname:['', [Validators.required]],
      builder_name:['', [Validators.required]],
      builder_rera:['', [Validators.required]],
      project_rera:['', [Validators.required]],
      description:['', [Validators.required]],
      proj_state:['', [Validators.required]],
      proj_city:['', [Validators.required]],
      proj_locality:['', [Validators.required]],
      proj_address:['', [Validators.required]],
      proj_landmark:['', [Validators.required]],      
      status:['', [Validators.required]],
      createdBy:['', [Validators.required]],
      PropertyType: new FormArray([]),
      amenities:[''],
      flexiPayments: new FormArray([]),
      downPayments: new FormArray([]),
      specialPayments: new FormArray([]),
      constructionLinkPayments: new FormArray([]),      
      bsp_amount_flexi:[''],
      bsp_details_flexi:[''],
      bsp_amount_downpayment:[''],
      bsp_details_downpayment:[''],
      bsp_amount_special:[''],
      bsp_details_special:[''],
      bsp_amount_construction:[''],
      bsp_details_construction:[''],
      // installment_field:[''],      
      otherCharges: new FormArray([]),
      otherPayments: new FormArray([]),
      termAndCondition:[''], 
      image_category:[''],
      image_name:[''],     
      

    })
  }
  ionViewWillEnter() {
    this._nativeStorage.getItem('userId').then((userId)=>{
     // console.log(userId)
      this.addProjectForm.get('userId')?.setValue(userId)
    })

    this.checkBoxData = [
      {checkboxName:"Car Parking", id:"parking", checked : false},
      {checkboxName:"Kid's Playground", id:"playground", checked : true},
      {checkboxName:"Club House", id:"club", checked : false},
      {checkboxName:"Restraunts", id:"restraunts", checked : false},
      {checkboxName:"Fitness Gym", id:"gym", checked : false},
      {checkboxName:"School", id:"school", checked : false},
      {checkboxName:"Hospital", id:"hospital", checked : false},
      {checkboxName:"Swimming Pool", id:"pool", checked : false},
      {checkboxName:"24 Hour Water Supply", id:"waterSupply", checked : false},
      {checkboxName:"FireFighting Equipment", id:"fire", checked : false},
      {checkboxName:"Power Backup", id:"Powerbackup", checked : false},
      {checkboxName:"Yoga", id:"yoga", checked : false},
      {checkboxName:"Library", id:"library", checked : false} 
    ]
    this.paymentsPlan = [
      {checkboxName:"Flexi Payment Plan", id:"flexi", checked:false},
      {checkboxName:"Down Payment Plan", id:"DownPayment", checked:false},
      {checkboxName:"Special Payment Plan", id:"Special", checked:false},
      {checkboxName:"Construction Link Plan", id:"Construction", checked:false}
    ]
    this.imagecategory = [
      {value:"Exterior View", id:"Exterior"},
      {value:"Lift & Lobby", id:"LiftLobby"},
      {value:"Entrance", id:"Entrance"},
      {value:"Surrounding", id:"Surrounding"},
      {value:"Location", id:"Location"},
      {value:"Master", id:"Master"},
      {value:"Floor", id:"Floor"},
      {value:"Logo", id:"Logo"},
      {value:"Banner", id:"Banner"}
    ]
   
    this._main.projectType().then((data)=>{
      let parseData = JSON.parse(data.data);
      console.group(parseData.data)
      this.projectType = parseData.data;
    })
    this._main.getStateList().then((stateList)=>{
      let parseData = JSON.parse(stateList.data);      
      this.stateList = parseData;
      console.group(this.stateList)
      this.stateListIndex = this.stateList[0].Id;
    })
    let stateId = {
      stateid:this.stateListIndex
    }
    this.getCityListOnChange(stateId)
    this.addItem();
    this.AddflexiPaymentPlan();
    this.AddChargesOtherThenBsp();
    this.AddChargesOtherPayments();
    let tab = "Exterior"
    this.imageGallery(tab)
  }
  createItem(): FormGroup {
    return this._fb.group({
      accomodation_type: ['', [Validators.required]],
      size_Sqft: '',
      site_plan: ['', [Validators.required]],
      cluster_plan:'',
      floor_plan:''
    });
  }
  get propertyType(){
   return this.PropertyType = this.addProjectForm.get('PropertyType') as FormArray;
  }
  addItem(): void {
    
    this.PropertyType.push(this.createItem());
  }
  removeItem(i:number){
    let remove = this.addProjectForm.get('PropertyType') as FormArray;
    remove.removeAt(i);
  }
  get result() {
    return this.checkBoxData.filter(item => item.checked);
  }
  isCheckBoxSelected(ev:any){
      this.amentiesSelectedData.push(ev.target.value)
      this.addProjectForm.get('amenities').setValue(this.amentiesSelectedData)
      //console.log(this.amentiesSelectedData)
  }
  stateLisOnChange(ev:any){
   // console.log(ev.target.value);
    let stateId = {
      stateid:ev.target.value
    }
    this.getCityListOnChange(stateId)
  }
  getCityListOnChange(stateId){
    this._main.getCityList(stateId).then((data)=>{
   //   console.log(data)
      let parseData = JSON.parse(data.data);
      this.cityList = parseData;
      this.cityListIndex = this.cityList[0]?.Id;
     // console.log(parseData)
    })
  }
  createBspInputforFlexi(){
    return this._fb.group({
      payment_description:[''],
      payment_percent:[''],
    })
  }
 get flexiPaymentsArrayControl(){
   return this.flexiPayment = this.addProjectForm.get('flexiPayments') as FormArray; 
  }
  AddflexiPaymentPlan(){   
   this.flexiPayment.push(this.createBspInputforFlexi())
  }
  
  removeflexiPaymentPlan(i:number){
    this.flexiPayment = this.addProjectForm.get('flexiPayments') as FormArray;
    this.flexiPayment.removeAt(i)
   }
   bspDetailsFlexiOnChange(){

   }
   createBspInputForDown(){
    return this._fb.group({
      payment_description:[''],
      payment_percent:[''],
    })
  }
  get downPaymentsArrayControl(){
    return this.downPayments = this.addProjectForm.get('downPayments') as FormArray;  
  }
  AddDownPaymentPlan(){
   
   this.downPayments.push(this.createBspInputForDown())
  }
  removeDownPaymentPlan(i:number){
    this.downPayments = this.addProjectForm.get('downPayments') as FormArray;
    this.downPayments.removeAt(i)
   }
   createBspInputForSpecial(){
    return this._fb.group({
      installment_field:[''],
      installment_value:[''],
    })
  }
  get specialPaymentsArrayControl(){
   return this.specialPayments = this.addProjectForm.get('specialPayments') as FormArray; 
  }
   AddSpecialPaymentPlan(){
     
    this.specialPayments.push(this.createBspInputForSpecial())
   }
   removeSpecialPaymentPlan(i:number){
     this.specialPayments = this.addProjectForm.get('specialPayments') as FormArray;
     this.specialPayments.removeAt(i)
    }
  createBspInputForConstruction() {
    return this._fb.group({
      payment_description: [''],
      payment_percent: [''],
    })
  }
  get constructionLinkPaymentsArrayControl(){
   return this.constructionLinkPayments = this.addProjectForm.get('constructionLinkPayments') as FormArray;
  }
  AddConstructionPaymentPlan() {    
    this.constructionLinkPayments.push(this.createBspInputForConstruction())
  }
  removeConstructionPaymentPlan(i:number){
    this.constructionLinkPayments = this.addProjectForm.get('constructionLinkPayments') as FormArray;
    this.constructionLinkPayments.removeAt(i)
  }
  createInputOtherThenBsp(){
    return this._fb.group({
      chrg_other_bsp_description:[''],
      chrg_other_bsp_charges:[''],
      chrg_other_bsp_detail:[''],
      chrg_other_bsp_detail2:[''],
    })
  }
  get otherChargesArrayControl(){
    return  this.otherCharges = this.addProjectForm.get('otherCharges') as FormArray;  
  }
  AddChargesOtherThenBsp(){   
    this.otherCharges.push(this.createInputOtherThenBsp())
  }
  removeChargesOtherThenBsp(i:number){
    this.otherCharges = this.addProjectForm.get('otherCharges') as FormArray;
    this.otherCharges.removeAt(i)
    if(i < 1 ){
      this.enableOtherCharges = false;
      this.otherPaymentIncluded(this.enableOtherCharges)
    } else{
      this.enableOtherCharges = true;
    }
  }
  otherChargesIncluded(val:any){
   // console.log(val) 
      
    val === true ? this.enableOtherCharges = true : this.enableOtherCharges = false;
  }
  createInputOtherPayments(){
    return this._fb.group({
      other_payment_description:[''],
      other_payment_charges:[''],
      other_payment_detail:[''],
      other_payment_detail2:[''],
    })
  }
  get otherPaymentsArrayControl(){
    return this.otherPayments = this.addProjectForm.get('otherPayments') as FormArray; 
  }
  AddChargesOtherPayments(){     
    this.otherPayments.push(this.createInputOtherPayments())
  }
  removeChargesOtherPayments(i:number){
    this.otherPayments = this.addProjectForm.get('otherPayments') as FormArray;
    //console.log(i) 
    this.otherPayments.removeAt(i)    
    if(i < 1 ){
      this.enableOtherPayments = false;
      this.otherPaymentIncluded(this.enableOtherPayments)
    } else{
      this.enableOtherPayments = true;
    }
    
  }
  otherPaymentIncluded(val:any){
   // console.log(val) 
    val === true ? this.enableOtherPayments = true : this.enableOtherPayments = false;
    
  }
  clusterPlan(ev:any){
    //console.log(ev)
  }
  floorPlan(ev:any){
   // console.log(ev)
  }
  isPaymentPlanSelected(ev:any, checked:string){
    //console.log(ev.target.value, checked)
    if(checked === 'flexi'){
      this.isFlexiOpen = true;
    } else {
      this.isFlexiOpen = false;
    }
    if(checked === 'DownPayment'){
      this.downPayment = true;
    } else {
      this.downPayment = false;
    }
    if(checked === 'Special'){
      this.special = true;
    } else {
      this.special = false;
    }
    if(checked === 'Construction'){
      this.isContructionPlan = true;
    } else {
      this.isContructionPlan = false;
    }
    
    //console.log(this.addProjectForm.value)
   }
  addPerson() {
    // this.persons.push(new Person());
  }
  getprojectType(ev:any){
   // console.log(ev.target.value);
  }
  getPlanTypeId(){

  }
  getAccomodationType(){

  }
  imageGallery(tab:string){
    console.group(tab)
    return this.activeTab = tab
  }
  sitePlan(ev:any){
   // console.log(ev.target.files)
    let sitePlanImag;
    for (let index = 0; index < ev.target.files.length; index++) {
      sitePlanImag = ev.target.files[index];
     // console.log(sitePlanImag);
      this.storeSitePlanImg.push(sitePlanImag)
     // console.log(this.storeSitePlanImg, 'length', this.storeSitePlanImg.length);   
     
    }
    let imageData = {      
      image_name:''
    }
    
    for(let i = 0; i < this.storeSitePlanImg.length; i++){
      imageData = {
        image_name:this.storeSitePlanImg[i]
      }
      //console.log(this.storeSitePlanImg[0]);
      this.finalImageData.push(imageData);
      this.createItem().get('site_plan').setValue(this.finalImageData);
      break;
    }
  // console.log(this.addProjectForm.value)
  }
  fileUpload(ev:any, activeTab:string){
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
      this.previews.push( this.selectedFiles)
      
    }
   // console.log(this.previews[0])
   // console.log(this.previews.length, ev.target.files.length)
    let imageData = {
      image_category:'',
      image_name:''
    }
    
    for (let i = 0; i < this.previews.length; i++) {
      imageData = {
        image_category: activeTab,
        image_name:this.previews[i]
      }
     // console.log(imageData)      
      this.finalImageData.push(imageData);
      
    }
   // console.log(this.finalImageData)
    this.addProjectForm.get('image_category').setValue(this.finalImageData)
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
  onSubmit(){
    this.steps++;
    // console.log(this.addProjectForm.value, 'steps', this.steps++);
    if(this.steps === 4){
      this.showPreviousBtn = true
      this.hideNextBtn = false;
      this.showSubmitBtn = true; 
    } 
   
  }
  getSubcategory(){
    
  }
  submitButtonClicked(){
    //console.log('clicked')
    this.steps = 0;
    this.showPreviousBtn = false;
   // console.log(this.addProjectForm.value);
    this._main.postProject(this.addProjectForm.value).then((data)=>{
     //     console.log(data)
          if(data.status === 200){
            this._utilService.presentToast('Data is inserted successfully', 'toaster-background')
            setTimeout(()=>{
              this._route.navigateByUrl('/post-project');
            }, 1000)
          }
        })
    
  }
  goBack(){
    this.steps--;
    this.hideNextBtn = true;
    this.showSubmitBtn = false;
  }
}
