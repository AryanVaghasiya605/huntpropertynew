import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalValueCalculatorPage } from './rental-value-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: RentalValueCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalValueCalculatorPageRoutingModule {}
