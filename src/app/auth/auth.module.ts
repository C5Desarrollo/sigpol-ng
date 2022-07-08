import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modulos
import { AuthRoutingModule } from './auth-routing.module';

// Componentes
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
