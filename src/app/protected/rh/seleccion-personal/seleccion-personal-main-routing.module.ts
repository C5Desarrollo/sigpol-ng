import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// RH - Seleccion Personal Pages
import { CrearSeleccionPersonalComponent } from './pages/crear-seleccion-personal/crear-seleccion-personal.component';
import { EditarSeleccionPersonalComponent } from './pages/editar-seleccion-personal/editar-seleccion-personal.component';
import { CancelarSeleccionPersonalComponent } from './pages/cancelar-seleccion-personal/cancelar-seleccion-personal.component';
import { ListadoSeleccionPersonalComponent } from './pages/listado-seleccion-personal/listado-seleccion-personal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: CrearSeleccionPersonalComponent },
      { path: 'editar', component: EditarSeleccionPersonalComponent },
      { path: 'cancelar', component: CancelarSeleccionPersonalComponent },
      { path: 'listado', component: ListadoSeleccionPersonalComponent },
      { path: '', redirectTo: '/auth/login' },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeleccionPersonalMainRoutingModule { }
