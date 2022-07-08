import { NgModule } from '@angular/core';

// Modulos
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'forgot', component: ForgotComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login' },

    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
