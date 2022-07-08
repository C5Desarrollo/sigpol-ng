import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioSys } from '../../../interfaces/user.interface';


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
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styles: [
  ]
})
export class EditarUsuarioComponent implements OnInit {
  roles = catalogo_roles

  usuario:UsuarioSys={
    apellidoPaterno:"",
    apellidoMaterno:"",
    nombres:"",
    usuario:"",
    password:""
  }
  
  editForm: FormGroup = this.fb.group({
    'apaterno': [ , [Validators.required] ],
    'amaterno': [ , [Validators.required]],
    'nombre': [ , [Validators.required]],
    'role': [ , [Validators.required]],
    'username': [ , [Validators.required, Validators.minLength(6)]],
    'password': [ , [Validators.required, Validators.minLength(6)] ],

  })
  
  constructor(
    private fb: FormBuilder,
    private usuarioService : UsuarioService, 
    private router : Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
      const uuid = params['uuid'] 

      console.log(params) //log the entire params object
      console.log(params['uuid']) //log the value of id

      this.usuarioService.getUserUUID(uuid)
      .subscribe( ({ datos:user })=> {

        this.usuario =  user;

        console.log(user);
        

        this.editForm.setValue({
          'apaterno': user.Apaterno || '',
          'amaterno': user.Amaterno || '',
          'nombre': user.Nombre || '',
          'role': user.Role || '',
          'username': user.username || '',
          'password': user.Password || ''
       });
        
        
        
      });


    });
  }

  ngOnDestroy() {
   // this.activatedRoute;
  }

  campoNoValido(campo:string){
    return this.editForm.controls[campo].errors && this.editForm.controls[campo].touched;
  }
  

  editUser(){

    if(this.editForm.invalid){
      this.editForm.markAllAsTouched();
      return;
    }
    this.activatedRoute.params.subscribe(params => {

      const uuid = params['uuid'] 

      console.log(params) //log the entire params object
      console.log(params['uuid']) //log the value of id

      this.usuarioService.editUserUUID(this.editForm.value, uuid).subscribe(resp => {
        console.log('Respuesta', resp);
  
        if (resp.status == 200) {
          // this.dialog.open(AltaUsuarioComponent);
          console.log('status=>',resp.status); 
        }
  
        this.router.navigate(['./base/admin/usuarios/sistema-usuarios'])
      })

      console.log(this.editForm.value);
    
    // limpiar Formulario
      this.editForm.reset();

    })

  };

  cancelarAlta(){
      this.router.navigate(['./base/admin/usuarios/sistema-usuarios'])
    }
    

}
