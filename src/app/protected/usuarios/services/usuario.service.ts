import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    
  private sigpolUrl: string = environment.sigpolUrl

  constructor( private http: HttpClient ) { }

   token: string | any = localStorage.getItem('token')

   

  // Init getUser function
  getUsers(){
    
    const url = `${this.sigpolUrl}/users`;

    const headers = {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Access-Control-Allow-Headers': 'Content-Type',
     'auth':this.token
   }
    
    return this.http.get(url, {headers} )
    .pipe(
      map( (resp:any)=>{
        return resp;
      })
    )
  } // End functin getUser

  getUserUUID(uuid: any){
    
    const url = `${this.sigpolUrl}/users/${uuid}`;
    console.log({'service usuario url': url});

    const headers = {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Access-Control-Allow-Headers': 'Content-Type',
     'auth':this.token
   }
    
    return this.http.get(url, {headers} )
    .pipe(
      map( (resp:any)=>{
        return resp;
        console.log(resp);
        
      })
    )
  } // End functin getUser

  editUserUUID(user: User, uuid: string):Observable<any> {
    const url = `${this.sigpolUrl}/users/${uuid}`;

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'auth':this.token
    }

    const body=JSON.stringify(user);

    return this.http.patch(url,  body, {headers} )
    .pipe(
      map( (resp:any)=>{
        return resp;
      })
    )
  }


  addUser(user: User):Observable<any> {
    const url = `${this.sigpolUrl}/users`;

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'auth':this.token
    }

    const body=JSON.stringify(user);

    return this.http.post(url,  body, {headers} )
    .pipe(
      map( (resp:any)=>{
        return resp;
      })
    )
  }


}
