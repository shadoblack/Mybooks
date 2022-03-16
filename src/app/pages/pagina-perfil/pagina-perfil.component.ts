import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.css']
})
export class PaginaPerfilComponent implements OnInit {

  public usuario1: Usuario;

  constructor() {
    
    this.usuario1 = new Usuario(1,"Jhon","Mandanga","joe@mandanga.com","www.joeelmandanga.com","contraseña")

   }

   public mostrarNombre():string
   {
     return this.usuario1.mostrarNombre();
   }

   enviarNombre(datosModificados:HTMLInputElement)
   {
     console.log(this.usuario1.nombre);
     this.usuario1.nombre = datosModificados.value;
     console.log(this.usuario1.nombre);
   }

   enviarApellidos(datosModificados:HTMLInputElement)
   {
     console.log(this.usuario1.apellidos);
     this.usuario1.apellidos = datosModificados.value;
     console.log(this.usuario1.apellidos);
   }

   enviarCorreo(datosModificados:HTMLInputElement)
   {
     console.log(this.usuario1.correo);
     this.usuario1.correo = datosModificados.value;
     console.log(this.usuario1.correo);
   }

   enviarUrl(datosModificados:HTMLInputElement)
   {
     console.log(this.usuario1.url);
     this.usuario1.url = datosModificados.value;
     console.log(this.usuario1.url);
   }

  ngOnInit(): void {
  }

}
