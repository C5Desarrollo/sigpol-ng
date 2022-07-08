import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CrearAltaComponent } from './pages/crear-alta/crear-alta.component';
import { EditarAltaComponent } from './pages/editar-alta/editar-alta.component';
import { CancelarAltaComponent } from './pages/cancelar-alta/cancelar-alta.component';
import { ListadoAltaComponent } from './pages/listado-alta/listado-alta.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: CrearAltaComponent },
      { path: 'editar', component: EditarAltaComponent },
      { path: 'cancelar', component: CancelarAltaComponent },
      { path: 'listado', component: ListadoAltaComponent },
      { path: '', redirectTo: '/auth/login' },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaMainRoutingModule { }
