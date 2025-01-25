import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanEligibilityPageRoutingModule } from './loan-eligibility-routing.module';

import { LoanEligibilityPage } from './loan-eligibility.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StrictNumberOnlyDirective } from '../directives/IntegerInput.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanEligibilityPageRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [LoanEligibilityPage, StrictNumberOnlyDirective]
})
export class LoanEligibilityPageModule {}
