import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  // {
  //   path: 'buy-property',
  //   loadChildren: () => import('./buy-property/buy-property.module').then( m => m.BuyPropertyPageModule)
  // },
  {
    path: 'buy-property',
    loadChildren: () => import('./buy-property/buy-property.module').then( m => m.BuyPropertyPageModule)
  },
  // {
  //   path: 'select-package',
  //   loadChildren: () => import('../select-package/select-package.module').then( m => m.SelectPackagePageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
