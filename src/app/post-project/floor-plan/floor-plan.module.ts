import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloorPlanPageRoutingModule } from './floor-plan-routing.module';

// import { FloorPlanPage } from './floor-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloorPlanPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class FloorPlanPageModule {}
