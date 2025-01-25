import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  associates: any;
  URL: 'https://www.huntproperty.com/dist/uploads/Associates/';
  showFilter:boolean = false;
  filteredDataValue:string = "";
  inputData:any;
  updateBackground:string = 'buy';
  filteredData:any;
  showCaretBuy:boolean = true;
  showCaretRent:boolean = false;
  constructor(
    private _mainSVC: MainService,
    private _router: Router,
    private geolocation: Geolocation
  ) { }

  ngOnInit(): void {
    console.log('init')    
    this.getCurrentLocation();
    this.getAssociateList();
  }
  getPosition()
  {
    navigator.geolocation.getCurrentPosition((showPos)=>{
      console.log('clicked', showPos) 
    })
    
    // navigator.geolocation.getCurrentPosition(resp => {   
    //   console.log('clicked', resp)     
    //       // ({lng: resp.coords.longitude, lat: resp.coords.latitude});
    //     }
    //   )
  }
  
  getAssociateList() {
    console.log('data');
    this._mainSVC.getAssociate().then(
      (data) => {
        console.log('data', data);
        let parseData = JSON.parse(data.data);
        console.log('parseData', parseData.data);
        this.associates = parseData.data;
        console.log('data', this.associates);
      }
    )
  }

  clientRegister() {
    this._router.navigateByUrl('/client-register');
  }
  SearchProperty(ev:any){
    this.showFilter = true;    
    console.log(ev.target.value)   
    this.filteredDataValue = ev.target.value; 
    this.inputData = {
      search: ev.target.value
    }
    this._mainSVC.searchProperty(this.inputData).then((data)=>{     
      let parseData = JSON.parse(data.data);
      console.log(parseData.suggestions)      
      this.filteredData = parseData.suggestions;
    })
    
  }
  selectFileredValue(val:string){
    console.log(val)
    this.filteredDataValue = val;
    this.showFilter = false;
  }
  getCurrentLocation(){
    console.log('clicked');
    this.geolocation.getCurrentPosition().then((resp) => {
      // console.log(resp.coords.latitude)
      resp.coords.latitude
      resp.coords.longitude
     }).catch((error) => {
      //  console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // console.log(data)
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  buyPropertyTab(tabIndex:string){
    console.log(tabIndex)
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
}
