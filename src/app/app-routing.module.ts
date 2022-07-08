import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { BaseComponent } from './protected/base.component';

const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'base', 
    component:BaseComponent,
    loadChildren: ()=> import('./protected/base.module').then(m => m.BaseModule)
  },
  {
    path: '**', 
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
