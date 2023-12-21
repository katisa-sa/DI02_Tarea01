import { Component, Input } from '@angular/core';
import { GestionNoticiasService } from '../servicios/gestion-noticias.service';
import { IArticulo } from '../interfaces/mis-interfaces';
import { AlertController, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public gestionNoticias: GestionNoticiasService, private alertController:AlertController) {
    
  }
  // creamos una función asincrona que espera la confirmación de los botones de la alerta
  async presentAlert(noticia: IArticulo) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Borrar noticia',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Borrar',
          handler: () => {
            // Implementa el metodo para borrar la noticia si se pulsa el boton borrar
            this.gestionNoticias.borrarNoticia(noticia);
          }
        }
      ]
    });
    await alert.present();
  }
}