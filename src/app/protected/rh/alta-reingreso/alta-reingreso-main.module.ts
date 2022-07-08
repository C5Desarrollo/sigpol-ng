import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas RH - Alta Reingreso
import { AltaReingresoMainRoutingModule } from './alta-reingreso-main-routing.module';

// Pagina Principal RH - Alta Reingreso
import { AltaReingresoMainPageComponent } from './alta-reingreso-main.component';



@NgModule({
  declarations: [
    AltaReingresoMainPageComponent,
  ],
  imports: [
    CommonModule,
    AltaReingresoMainRoutingModule,
  ]
})
export class AltaReingresoMainModule { }
