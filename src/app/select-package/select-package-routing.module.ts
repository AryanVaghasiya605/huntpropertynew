import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPackagePage } from './select-package.page';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SelectPackagePage,
    canActivate:[AuthGuard]
  },
  {
    path: 'post-property-for',
    loadChildren: () => import('./post-property-for/post-property-for.module').then( m => m.PostPropertyForPageModule)
  },
  {
    path: 'property-type-list',
    loadChildren: () => import('./property-type-list/property-type-list.module').then( m => m.PropertyTypeListPageModule)
  },
  {
    path: 'posted-property-details',
    loadChildren: () => import('./posted-property-details/posted-property-details.module').then( m => m.PostedPropertyDetailsPageModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPackagePageRoutingModule {}
