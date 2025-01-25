import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanEligibilityPage } from './loan-eligibility.page';

const routes: Routes = [
  {
    path: '',
    component: LoanEligibilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanEligibilityPageRoutingModule {}
