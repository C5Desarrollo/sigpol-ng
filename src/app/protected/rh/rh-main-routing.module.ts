import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'alta',
        loadChildren: ()=> import('./alta/alta-main.module').then(m => m.AltaMainModule)
      },
      {path: 'alta-reingreso',
        loadChildren: ()=> import('./alta-reingreso/alta-reingreso-main.module').then(m => m.AltaReingresoMainModule)
      },
      {path: 'baja',
        loadChildren: ()=> import('./baja/baja-main.module').then(m => m.BajaMainModule)
      },
      {path: 'seleccion-personal',
        loadChildren: ()=> import('./seleccion-personal/seleccion-personal-main.module').then(m => m.SeleccionPersonalMainModule)
      }
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
export class RhRoutingModule { }
