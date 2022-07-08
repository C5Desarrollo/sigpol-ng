import { Component } from '@angular/core';
import { UsuarioSys } from '../../../interfaces/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { ModulosService } from '../../../services/modulos.service';
import { Modulo } from '../../../interfaces/modulos.interface';


@Component({
  selector: 'app-alta-modulo',
  templateUrl: './alta-modulo.component.html',
  styles: [
  ]
})
export class AltaModuloComponent {

  modulo:Modulo={
    URL:"",
    nombre:"",
    Nombre_menu:"",
  }
  
  moduloForm: FormGroup = this.fb.group({
    'URL': [ , [Validators.required] ],
    'nombre': [ , [Validators.required]],
    'Nombre_menu': [ , [Validators.required]],
  })
  
  constructor(private fb: FormBuilder, private moduloService : ModulosService, private router : Router) { }

  campoNoValido(campo:string){
    return this.moduloForm.controls[campo].errors && this.moduloForm.controls[campo].touched;
  }
  

  guardarAlta(){

    if(this.moduloForm.invalid){
      this.moduloForm.markAllAsTouched();
      return;
    }
  
    this.moduloService.addModule(this.moduloForm.value).subscribe(resp => {
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

    };

  cancelarAlta(){
      this.router.navigate(['./base/admin/modulos/listado'])
    }
    
}
