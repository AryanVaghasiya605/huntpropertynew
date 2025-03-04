import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import * as moment from 'moment';
import { MainService } from 'src/app/services/main.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-posted-property-details',
  templateUrl: './posted-property-details.page.html',
  styleUrls: ['./posted-property-details.page.scss'],
})
export class PostedPropertyDetailsPage implements OnInit {
  public get camera(): Camera {
    return this._camera;
  }
  public set camera(value: Camera) {
    this._camera = value;
  }
  radioItems;
  steps:number = 1;
  rentForm:FormGroup;
  model = { option: 'option3' };
  plusMinus = false;
  showAddBtn = true;
  year:any;
  hideNextBtn:boolean = true;
  showSubmitBtn:boolean = false;
  showYearDropDown:boolean = false; 
  public previews:any; 
  progressInfos:any;
  selectedFiles:any;
  activeRouteData:any;
  allAmenties:any;
  allAttributes:any;
  bedroomsOpt = [];
  bathroomOpt = [];
  balconiesOpt = [];
  finishingStatus = [];
  ageOfCons = [];
  typeOfOwnerShip = [];
  facing = [];
  state = [];
  stateList:any;
  stateListIndex:number;
  cityList:any;
  cityListIndex:number;
  city = [];
  availableFrom = [];
  amentiesSelectedData = [];
  propertyFor:any;
  attributesArray = [];
  attaributeData = {};
  lastIndexValue = [];
  transactionType = [];
  possessionStatus = [];
  carParking = [];
  lift = [];
  storeRoom = [];
  servantRoom = [];
  anyConstructionDone = [];
  boudaryWallMade = [];
  occupancy = [];
  sharedOfficeSpace = [];
  personalWashroom = [];
  pantry = [];
  attachedBathroom=[];
  attachedBalcony=[];
  howoldisthePG=[];
  furnishingDetails=[];
  electricity=[];
  laundry=[];
  commonArea=[];
  tenantsYouPrefer=[];
  // yearValue= format(new Date(), 'yyyy-MM-dd',) + 'T09:00:00.00z';
  checkBoxData = [];
  selectedBedrooms: number;
  selectedBedroomArray: number[] = [];
  formSubmittedStepOne = true;
  formSubmittedSteptwo = true; 
  bedroomOptions: number[] = [1, 2, 3, 4, 5];
  constructor(
    private _fb:FormBuilder,
    private _camera: Camera,
    private actionSheetCtrl:ActionSheetController,
    private _activatedRoute: ActivatedRoute,
    private _maniSVC:MainService,
    private _utilService:UtilService,
    private _router:Router,
  ) {
    this.radioItems = ['Residential', 'Commercial'];
    this.propertyFor =  this._activatedRoute.snapshot.params['propertyfor'];  
   // console.log('propertyFor======>', this.propertyFor);
  }
  

