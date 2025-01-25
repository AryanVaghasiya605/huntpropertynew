import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostedPropertyDetailsPage } from './posted-property-details.page';

const routes: Routes = [
  {
    path: '',
    component: PostedPropertyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostedPropertyDetailsPageRoutingModule {}
