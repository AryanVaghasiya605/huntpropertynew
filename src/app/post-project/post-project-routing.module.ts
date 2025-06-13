import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostProjectPage } from './post-project.page';

const routes: Routes = [
  {
    path: '',
    component: PostProjectPage
  },
  {
    path: 'add-project',
    loadChildren: () => import('./add-project/add-project.module').then( m => m.AddProjectPageModule)
  },
  {
    path: 'floor-plan',
    loadChildren: () => import('./floor-plan/floor-plan.module').then( m => m.FloorPlanPageModule)
  },
  {
    path: 'project-details',
    loadChildren: () => import('./project-details/project-details.module').then( m => m.ProjectDetailsPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostProjectPageRoutingModule {}
