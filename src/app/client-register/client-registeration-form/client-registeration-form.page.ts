import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { faIndianRupeeSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-client-registeration-form',
  templateUrl: './client-registeration-form.page.html',
  styleUrls: ['./client-registeration-form.page.scss'],
})
export class ClientRegisterationFormPage implements OnInit {
  public model = { option: 'option3' };
  public steps:number = 1;
  public min:number = 1;
  public max:number = 10;
  public clientRegistraionForm:FormGroup;
  public hideNextBtn:boolean = true;
  public showSubmitBtn:boolean = false;
  public showPreviousBtn:boolean = false;
  public projectTypes:any;
  public projectCatogery:any;
  public getId:number;
  public projectSubCatogery:any;
  public getSubCatId:any;
  public faIndianRupeeSign = faIndianRupeeSign;
  public loanRequired:boolean = false;
  public propertyType = "";
  public ProjectCategory:string;
  public ProjectSubCategory:string;
  public activeTab: string = '';
  public possessionTabActive: string ='';
  public projectPurpose:string = "Residential";
  public projectTypeTabActive:string = '';
  public payload:any;
  public setLocation:string = "Delhi";
  public closingDealTab:string;
  public budget:any;
  public location = [
    {id:"1", locationName:"Delhi"},
    {id:"2", locationName:"Noida"},
    {id:"3", locationName:"Greater Noida"},
    {id:"4", locationName:"Ghaziabad"},
  ]

