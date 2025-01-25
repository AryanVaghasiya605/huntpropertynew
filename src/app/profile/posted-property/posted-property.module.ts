import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostedPropertyPageRoutingModule } from './posted-property-routing.module';

import { PostedPropertyPage } from './posted-property.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostedPropertyPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [PostedPropertyPage]
})
export class PostedPropertyPageModule {}
