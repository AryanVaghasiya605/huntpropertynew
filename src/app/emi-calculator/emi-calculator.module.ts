import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmiCalculatorPageRoutingModule } from './emi-calculator-routing.module';

import { EmiCalculatorPage } from './emi-calculator.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { SharedPageModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorService } from '../services/calculator.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmiCalculatorPageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  declarations: [EmiCalculatorPage],  
  providers: [CalculatorService]
})
export class EmiCalculatorPageModule {}
