export interface User {
    uuid: string,
    Apaterno: string,
    Amaterno: string,
    Nombre: string,
    FCap: string,
    FMod: string
  }
  
  export interface UsuarioSys{
    apellidoPaterno:string;
    apellidoMaterno:string;
    nombres:string;
    usuario:string;
    password:string;
    fotoUrl?:string;
  }