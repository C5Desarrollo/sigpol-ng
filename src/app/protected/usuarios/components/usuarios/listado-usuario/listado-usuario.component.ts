import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {

  displayedColumns: string[] = [
    'Apaterno', 
    'Amaterno', 
    'Nombre', 
    'FCap',
    'FMod',
    'Acciones'
  ];

  constructor( 
    private usuarioService: UsuarioService,
    private router: Router
    ) { }
  
  usuarios: User[] = [];

  ngOnInit() {

    this.usuarioService.getUsers()
    .subscribe( ({datos:{users}})=> {
      console.log(users);
      this.usuarios =  users;
    });

  }

  createUser(){

    this.router.navigate(['./base/admin/usuarios/crear'])

  }

  editUser(uuid: string){

    this.router.navigate([`./base/admin/usuarios/editar/${uuid}`])

  }

}
