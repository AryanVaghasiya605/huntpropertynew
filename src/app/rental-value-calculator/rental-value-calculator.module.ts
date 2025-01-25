import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentalValueCalculatorPageRoutingModule } from './rental-value-calculator-routing.module';

import { RentalValueCalculatorPage } from './rental-value-calculator.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentalValueCalculatorPageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [RentalValueCalculatorPage]
})
export class RentalValueCalculatorPageModule {}
