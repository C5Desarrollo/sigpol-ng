import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs';

import { AuthResponse } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl

  private sigpolUrl: string = environment.sigpolUrl

  constructor( private http: HttpClient) { }

  // Funcion Login
  login( usuario:string, password:string ){ 

    const username = usuario;

    const urlLogin = `${ this.sigpolUrl}/auth/login`;
    const body = { username, password }

    return this.http.post<AuthResponse>(urlLogin, body)
    .pipe(
      map( (resp:any)=>{
        return resp;
      })
    )
    

    
    

  }
}