  ngOnInit() {
    this.rentForm = this._fb.group({
      Bedrooms: [],
      Bathrooms: [],
      Balconies: [],
      totalFloor: [],
      totalNumber: [],
      FinishingStatus: [],
      FloorNumber: [],
      TotalFloors: [],
      SuperArea: [],
      BuiltUpArea: [],
      CarpetArea: [],
      TransactionType: [],
      PossessionStatus: [],
      AgeOfConstruction: [],
      CarParking: [],
      Lift: [],
      TypeOfOwnership: [],
      Facing: [],
      StoreRoom: [],
      UnitNumber: [],
      ExpectedPrice: [],
      BookingAmount: [],
      MaintenanceCharges: [],
      Brokerage: [],
      State: [],
      City: [],
      Locality: [],
      Address: [],
      ServantRoom: [],
      Landmark: [],
      AvailableFrom: [],
      CoveredArea: [],
      PlotArea: [],
      amenities: [''],
      OpenSides: [],
      FloorsAllowed: [],
      BuildingName: [],
      propertyForId: [],
      propertyFor:[],
      propertyName:[],
      propertyTitle:[],
      propertyDescription:[],
      Attributes: [''],
      MonthlyRent:[''],
      SecurityAmount:[''],
      AnyConstructionDone:[],
      BoudaryWallMade:[],
      Occupancy : [],
      SharedOfficeSpace:[],
      PersonalWashroom:[],
      Pantry : [],
      AttachedBathroom:[],
      AttachedBalcony:[],
      HowoldisthePG:[],
      Electricity:[],
      Laundry:[],
      FurnishingDetails:[],
      CommonArea:[],
      TenantsYouPrefer:[]
    })
    this.checkBoxData = [
      {checkboxName:"Car Parking", id:"parking"},
      {checkboxName:"Kid's Playground", id:"playground"},
      {checkboxName:"Club House", id:"club"},
      {checkboxName:"Restraunts", id:"restraunts"},
      {checkboxName:"Fitness Gym", id:"gym"},
      {checkboxName:"School", id:"school"},
      {checkboxName:"Hospital", id:"hospital"},
      {checkboxName:"Swimming Pool", id:"pool"},
      {checkboxName:"24 Hour Water Supply", id:"waterSupply"},
      {checkboxName:"FireFighting Equipment", id:"fire"},
      {checkboxName:"Power Backup", id:"Powerbackup"},
      {checkboxName:"Yoga", id:"yoga"},
      {checkboxName:"Library", id:"library"} 
    ]
    this.activeRouteData = this._activatedRoute.snapshot.params['id'];
    let id = {
      "propertycategoryid":this.activeRouteData
  }
  
  //console.log("ID LIST=================================>",id);
    this.attriButeList(id);
    this.rentForm.get('propertyForId').setValue(this.activeRouteData);
    this.rentForm.get('propertyFor').setValue(this.propertyFor);
  }
  ionViewWillEnter(){
    this.getState()
  }
  stateLisOnChange(ev:any){
   // console.log(ev.target.value);
    let stateId = {
      stateid:ev.target.value
    }
    this.getCityListOnChange(stateId)
  }
  getCityListOnChange(stateId){
    this._maniSVC.getCityList(stateId).then((data)=>{
   //   console.log(data)
      let parseData = JSON.parse(data.data);
      this.cityList = parseData;
      this.cityListIndex = this.cityList[0]?.Id;
    //  console.log(parseData)
    })
  }
  attriButeList(id){
    this._maniSVC.getAttributeListById(id).then((data)=>{      
      if (data.status == 200) {
        let parseData = JSON.parse(data.data);
       // console.log(parseData);
        if(parseData.Status === true){
          this.allAmenties = parseData.allAmenities;
          this.allAttributes = parseData.allAttributes;
        //  console.log("Attributes====>",this.allAmenties, this.allAttributes);
          this.allAttributes.forEach(element => {
           //  console.log(element)
            switch (element.AttributeCode) {
              case 'Bedrooms':
                this.bedroomsOpt = element.AttributeOption.split(',');
                break;
              case 'Bathrooms':
                this.bathroomOpt = element.AttributeOption.split(',');
                break;
              case 'Balconies':
                this.balconiesOpt = element.AttributeOption.split(',');
                break;
              case 'FinishingStatus':
                this.finishingStatus = element.AttributeOption.split(',');
                break;
              case 'AgeOfConstruction':
                this.ageOfCons = element.AttributeOption.split(',');
                break;
              case 'TypeOfOwnership':
                this.typeOfOwnerShip = element.AttributeOption.split(',');
                break;
              case 'Facing':
                this.facing = element.AttributeOption.split(',');
                break;
              case 'State':
                this.state = element.AttributeOption.split(',');
                break;
              case 'City':
                this.city = element.AttributeOption.split(',');
                break;
              case 'AvailableFrom':
                this.availableFrom = element.AttributeOption.split(',');
                break;
              case 'TransactionType':
                this.transactionType = element.AttributeOption.split(',');
               // console.log(this.transactionType);
                break;
              case 'PossessionStatus':
                this.possessionStatus = element.AttributeOption.split(',');
                break;
              case 'CarParking':
                this.carParking = element.AttributeOption.split(',');
                break;
              case 'Lift':
                this.lift = element.AttributeOption.split(',');
                break;
              case 'StoreRoom':
                this.storeRoom = element.AttributeOption.split(',');
                break;
              case 'ServantRoom':
                this.servantRoom = element.AttributeOption.split(',');
                break;  
              case 'AnyConstructionDone':
                  this.anyConstructionDone = element.AttributeOption.split(',');
                  break;    
              case 'BoudaryWallMade':
                  this.boudaryWallMade = element.AttributeOption.split(',');
                   break;   
              case 'Occupancy':
                 this.occupancy = element.AttributeOption.split(',');
                 break;  
              case 'SharedOfficeSpace':
                  this.sharedOfficeSpace = element.AttributeOption.split(',');
                  break;    
              case 'PersonalWashroom':
                  this.personalWashroom = element.AttributeOption.split(',');
                  break;   
              case 'Pantry':
                  this.pantry = element.AttributeOption.split(',');
                  break;  
              case 'HowoldisthePG':
                  this.howoldisthePG = element.AttributeOption.split(',');
                  break;    
              case 'AttachedBathroom':
                  this.attachedBathroom = element.AttributeOption.split(',');
                  break;   
              case 'AttachedBalcony':
                  this.attachedBalcony = element.AttributeOption.split(',');
                  break;   
              case 'FurnishingDetails':
                this.furnishingDetails = element.AttributeOption.split(',');
                break;  
              case 'CommonArea':
                  this.commonArea = element.AttributeOption.split(',');
                  break;              
              default:
                break;
            }
           
          });

        }
      }
    })
  }
  isCheckBoxSelected(ev: any, id:number) {
   // console.log(ev,ev.target.value);
    let amenitiesData = {
      "AmenityId": id,"AmenityName": ev.target.value
    }
    this.amentiesSelectedData.push(amenitiesData);
    this.rentForm.get('amenities').setValue(this.amentiesSelectedData)
   // console.log(this.amentiesSelectedData);
  }
  createAttributeList(){
    return this._fb.group({
      AttributeId:[''],
      AttributeName:[''],
      Value:['']
    })
  }
  updateBedrooms() {
    if (!this.selectedBedroomArray.includes(this.selectedBedrooms)) {
      this.selectedBedroomArray.push(this.selectedBedrooms);
    }
   // console.log(this.selectedBedroomArray)
  }
  getFinishingStatus(ev:any, AttributeName:any, AttributeId:any){
   // console.log(ev.target.value);  
    this.attaributeData = {
    AttributeId: AttributeId,
    AttributeName: AttributeName,
    Value:ev.target.value
   }  
  //  this.attributesArray.push(this.attaributeData); 
   if (!this.attributesArray.includes(ev.target.value)) {
      // debugger;
      this.attributesArray.push(this.attaributeData); 
  }  
  this.rentForm.get('Attributes').setValue(this.attributesArray);
  this.rentForm.get('Attributes')
 
   
  }

  
  getInputField(ev: any, AttributeId: any, AttributeName: any, AttributeCode: any) {
   // console.log("value==>", AttributeId, AttributeName, AttributeCode);
   // console.log("vvv", this.rentForm.get(AttributeCode)?.value);
  
    // Find if the AttributeCode already exists in the array
    const existingIndex = this.attributesArray.findIndex(
      (item) => item.AttributeId === AttributeId
    );
  
    const newValue = this.rentForm.get(AttributeCode)?.value;
  
    if (existingIndex !== -1) {
      // Update existing entry
      this.attributesArray[existingIndex].Value = newValue;
    } else {
      // Add new entry if it doesn't exist
      this.attaributeData = {
        AttributeId: AttributeId,
        AttributeName: AttributeName,
        Value: newValue
      };
      this.attributesArray.push(this.attaributeData);
    }
  
   // console.log("Updated Attributes Array:", this.attributesArray);
  
    // Update the form's Attributes value
    this.rentForm.get('Attributes')?.setValue(this.attributesArray);
  }
  getAgeofConstruction(ev:any){
   // console.log(ev.target.value);
  }
  getTypeOfOwnership(ev:any){
   // console.log(ev.target.value);
  }
  getFacing(ev:any){
    //console.log(ev.target.value);
  }
  getState(){
    // console.log(ev.target.value);
    this._maniSVC.getStateList().then((stateList)=>{
      let parseData = JSON.parse(stateList.data);      
      this.stateList = parseData;
      console.group(this.stateList)
      this.stateListIndex = this.stateList[0].Id;
    })
  }
  getCity(ev:any){
   // console.log(ev.target.value);
  }
  getAvailableFrom(ev:any){
   // console.log(ev.target.value);
  }
  addProduct(){
    this.plusMinus = true;
    this.showAddBtn = false;
  }
  
