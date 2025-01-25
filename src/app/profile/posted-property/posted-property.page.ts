import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-posted-property',
  templateUrl: './posted-property.page.html',
  styleUrls: ['./posted-property.page.scss'],
})
export class PostedPropertyPage implements OnInit {
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
    
    this._main.getPostedPropertyList().then(
      (data)=>{
                let getData = JSON.parse(data.data);                
                this.propertyList = getData.data;                
                this.showSpinner = true;
                this.isPageReady = true;
              //  console.log('serch', this.propertyList);
      }
    )
  }

  propertyDetails(id:number,lat:any,long:any){
    this._router.navigate(['/property-details', {id: id, lat: lat, long: long}])
  }


}
