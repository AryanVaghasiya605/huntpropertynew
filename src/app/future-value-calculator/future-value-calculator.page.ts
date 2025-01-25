import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faIndianRupeeSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-future-value-calculator',
  templateUrl: './future-value-calculator.page.html',
  styleUrls: ['./future-value-calculator.page.scss'],
})
export class FutureValueCalculatorPage implements OnInit {
  faPercent = faPercent;
  faIndianRupeeSign = faIndianRupeeSign;
  futurevalue;
  pattern = '^[0-9]*$';
  constructor(
    private calSvc: CalculatorService
  ) { }

  futureValueCalculator = new FormGroup({
    current_value: new FormControl('25000', [Validators.required, Validators.pattern('^[0-9]*$')]),    
    future_year: new FormControl('10', [Validators.required, Validators.pattern('^[0-9]*$')]),
    avg_appr: new FormControl('10', [Validators.required]),
  });
  ngOnInit() {
  }

  onSubmit(){
    this.calSvc.futureValueCal(this.futureValueCalculator.value).then(
      (data)=>{
        //console.log('dataRecieved', JSON.parse(data.data));
        let parseData = JSON.parse(data.data);
        this.futurevalue = parseData.Result;
       // console.log('dataRecieved',  this.futurevalue);
      }
    )
  }

  resetSubmitForm(){
    this.futureValueCalculator.reset();
  }
}
