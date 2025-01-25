import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';


const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },   {
    path: 'package-list',
    loadChildren: () => import('./package-list/package-list.module').then( m => m.PackageListPageModule),
    
  },
  

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
