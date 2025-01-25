import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyTypeListPage } from './property-type-list.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyTypeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyTypeListPageRoutingModule {}
