import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// RH - Baja Pages
import { CrearBajaComponent } from './pages/crear-baja/crear-baja.component';
import { EditarBajaComponent } from './pages/editar-baja/editar-baja.component';
import { CancelarBajaComponent } from './pages/cancelar-baja/cancelar-baja.component';
import { ListadoBajaComponent } from './pages/listado-baja/listado-baja.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: CrearBajaComponent },
      { path: 'editar', component: EditarBajaComponent },
      { path: 'cancelar', component: CancelarBajaComponent },
      { path: 'listado', component: ListadoBajaComponent },
      { path: '', redirectTo: '/auth/login' },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BajaMainRoutingModule { }
