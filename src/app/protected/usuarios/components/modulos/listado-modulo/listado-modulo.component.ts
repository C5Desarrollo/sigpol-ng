import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';
import { ModulosService } from '../../../services/modulos.service';
import { Modulo } from '../../../interfaces/modulos.interface';


@Component({
  selector: 'app-listado-modulo',
  templateUrl: './listado-modulo.component.html',
  styleUrls: ['./listado-modulo.component.css']
})
export class ListadoModuloComponent implements OnInit {


  displayedColumns: string[] = [ 
    'Nombre',
    'Menu',
    'FCap',
    'FMod',
    'Acciones'
  ];

  constructor( 
    private moduloService: ModulosService,
    private router: Router
    ) { }
  
  modulos: Modulo[] = [];

  ngOnInit() {

    this.moduloService.getModules()
    .subscribe( ({datos:{modulo}})=> {
      console.log(modulo);
      this.modulos =  modulo;
    });

  }

  createUser(){

    this.router.navigate(['./base/admin/modulos/crear'])

  }

  editModel(uuid: string){

    this.router.navigate([`./base/admin/modulos/editar/${uuid}`])

  }

  cancelModel(){

    this.router.navigate([`./base/admin/modulos/listado`])

  }

}
