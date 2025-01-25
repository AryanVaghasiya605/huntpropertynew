import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-property-type-list',
  templateUrl: './property-type-list.page.html',
  styleUrls: ['./property-type-list.page.scss'],
})
export class PropertyTypeListPage implements OnInit {
  faArrowLeft = faArrowLeft;
  radioTitle: string;
  radioItems: Array<string>;
  model = { option: 'option3' };
  commercialProperty: any;
  residentialsProp: any;
  noCommercialProperty: boolean = false;
  noResidentialsProp: boolean = false;
  propertyfor:any;

  constructor(
    private _mainSVC: MainService,
    private _router: Router,
    private _activated:ActivatedRoute
    ) {
    this.radioItems = ['Residential', 'Commercial'];
  }

  ngOnInit() {
   this.propertyfor = this._activated.snapshot.params['id'];
  }

  residentialsProperty() {
    //  var commercial = document.getElementById('commercialProp').style.display = 'block';
    this.residentialsProp = [];
    this.commercialProperty = [];
    const residentialData = {
      "propertyfor": this.propertyfor,
      "propertytype":"Residential"
  }
    this._mainSVC.getResidentialPropertyList(residentialData).then((data) => {
    //  console.log("MyData",data);
      if (data.status == 200) {
        let parseData = JSON.parse(data.data);
     //   console.log('parseData', parseData.PropertyCategory);
        this.residentialsProp = parseData.PropertyCategory;
        // var commercialDom = document.getElementById('commercialProp');
        // if(commercialDom != null && commercialDom != undefined){
        //   document.getElementById('commercialProp').style.height = 'auto';
        // }

        //   if (this.residentialsProp  != ''){
        //   this.noResidentialsProp = true;
        // }
      }
    });
  }

  commercialProp() {
    // var res = document.getElementById('residentialsProp');
    // if(res != null && res != undefined ){
    //   document.getElementById('residentialsProp').style.height = 'none';
    // }
    this.commercialProperty = [];
    this.residentialsProp = [];
    const commercialData = {
      "propertyfor":this.propertyfor,
      "propertytype":"Commercial"
  };
    this._mainSVC.getCommercialPropertyList(commercialData).then((data) => {
     // console.log(data);
      if (data.status == 200) {
        let parseData = JSON.parse(data.data);
      //  console.log('parseData111', parseData);
        this.commercialProperty = parseData.PropertyCategory;
        //  var residentialsProp = document.getElementById('#residentialsProp').style.height = 'auto';

        this.noCommercialProperty = true;
        // if(data == 200){}
      }
    });
  }

  propertyDetails(id:any, propertyfor:any) {
   // console.log("id",id,"propertyfor",propertyfor)
    this._router.navigate(['/select-package/posted-property-details', { id: id , propertyfor: propertyfor}]);
  }
}