  // handlePlus(ev:any, AttributeId:any, AttributeName:any) {
  //   // this.rentForm.get['control'].
  //   // console.log('addBedRoom',ev);
  //   // this.attaributeData = {
  //   //   AttributeId: AttributeId,
  //   //   AttributeName: AttributeName,
  //   //   Value:ev.Value
  //   //  }
  //   this.getFinishingStatus(ev,AttributeId, AttributeName)
  // }
  handleMinus(ev, AttributeId:any, AttributeName:any) {
   // console.log('removeBedRooms',ev, AttributeId, AttributeName);
    this.attaributeData = {
      AttributeId: AttributeId,
      AttributeName: AttributeName,
      Value:ev.Value
     }
  }
  selectyear(){
    this.showYearDropDown = true;
  }
  constructionAgeOnChange(event) {
   // console.log('year', event.target.value);
    this.year = moment(event.target.value).format("YYYY"); 
    this.showYearDropDown = false;
  }
  
  onSubmit(){
   // console.log(this.rentForm.value);
   // console.log(this.steps);    
    if (this.steps === 2) {
      this.hideNextBtn = false;
      this.showSubmitBtn = true;
      this.formSubmittedStepOne = false;
      this.formSubmittedSteptwo = false;
    } 
    this.steps++;
  }
  submitButtonClicked(){
    // this.formSubmitted = false
    this._maniSVC.postProperty(this.rentForm.value).then((data)=>{
    //  console.log(data)
      if(data.status === 200){
        this._utilService.presentToast('Data is inserted successfully', 'toaster-background')
        setTimeout(()=>{
          this._router.navigateByUrl('/posted-property');
        }, 1000)
      }
    })
  }

  
  
  uploadAction(ev:any){
  // console.log(ev);
   this.progressInfos = [];
    this.selectedFiles = ev.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
   // console.log(this.previews)
  }
  

  getSubcategory(ev:any){

  }
}
