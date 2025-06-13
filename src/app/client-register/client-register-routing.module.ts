import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientRegisterPage } from './client-register.page';

const routes: Routes = [
  {
    path: '',
    component: ClientRegisterPage
  },
  {
    path: 'client-registeration-form',
    loadChildren: () => import('./client-registeration-form/client-registeration-form.module').then( m => m.ClientRegisterationFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRegisterPageRoutingModule {}
