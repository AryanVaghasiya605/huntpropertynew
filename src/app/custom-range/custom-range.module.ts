import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomRangePageRoutingModule } from './custom-range-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { CustomRangePage } from './custom-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomRangePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: []
})
export class CustomRangePageModule {}
