import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostProjectPageRoutingModule } from './post-project-routing.module';

import { PostProjectPage } from './post-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostProjectPageRoutingModule
  ],
  declarations: [PostProjectPage]
})
export class PostProjectPageModule {}
