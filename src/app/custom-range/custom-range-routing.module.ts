import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomRangePage } from './custom-range.page';

const routes: Routes = [
  {
    path: '',
    component: CustomRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomRangePageRoutingModule {}
