import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  faArrowLeft, faIndianRupee, faMessage } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../services/main.service';
declare var google:any;
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {
faArrow = faArrowLeft;
faIndianRupee = faIndianRupee;
faMessage = faMessage;
propertyDetails:any;
expectedPrice:any;
floorNumber:any;
bedRooms:any;
builtUpArea:string;
carpetArea:string;
superArea:string;
constructionAge:string;
transactionType:string;
possessionStatus:string;
finishingStatus:string;
ownerShip:string;
lat:any;
long:any;
map:any;
@ViewChild('map',{read: ElementRef, static: false}) mapRef:ElementRef
  constructor(
    private _route:ActivatedRoute,
    private _mainSvc:MainService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this._route.params.subscribe((data)=>{
     // console.log(data)
      let parseData = JSON.parse(data.id);
      this.lat = data.lat;
      this.long = data.long;
     let getId = {
        Id:parseData
      }     
   //   console.log('listing', parseData);      
      this._mainSvc.getPropertyDetails(getId).then((data)=>{        
        let parseData = JSON.parse(data.data);
        this.propertyDetails = parseData;
     //   console.log('propertyDetails', this.propertyDetails)
        this.propertyDetails.attr.forEach(element => {
      //    console.log(element); 
          if (element.AttributeName == 'Expected Price') {
            return this.expectedPrice = element.value;
          } else if (element.AttributeName == 'Floor Number') {
            return this.floorNumber = element.value;
          } else if (element.AttributeName == 'Bedrooms') {
            return this.bedRooms = element.value;
          } else if (element.AttributeName == 'Carpet Area') {
            return this.carpetArea = element.value;
          } else if (element.AttributeName == 'Built Up Area') {
            return this.builtUpArea = element.value;
          } else if (element.AttributeName == 'Super Area') {
            return this.superArea = element.value;
          }  else if (element.AttributeName == 'Age Of Construction') {
            return this.constructionAge = element.value;
          } else if (element.AttributeName == 'Transaction Type') {
            return this.transactionType = element.value;
          } else if (element.AttributeName == 'Possession Status') {
            return this.possessionStatus = element.value;
          } else if (element.AttributeName == 'Finishing Status') {
            return this.finishingStatus = element.value;
          } else if (element.AttributeName == 'Type Of Ownership') {
            return this.ownerShip = element.value;
          }     
        });
      })

    })
  }
  ionViewDidEnter(){
    this.showMap();
  }
  redirectToSendMessage(sendUserId:number){
    this.router.navigate(['/messages/send-message',{ id:sendUserId}]);

  }
  showMap(){
  let location = new google.maps.LatLng( this.lat, this.long);
  const options = {
    center: location,
    zoom: 15,
    disabledDefaultUI: true
  }
  this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }
}
