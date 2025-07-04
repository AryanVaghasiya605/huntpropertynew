import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsPageRoutingModule } from './contact-us-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsPage } from './contact-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}
