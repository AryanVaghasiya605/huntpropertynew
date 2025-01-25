import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutureValueCalculatorPage } from './future-value-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: FutureValueCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutureValueCalculatorPageRoutingModule {}
