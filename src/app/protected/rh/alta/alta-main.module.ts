import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas RH - Alta
import { AltaMainRoutingModule } from './alta-main-routing.module';

// Pagina Principal RH - Alta
import { AltaMainPageComponent } from './alta-main-page.component';


@NgModule({
  declarations: [
    AltaMainPageComponent,
  ],
  imports: [
    CommonModule,
    AltaMainRoutingModule,
  ]
})
export class AltaMainModule { }
