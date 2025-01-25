import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPropertyPageRoutingModule } from './buy-property-routing.module';

import { BuyPropertyPage } from './buy-property.page';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from 'src/app/pipe/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPropertyPageRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [BuyPropertyPage, FilterPipe]
})
export class BuyPropertyPageModule {}
