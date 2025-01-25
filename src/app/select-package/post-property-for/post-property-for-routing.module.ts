import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPropertyForPage } from './post-property-for.page';

const routes: Routes = [
  {
    path: '',
    component: PostPropertyForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPropertyForPageRoutingModule {}
