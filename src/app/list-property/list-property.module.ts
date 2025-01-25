import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPropertyPageRoutingModule } from './list-property-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListPropertyPage } from './list-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPropertyPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ListPropertyPage]
})
export class ListPropertyPageModule {}
