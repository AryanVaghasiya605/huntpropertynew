import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddButtonPageRoutingModule } from './add-button-routing.module';

// import { AddButtonPage } from './add-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddButtonPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class AddButtonPageModule {}
