import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Sistema Usuarios Components
import { AltaUsuarioComponent } from './components/usuarios/alta-usuario/alta-usuario.component';

// Main Page Sistema De Usuarios
import { UsuariosMainPageComponent } from './usuarios-main-page.component';
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';
import { AltaModuloComponent } from './components/modulos/alta-modulo/alta-modulo.component';


import { ModulosPageComponent } from './pages/modulos-page/modulos-page.component';
import { EditarUsuarioComponent } from './components/usuarios/editar-usuario/editar-usuario.component';
import { ListadoUsuarioComponent } from './components/usuarios/listado-usuario/listado-usuario.component';
import { EditarModuloComponent } from './components/modulos/editar-modulo/editar-modulo.component';
import { ListadoModuloComponent } from './components/modulos/listado-modulo/listado-modulo.component';


const routes: Routes = [
  {
    path: 'usuarios',
    children: [
      { path: 'crear', component: AltaUsuarioComponent },
      { path: 'editar/:uuid', component: EditarUsuarioComponent },
      { path: 'listado', component: ListadoUsuarioComponent },
      { path: 'sistema-usuarios', component: UsuariosPageComponent },
      { path: '', redirectTo: '/auth/login' },
      { path: '**', redirectTo: 'login' },
    ]
  },
  {
    path: 'modulos',
    children: [
      { path: 'crear', component: AltaModuloComponent },
      { path: 'editar/:uuid', component: EditarModuloComponent },
      { path: 'listado', component: ListadoModuloComponent },
      { path: 'modulos-sistema-usuarios', component: ModulosPageComponent },
      { path: '', redirectTo: '/auth/login' },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosMainRoutingModule { }
