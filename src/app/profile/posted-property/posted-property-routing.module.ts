import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostedPropertyPage } from './posted-property.page';

const routes: Routes = [
  {
    path: '',
    component: PostedPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostedPropertyPageRoutingModule {}
