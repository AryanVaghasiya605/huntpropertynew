import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyTypeListPageRoutingModule } from './property-type-list-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PropertyTypeListPage } from './property-type-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyTypeListPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [PropertyTypeListPage]
})
export class PropertyTypeListPageModule {}
