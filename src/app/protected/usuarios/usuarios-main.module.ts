import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';

// // Sistema de Usuarios Components
import { ListadoUsuarioComponent } from './components/usuarios/listado-usuario/listado-usuario.component';
import { AltaUsuarioComponent } from './components/usuarios/alta-usuario/alta-usuario.component';
import { EditarUsuarioComponent } from './components/usuarios/editar-usuario/editar-usuario.component';
import { AsignarModuloUsuarioComponent } from './components/usuarios/asignar-modulo-usuario/asignar-modulo-usuario.component';
// Main Page Usuarios
import { UsuariosMainPageComponent } from './usuarios-main-page.component';
// Routing Main
import { UsuariosMainRoutingModule } from './usuarios-main-routing.module';

// Modulo Usuarios
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';

// Modulos
import { ModulosPageComponent } from './pages/modulos-page/modulos-page.component';
import { AltaModuloComponent } from './components/modulos/alta-modulo/alta-modulo.component';
import { EditarModuloComponent } from './components/modulos/editar-modulo/editar-modulo.component';
import { ListadoModuloComponent } from './components/modulos/listado-modulo/listado-modulo.component';

@NgModule({
  declarations: [
        ListadoUsuarioComponent,
        AltaUsuarioComponent,
        EditarUsuarioComponent,
        UsuariosMainPageComponent,
        UsuariosPageComponent,

        AltaModuloComponent,
        EditarModuloComponent,
        ListadoModuloComponent,
        AsignarModuloUsuarioComponent,
        ModulosPageComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    
    UsuariosMainRoutingModule,
  ]
})
export class UsuariosMainModule { }
