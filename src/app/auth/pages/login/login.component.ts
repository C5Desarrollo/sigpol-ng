import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    usuario:['', [Validators.required] ],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService : AuthService,
              ) { }

  login(){

    const {usuario, password} = this.loginForm.value;

    this.authService.login( usuario, password )
    .subscribe(resp => {
      
      if (resp.token){

          location.href = '/base/rh/alta/listado';
          localStorage.setItem('token',resp.token)
      }
      
    });
    
  }


}