  constructor(
    private _fb:FormBuilder,
    private _main:MainService,
    private _nativeStorage:NativeStorage,
    private _router:Router,
    private _utilService:UtilService
  ) { }

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
      client_name:[''],
      client_email:[''],
      client_phone:[''],
      client_address:['123, Sector 5, Laxmi nagar'],
      how_know:[''],
      propertyType:[''],
      projectType:[''],
      projectType_cat:[''],
      project_purpose:[''],
      size_property:[''],
      size_property_unit:[''],
      property_possession:[''],
      property_location:[''],
      property_investment:[''],
      bank_loan:[''],
      self_funding_percent:[''],
      bank_loan_funding_percent:[''],
      deal_finalise_duration:[''],
      createdBy:['']


    })
  }
  ionViewWillEnter(){
    // console.log('location',this.location)
    this._nativeStorage.getItem('userId').then((data)=>{ 
      this.clientRegistraionForm.get('createdBy').setValue(data);
    })
    this.steps = 1;
    this._main.projectType().then((data)=>{
      let parseData = JSON.parse(data.data);
      console.group(parseData.data)
      this.projectTypes = parseData.data;
    })
    let id = 1;    
    this.getProjectTypeId(id, this.propertyType);
    this.getCategoryId(1);
    this.getSubcategoryId(1);
    this.setActive(this.projectPurpose);
    this.getLocation(this.setLocation);
    
      
  }
  getRangeValue(ev:number){
      console.log(ev)  
      this.budget = ev;
    }
    
  getProjectTypeId(id, propertyType:string){ 
    this.projectTypeTabActive = propertyType
    this.propertyType = propertyType;   
    let data = {
      projecttypeid: id
    }
    this._main.getProjectCatogery(data).then((data)=>{
      let parseData = JSON.parse(data.data);
      console.group(parseData.data)
      this.projectCatogery = parseData.data;
     this.getId = this.projectCatogery[0].Id;
     this.ProjectCategory = this.projectCatogery[0].ProjectCategory;
     console.log('this.getId', this.getId);
     this.getCategoryId(this.getId)   
    })
  }
  updateValue(ev:any){
    console.log('event', ev.target.value)
  }
  getCategoryId(ev:any){ 
    console.log(ev)
    let data = {
      projectcategoryid: ''
    }
    if(ev === this.getId){
      // debugger;
      data.projectcategoryid = ev;
    } else if(ev.target.value != ''){
      console.log('else')
      data.projectcategoryid = ev.target.value;
      this.projectCatogery.forEach(element => {
        console.log(element)
        if(ev.target.value === element.Id){
          this.ProjectCategory = element.ProjectCategory; 
          // break;         
        }
      });
      console.log(' this.ProjectCategory',  this.ProjectCategory)
    }
    console.log(data)
    this._main.getProjectSubCatogery(data).then((data)=>{
      let parseData = JSON.parse(data.data);
      console.group(parseData.data)
      this.projectSubCatogery = parseData.data;
     this.getSubCatId = this.projectSubCatogery[0].Id;
     this.ProjectSubCategory = this.projectSubCatogery[0].ProjectSubCategory;
     console.log('this.getSubCatId', this.getSubCatId);
    })
  }
  getSubcategoryId(ev:any){   
    console.log('sub',ev)    
    if(ev === this.getSubCatId){
      // debugger;
      this.getSubCatId = ev;
    } else if(ev.target.value != ''){
      console.log('else')
      this.getSubCatId = ev.target.value;
      this.projectSubCatogery.forEach(element => {
        if(ev.target.value === element.Id){
          this.ProjectSubCategory = element.ProjectSubCategory;
                 
        }
      });
    }
    
  }
  
  setActive(tab: string) {
    console.log(tab)
    this.projectPurpose = tab
    return this.activeTab = tab;
  }
  getPossessionStatus(tab:string){
    console.log(tab)
    this.clientRegistraionForm.get('property_possession').setValue(tab);
  return this.possessionTabActive = tab;
  }
  getLocation(ev:any){
    console.log(ev.target.value)
    this.location.forEach((ele)=>{
      console.log(ele)
      if(ev.target.value == ele.id){
        console.log('ghgh')
       return this.setLocation = ele.locationName;
        
        // this.clientRegistraionForm.get('property_location').setValue(ele.locationName); 
      }
    })
    console.log(this.setLocation)
  }
  getParaMeter(ev: any) {
    console.log(ev.target.value)
    this.clientRegistraionForm.get('size_property_unit').setValue(ev.target.value);
  }
  bankLoanRequired(val:string){
    this.loanRequired = true;
    if(val === "No"){
      this.loanRequired = false;
    }
    this.clientRegistraionForm.get('bank_loan').setValue(val);
  }
  closeLoanRequiredInput(){
    this.loanRequired = false;
  }
  closingDeal(val:string){
    this.clientRegistraionForm.get('deal_finalise_duration').setValue(val); 
    return this.closingDealTab = val;
  }
  onSubmit(){
    this.steps++;
    this.showPreviousBtn = true;  
    let initialBudget = 1;
    this.payload =
      { client_name: this.clientRegistraionForm.get('client_name').value ,
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
        property_investment: this.budget === undefined ? "Less Then " + initialBudget + " Cr.": "Less Then " + this.budget + " Cr.",
        bank_loan: this.clientRegistraionForm.get('bank_loan').value,
        self_funding_percent: this.clientRegistraionForm.get('self_funding_percent').value,
        bank_loan_funding_percent: this.clientRegistraionForm.get('bank_loan_funding_percent').value,
        deal_finalise_duration: this.clientRegistraionForm.get('deal_finalise_duration').value,
        createdBy: this.clientRegistraionForm.get('createdBy').value        
      },
      this._nativeStorage.setItem('formData', this.payload);     
    console.log(this.payload);
    console.log(this.clientRegistraionForm.value);
    if(this.steps === 4){
      this.showPreviousBtn = false
      this.hideNextBtn = false;
      this.showSubmitBtn = false;      
      let formData = this._nativeStorage.getItem('formData').then((payload)=>{
        console.log(payload);
        this._main.clientRegistration(payload).then((data) => {
          this.hideNextBtn = false;
          this.showSubmitBtn = false;
          this.showPreviousBtn = false;
          console.log(data)
          if (data.status === 200) {
            console.log('success')
            this._router.navigateByUrl('/client-register');
            this._utilService.presentToast('Data is inserted successfully', 'toaster-background')

          }
        })
      })
     
    }
   
  }
  submitButtonClicked(){
    console.log('clicked')
    this.steps = 0;
    this.showPreviousBtn = false;
    
  }
  goBack(){
    this.steps--;
    this.hideNextBtn = true;
  }


}
