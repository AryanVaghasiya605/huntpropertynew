import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostedPropertyDetailsPageRoutingModule } from './posted-property-details-routing.module';
import { PostedPropertyDetailsPage } from './posted-property-details.page';
import { AddButtonPage } from 'src/app/add-button/add-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostedPropertyDetailsPageRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  declarations: [PostedPropertyDetailsPage,
     AddButtonPage
  ]
})
export class PostedPropertyDetailsPageModule {}
