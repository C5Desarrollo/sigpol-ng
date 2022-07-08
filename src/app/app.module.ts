import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Rutas Principales
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
