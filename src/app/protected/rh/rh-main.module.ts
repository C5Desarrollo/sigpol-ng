import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhRoutingModule } from './rh-main-routing.module';
import { RhMainPageComponent } from './rh-main-page.component';


@NgModule({
  declarations: [
    RhMainPageComponent
  ],
  imports: [
    CommonModule,
    RhRoutingModule
  ]
})
export class RhModule { }
