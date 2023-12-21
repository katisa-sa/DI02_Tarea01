
import { Injectable } from '@angular/core';
import { IArticulo, INoticia } from '../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {
  
  private articulos: IArticulo[] = [];
  private listaNoticias: IArticulo[] = [];
  
  constructor(private leerFichero: HttpClient) { 
    this.getNoticiasFichero(); //cargamos los datos del fichero Json
  }

  getNoticiasFichero() {
    //Creamos observable para leer los datos
    let datosFichero: Observable<INoticia>;

    //inicializamos el observable
    datosFichero = this.leerFichero.get<INoticia>('/assets/datos/articulos.json');

    //identificamos cambios suscribiendonos
    datosFichero.subscribe (dat => {
      console.log(dat);
      this.articulos.push(...dat.articles);
    })
    
  }
    
  getNoticias() {
    return this.articulos; //para retornar el array de articulos completo
  }

  getListaNoticias() {
    return this.listaNoticias; //para retornar el array de articulos seleccionados o borrados
  }

  insertarNoticia(noticia: IArticulo) {
    //Copiar noticia
    let stringNoticia = JSON.stringify(noticia);
    noticia = JSON.parse(stringNoticia);
    //Buscar si la noticia está ya en el array para ello buscamos el título y lo comparamos
    this.articulos.find(noticia => {
      this.articulos = this.articulos;
    })
    this.listaNoticias.push(noticia);
  }

  borrarNoticia(noticia:IArticulo) {
    //Busca si la noticia esta en el array, si es así la borra
    //Encuentra el título y lo compara
    let titulo: string ='';
    
    this.articulos.find(not=> {
      return JSON.stringify(not) == JSON.stringify(noticia);
    })

    // Sacamos el indice si no existe dará -1 por lo que si existe lo borramos
    let index:number = this.articulos.indexOf(noticia);
    
    if (index != -1)
      this.listaNoticias.splice(index,1);
    
    let index2:number = this.listaNoticias.indexOf(noticia);
    if (index2 != -1)
    this.listaNoticias.splice(index2,1);
  }

}
