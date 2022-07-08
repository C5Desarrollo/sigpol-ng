import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhMainPageComponent } from './rh/rh-main-page.component';
import { UsuariosMainPageComponent } from './usuarios/usuarios-main-page.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'rh', 
        component:RhMainPageComponent,
        loadChildren: ()=> import('./rh/rh-main.module').then(m => m.RhModule)
      },
      {
        path: 'admin', 
        component:UsuariosMainPageComponent,
        loadChildren: ()=> import('./usuarios/usuarios-main.module').then(m => m.UsuariosMainModule)
      },
    ] 
  },
  {
    path: '**', redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
