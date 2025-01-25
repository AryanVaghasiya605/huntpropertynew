import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientRegisterationFormPage } from './client-registeration-form.page';

const routes: Routes = [
  {
    path: '',
    component: ClientRegisterationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRegisterationFormPageRoutingModule {}
