import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BaseComponent,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
  ]
})
export class BaseModule { }
