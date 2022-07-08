import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Rutas RH - Seleccion Personal
import { SeleccionPersonalMainRoutingModule } from './seleccion-personal-main-routing.module';

// Pagina Principal RH - Seleccion Personal
import { SeleccionPersonalMainPageComponent } from './seleccion-personal-main-page.component';



@NgModule({
  declarations: [
    SeleccionPersonalMainPageComponent,
  ],
  imports: [
    CommonModule,
    SeleccionPersonalMainRoutingModule
  ]
})
export class SeleccionPersonalMainModule { }
