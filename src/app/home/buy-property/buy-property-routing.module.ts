import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyPropertyPage } from './buy-property.page';

const routes: Routes = [
  {
    path: '',
    component: BuyPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPropertyPageRoutingModule {}
