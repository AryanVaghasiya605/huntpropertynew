import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPropertyForPageRoutingModule } from './post-property-for-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostPropertyForPage } from './post-property-for.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPropertyForPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [PostPropertyForPage]
})
export class PostPropertyForPageModule {}
