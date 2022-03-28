import { Component, OnInit } from '@angular/core';
 import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

 
  public libros : Libro [];
  

  constructor() {

    this.libros =[
      new Libro(0,0,"Adiós mundo cruel","tapa dura","Annie Coleman",25,"https://indiehoy.com/wp-content/uploads/2017/04/adios-mundo-cruel.jpg"),
      new Libro(0,0,"Yo soy Joe","tapa blanda","Joe Mandanga", 12,"https://elcomercio.pe/resizer/PFQCrIHl5hWn38jN0DQQ3rNrQK4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZBTVMOFQ4VBCFGKNMTIBADX5EE.jpg"),
      new Libro(0,0,"Ramilletes en escabeche","tapa dura","Concha Summers",8,"https://www.portomuinos.com/web2020/wp-content/uploads/2020/03/PM_WWW_FOTO_RecetaMusgoMar_VerdurasEscabeche02.jpg")
    ]
   }

   enviarTitulo(libroNuevo:HTMLInputElement)
   {
     this.libros.push(new Libro(0,0,libroNuevo.value,"","",0,""));
   }
   enviarFoto(libroNuevo1:HTMLInputElement)
   {
     this.libros[3].photo = libroNuevo1.value;
   }
   enviarPrecio(libroNuevo2:HTMLInputElement)
   {
     this.libros[3].precio =libroNuevo2.valueAsNumber;
   }
   enviarAutor(libroNuevo3:HTMLInputElement)
   {
     this.libros[3].autor =libroNuevo3.value;
   }
   enviarTipoLibro(libroNuevo4:HTMLInputElement)
   {
     this.libros[3].tipoLibro =libroNuevo4.value;
   }
   


  ngOnInit(): void {
  }

}
