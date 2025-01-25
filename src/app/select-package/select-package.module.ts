import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SelectPackagePageRoutingModule } from './select-package-routing.module';
import { SelectPackagePage } from './select-package.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPackagePageRoutingModule,
    FontAwesomeModule
    
  ],
  declarations: [SelectPackagePage]
})
export class SelectPackagePageModule {}
