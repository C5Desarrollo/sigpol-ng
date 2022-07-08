import { Component } from '@angular/core';
import { UsuarioSys } from '../../../interfaces/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

const catalogo_roles = [
  {
    id:'admin',
    desc:'Administrador'
  },
  {
    id:'reader',
    desc:'Lectura'
  }
]
@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styles: [
  ]
})
export class AltaUsuarioComponent {

  roles = catalogo_roles

  usuario:UsuarioSys={
    apellidoPaterno:"",
    apellidoMaterno:"",
    nombres:"",
    usuario:"",
    password:""
  }
  
  altaForm: FormGroup = this.fb.group({
    'apaterno': [ , [Validators.required] ],
    'amaterno': [ , [Validators.required]],
    'nombre': [ , [Validators.required]],
    'role': [ , [Validators.required]],
    'username': [ , [Validators.required, Validators.minLength(6)]],
    'password': [ , [Validators.required, Validators.minLength(6)] ],

  })
  
  constructor(private fb: FormBuilder, private usuarioService : UsuarioService, private router : Router) { }

  campoNoValido(campo:string){
    return this.altaForm.controls[campo].errors && this.altaForm.controls[campo].touched;
  }
  

  guardarAlta(){

    if(this.altaForm.invalid){
      this.altaForm.markAllAsTouched();
      return;
    }
  
    this.usuarioService.addUser(this.altaForm.value).subscribe(resp => {
      console.log('Respuesta', resp);

      if (resp.status == 200) {
        // this.dialog.open(AltaUsuarioComponent);
        console.log('status=>',resp.status);
        
      }

      this.router.navigate(['./base/admin/usuarios/listado'])
      
    })

    console.log(this.altaForm.value);
    
    // limpiar Formulario
    this.altaForm.reset();

    };

  cancelarAlta(){
      this.router.navigate(['./base/admin/usuarios/listado'])
    }
    
  }

