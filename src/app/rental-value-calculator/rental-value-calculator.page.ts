import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faIndianRupeeSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import { CalculatorService } from '../services/calculator.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-rental-value-calculator',
  templateUrl: './rental-value-calculator.page.html',
  styleUrls: ['./rental-value-calculator.page.scss'],
})
export class RentalValueCalculatorPage implements OnInit {
  faPercent = faPercent;
  faIndianRupeeSign = faIndianRupeeSign;
  pattern = '^[0-9]*$';
  public calculatedRental;
  constructor(
    private calSvc: CalculatorService,
    private _mainSVC:MainService
  ) { }

  rentalValueCalculator = new FormGroup({
    propertyvalue: new FormControl('25000', [Validators.required, Validators.pattern('^[0-9]*$')]),    
    year: new FormControl('10', [Validators.required, Validators.pattern('^[0-9]*$')]),
    rentrate: new FormControl('10', [Validators.required]),
  });
  ngOnInit() {
  }
  getAssociateList(){
    //console.log('data');
    this._mainSVC.getAssociate().then(
      (data)=>{
    //    console.log('data', data);
      }
    )
  }
  onSubmit(){
    this.getAssociateList();
    this.calSvc.rentalValueCal(this.rentalValueCalculator.value).then(
      (data)=>{
   //     console.log('dataRecieved', JSON.parse(data.data));
        let parseData = JSON.parse(data.data);
        this.calculatedRental = parseData.Result;
    //    console.log('dataRecieved',  this.calculatedRental);
      }
    )
  }

  resetSubmitForm(){
    this.rentalValueCalculator.reset();
  }
}
