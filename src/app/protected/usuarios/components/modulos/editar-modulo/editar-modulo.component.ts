import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioSys } from '../../../interfaces/user.interface';
import { Modulo } from '../../../interfaces/modulos.interface';

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
  selector: 'app-editar-modulo',
  templateUrl: './editar-modulo.component.html',
  styles: [
  ]
})
export class EditarModuloComponent implements OnInit {

  roles = catalogo_roles

  modulo:Modulo={
    URL:'',
    nombre:'',
    Nombre_menu:'',

  }
  
  moduloForm: FormGroup = this.fb.group({
    'URL': [ , [Validators.required] ],
    'nombre': [ , [Validators.required]],
    'Nombre_menu': [ , [Validators.required]],
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
      .subscribe( ({ datos:modulo })=> {

        this.modulo =  modulo;

        console.log(modulo);
        

        this.moduloForm.setValue({
          'URL': modulo.URL || '',
          'nombre': modulo.nombre || '',
          'Nombre_menu': modulo.Nombre || '',
       });
        
        
        
      });


    });
  }

  ngOnDestroy() {
   // this.activatedRoute;
  }

  campoNoValido(campo:string){
    return this.moduloForm.controls[campo].errors && this.moduloForm.controls[campo].touched;
  }
  

  editModulo(){

    if(this.moduloForm.invalid){
      this.moduloForm.markAllAsTouched();
      return;
    }
    this.activatedRoute.params.subscribe(params => {

      const uuid = params['uuid'] 

      console.log(params) //log the entire params object
      console.log(params['uuid']) //log the value of id

      this.usuarioService.editUserUUID(this.moduloForm.value, uuid).subscribe(resp => {
        console.log('Respuesta', resp);
  
        if (resp.status == 200) {
          // this.dialog.open(AltaUsuarioComponent);
          console.log('status=>',resp.status); 
        }
  
        this.router.navigate(['./base/admin/modulos/listado'])
      })

      console.log(this.moduloForm.value);
    
    // limpiar Formulario
      this.moduloForm.reset();

    })

  };

  cancelarAlta(){
      this.router.navigate(['./base/admin/modulos/listado'])
    }
    
}
