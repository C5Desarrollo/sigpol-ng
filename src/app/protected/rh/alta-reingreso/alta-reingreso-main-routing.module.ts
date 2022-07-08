import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAltaReingresoComponent } from './pages/crear-alta-reingreso/crear-alta-reingreso.component';
import { EditarAltaReingresoComponent } from './pages/editar-alta-reingreso/editar-alta-reingreso.component';
import { CancelarAltaReingresoComponent } from './pages/cancelar-alta-reingreso/cancelar-alta-reingreso.component';
import { ListadoAltaReingresoComponent } from './pages/listado-alta-reingreso/listado-alta-reingreso.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: CrearAltaReingresoComponent },
      { path: 'editar', component: EditarAltaReingresoComponent },
      { path: 'cancelar', component: CancelarAltaReingresoComponent  },
      { path: 'listado', component: ListadoAltaReingresoComponent },
      { path: '', redirectTo: '/auth/login' },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaReingresoMainRoutingModule { }
