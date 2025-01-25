import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faIndianRupeeSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import { CalculatorService } from '../services/calculator.service';
@Component({
  selector: 'app-loan-eligibility',
  templateUrl: './loan-eligibility.page.html',
  styleUrls: ['./loan-eligibility.page.scss'],
})
export class LoanEligibilityPage implements OnInit {
  faPercent = faPercent;
  faIndianRupeeSign = faIndianRupeeSign;
  pattern = '^[0-9]*$';
  public loanEle; 
  LoanAmount 
  monthlyEMI
  maxLoan
  EligibleEmi
  constructor(
    private calSvc: CalculatorService
  ) { }

  loanElegibility = new FormGroup({
    LoanAmount: new FormControl('500000', [Validators.required, Validators.pattern('^[0-9]*$')]),
    NetIncome: new FormControl('30000', [Validators.required, Validators.pattern('^[0-9]*$')]),
    ExistingEMI: new FormControl('0', [Validators.required, Validators.pattern('^[0-9]*$')]),
    LoanTenure: new FormControl('10', [Validators.required, Validators.pattern('^[0-9]*$')]),
    InterestRate: new FormControl('10', [Validators.required]),
  });

  ngOnInit() {

  }
  onSubmit() {

    // TODO: Use EventEmitter with form value
    console.log(this.loanElegibility.value);
    this.calSvc.LoanCalculator(this.loanElegibility.value)
    .then((data)=>{
      
      let parseData = JSON.parse(data.data);
      console.log('data', parseData);
      this.loanEle = parseData;
      if(parseData.status === true){
        this.LoanAmount = parseData.LoanAmount;
        this.monthlyEMI = parseData.EMILoan;
        this.EligibleEmi = parseData.EligibleEmi;
        this.maxLoan = parseData.EligibleLoan;        
      }
      


    })

  }
  resetSubmitForm(){
    this.loanElegibility.reset();
  }
 
 

}
