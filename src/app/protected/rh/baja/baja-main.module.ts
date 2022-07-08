import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Rutas RH - Baja
import { BajaMainRoutingModule } from './baja-main-routing.module';

// Pagina Principal RH - Baja
import { BajaMainPageComponent } from './baja-main-page.component';




@NgModule({
  declarations: [
    BajaMainPageComponent,
  ],
  imports: [
    CommonModule,
    BajaMainRoutingModule
  ]
})
export class BajaMainModule { }
