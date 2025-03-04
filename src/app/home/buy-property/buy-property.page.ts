import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { faCheck, faIndianRupeeSign,faCaretDown, faHome} from '@fortawesome/free-solid-svg-icons';
import { CalculatorService } from 'src/app/services/calculator.service';
import { MainService } from 'src/app/services/main.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-buy-property',
  templateUrl: './buy-property.page.html',
  styleUrls: ['./buy-property.page.scss'],
})
export class BuyPropertyPage implements OnInit {
  segment: string;
  faCarrot = faCaretDown;
  home = faHome;
  imageUrlBasePath:string = 'https://www.huntproperty.com/'
  faIndianRupeeSign = faIndianRupeeSign;
  status: number = -1;
  residentialsProp: any;
  activeId?: number;
  isFavorite: boolean = false;
  projecttype: any;
  faCheck = faCheck;
  showBedrooms: boolean = false;
  typeOfProperty: any;
  residentialsProperty: any;
  commercialProperty: any;
  commercialProp: any;
  filteredData:any;
  filteredDataValue:string = "";
  showFilter:boolean = false;
  inputData:any;
  updateBackground:string = 'buy';
  showCaretBuy:boolean = true;
  showCaretRent:boolean = false;
  constructor(private _mainSVC: MainService,
    private fb: FormBuilder,
    private _route: Router,
    private geolocation: Geolocation
  ) {
    this.segment = "Residential";

  }

  ngOnInit() {
   // console.log('byeeee');
    this.residentialsProperty = this.fb.group({
      PropertyFor: "Sell",
      Location: [''],
      min_ExpectedPrice: ['', Validators.required],
      max_ExpectedPrice: ['', Validators.required],
      minArea: ['', Validators.required],
      maxArea: ['', Validators.required],
      "limit": 10,
      "offset": 0
    });
   // console.log('byeeee2');
    this.commercialProperty = this.fb.group({
      min_ExpectedPrice: ['', Validators.required],
      max_ExpectedPrice: ['', Validators.required],
      minArea: ['', Validators.required],
      maxArea: ['', Validators.required]
    });
    const residentialData = {
       propertyfor: 'sell',
       propertytype: 'Residential'
    }
   // console.log('byeeee3');
    this._mainSVC.getResidentialPropertyList(residentialData).then(
      (data) => {
      //  console.log(data);
      //  console.log('byeeee4');        
        let parseData = JSON.parse(data.data);
       // console.log('parseData', parseData);
        this.residentialsProp = parseData.PropertyCategory;
      },
      (error)=>{
       // console.log(error)
      }
    );
    const commercialData = {
      propertyfor: 'Rent',
      propertytype: 'Commercial'
    }
    this._mainSVC.getCommercialPropertyList(commercialData).then(
      (data) => {
       // console.log(data);
        let parseData = JSON.parse(data.data);
      //  console.log('parseData', parseData.data);
        this.commercialProp = parseData.PropertyCategory;
        // if(data == 200){}
      }
    );


  }
  buyPropertyTab(tabIndex:string){
   // console.log(tabIndex)
    this.updateBackground = tabIndex;
    switch (tabIndex) {
      case 'buy':
        this.showCaretBuy = true;
        this.showCaretRent = false;

        break;
      case 'rent':
      this.showCaretRent = true;
      this.showCaretBuy = false;
      break;
    
      default:
        break;
    }
  }
  SearchProperty(ev:any){
    this.showFilter = true;    
   // console.log(ev.target.value)   
    this.filteredDataValue = ev.target.value; 
    this.inputData = {
      search: ev.target.value
    }
    this._mainSVC.searchProperty(this.inputData).then((data)=>{     
      let parseData = JSON.parse(data.data);
    //  console.log(parseData.suggestions)
      this.filteredData = parseData.suggestions;
    })
    
  }
  selectFileredValue(val:string){
    // console.log(val)
    this.filteredDataValue = val;
    this.residentialsProperty.get('Location').setValue(this.filteredDataValue);
    this.showFilter = false;
  }
  getCurrentLocation(){
  //  console.log('clicked');
    this.geolocation.getCurrentPosition().then((resp) => {
   //   console.log(resp.coords.latitude)
      resp.coords.latitude
      resp.coords.longitude
     }).catch((error) => {
      // console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // console.log(data)
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  clickEvent(i, PropertyTypeID) {
    this.status = i;
   // console.log(i, PropertyTypeID);
    this._mainSVC.listProjectTypeSubCatageory(PropertyTypeID).then(
      (data) => {

        let parseData = JSON.parse(data.data);
     //   console.log('listData', parseData.data);
        this.typeOfProperty = parseData.data;
        this.showBedrooms = true;
      }
    )

  }

  segmentChanged(event) {
   // console.log('event', event.target.value);
    this.status = -1;
  }

  onSubmitResidential() {
   // console.log(this.residentialsProperty.value);
   // console.log('control',this.residentialsProperty)    ;
    this.residentialsProperty.statusChanges.subscribe(status => {});

    // this.residentialsProperty.get('Location').setValue(this.filteredDataValue);
    localStorage.setItem('propertyType', this.residentialsProp.value);
    this._route.navigate(['list-property', { residential: JSON.stringify(this.residentialsProperty.value) }])
  }

  onSubmitCommercial() {
   // console.log(this.commercialProperty.value);
    localStorage.setItem('propertyType', this.residentialsProp.value);
    this._route.navigate(['list-property', { residential: JSON.stringify(this.commercialProperty.value) }])
  }
}
