import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.page.html',
  styleUrls: ['./list-property.page.scss'],
})
export class ListPropertyPage implements OnInit {
  searchParams:any;
  faPhone = faPhone;
  faMessage = faMessage;
  propertyList:any;
  showSpinner:boolean = false;
  isPageReady:boolean = false;
  constructor(
    private _route: ActivatedRoute,
    private _main: MainService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((data)=>{
     // console.log(data)
      let parseData = JSON.parse(data.residential);
     // console.log('listing', parseData);
      this.searchParams = parseData;
      // this.searchParams.PropertyFor = 'Sell';
     // console.log('listing', this.searchParams);
    this._main.getPropertyList(this.searchParams).then(
      (data)=>{
                let getData = JSON.parse(data.data);                
                this.propertyList = getData.data;                
                this.showSpinner = true;
                this.isPageReady = true;
             //   console.log('serch', this.propertyList);
      }
    )
    })
  }

  propertyDetails(id:number,lat:any,long:any){
    this._router.navigate(['/property-details', {id: id, lat: lat, long: long}])
  }

}
