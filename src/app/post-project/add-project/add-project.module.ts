import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProjectPageRoutingModule } from './add-project-routing.module';

import { AddProjectPage } from './add-project.page';
import { FloorPlanPage } from '../floor-plan/floor-plan.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProjectPageRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SwiperModule
  ],
  declarations: [AddProjectPage, FloorPlanPage]
})
export class AddProjectPageModule {}
