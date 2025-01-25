import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'loan-eligibility',
    loadChildren: () => import('./loan-eligibility/loan-eligibility.module').then( m => m.LoanEligibilityPageModule)
    

  },
  {
    path: 'emi-calculator',
    loadChildren: () => import('./emi-calculator/emi-calculator.module').then( m => m.EmiCalculatorPageModule)
  },
  {
    path: 'future-value-calculator',
    loadChildren: () => import('./future-value-calculator/future-value-calculator.module').then( m => m.FutureValueCalculatorPageModule)
  },
  {
    path: 'rental-value-calculator',
    loadChildren: () => import('./rental-value-calculator/rental-value-calculator.module').then( m => m.RentalValueCalculatorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./profile/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'posted-property',
    loadChildren: () => import('./profile/posted-property/posted-property.module').then( m => m.PostedPropertyPageModule)
  },
  {
    path: 'list-property',
    loadChildren: () => import('./list-property/list-property.module').then( m => m.ListPropertyPageModule)
  },
  {
    path: 'property-details',
    loadChildren: () => import('./property-details/property-details.module').then( m => m.PropertyDetailsPageModule)
  },
  {
    path: 'select-package',
    
    loadChildren: () => import('./select-package/select-package.module').then( m => m.SelectPackagePageModule)
  },
  {
    path: 'add-button',
    loadChildren: () => import('./add-button/add-button.module').then( m => m.AddButtonPageModule)
  },  
  {
    path: 'client-register',
    loadChildren: () => import('./client-register/client-register.module').then( m => m.ClientRegisterPageModule)
  },
  {
    path: 'post-project',
    loadChildren: () => import('./post-project/post-project.module').then( m => m.PostProjectPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'custom-range',
    loadChildren: () => import('./custom-range/custom-range.module').then( m => m.CustomRangePageModule)
  },
  {
    path: 'splash',    
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  

  


 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
