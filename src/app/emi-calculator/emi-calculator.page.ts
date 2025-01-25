import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faIndianRupeeSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.page.html',
  styleUrls: ['./emi-calculator.page.scss'],
})
export class EmiCalculatorPage implements OnInit {
  faPercent = faPercent;
  faIndianRupeeSign = faIndianRupeeSign;
  pattern = '^[0-9]*$';
  calculatedEMI;
  constructor(
    private calSvc: CalculatorService
    ) { }

  emiCalculator = new FormGroup({
    amount: new FormControl('25000', [Validators.required, Validators.pattern('^[0-9]*$')]),    
    tenure: new FormControl('10', [Validators.required, Validators.pattern('^[0-9]*$')]),
    rateofintrest: new FormControl('10', [Validators.required]),
  });
  ngOnInit() {
  }
  onSubmit(){
    this.calSvc.emiCalculator(this.emiCalculator.value).then(
      (data)=>{
       // console.log('dataRecieved', JSON.parse(data.data));
        let parseData = JSON.parse(data.data);
        this.calculatedEMI = parseData.Result;
       // console.log('dataRecieved',  this.calculatedEMI);
      }
    )
  }
  resetSubmitForm(){
    this.emiCalculator.reset();
  }
}
