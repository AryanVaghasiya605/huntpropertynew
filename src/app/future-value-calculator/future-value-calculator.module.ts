import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FutureValueCalculatorPageRoutingModule } from './future-value-calculator-routing.module';
import { FutureValueCalculatorPage } from './future-value-calculator.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutureValueCalculatorPageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [FutureValueCalculatorPage]
})
export class FutureValueCalculatorPageModule {}
