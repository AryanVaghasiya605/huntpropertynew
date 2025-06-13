import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientRegisterationFormPageRoutingModule } from './client-registeration-form-routing.module';

import { ClientRegisterationFormPage } from './client-registeration-form.page';
import { CustomRangePage } from 'src/app/custom-range/custom-range.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientRegisterationFormPageRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [ClientRegisterationFormPage, CustomRangePage]
})
export class ClientRegisterationFormPageModule {}
