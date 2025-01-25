import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPropertyPage } from './list-property.page';

const routes: Routes = [
  {
    path: '',
    component: ListPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPropertyPageRoutingModule {}
