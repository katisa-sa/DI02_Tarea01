import { IArticulo } from './../interfaces/mis-interfaces';
import { Component } from '@angular/core';
import { GestionNoticiasService } from '../servicios/gestion-noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  constructor(public gestionNoticias: GestionNoticiasService) {
    
  }

  //gestionamos el cambio de estado del checkbox
  check(event: any, item: IArticulo){
    let cambio: boolean = event.detail.checked;
    if (cambio) { 
      //Si el elemento fue seleccionado 
      //Agregamos el articulo seleccionado al array de seleccionados con el metodo insertarNoticia
      this.gestionNoticias.insertarNoticia(item);
      } else {
        //Si no se borra 
        this.gestionNoticias.borrarNoticia(item);
      }
     }
     
     
  }

