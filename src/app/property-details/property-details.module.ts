import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyDetailsPageRoutingModule } from './property-details-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PropertyDetailsPage } from './property-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyDetailsPageRoutingModule,
    FontAwesomeModule
    
  ],
  declarations: [PropertyDetailsPage]
})
export class PropertyDetailsPageModule {}
