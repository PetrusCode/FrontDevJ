import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dragonballZ.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {



  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  constructor(private dbzSrvice: DbzService) {

  }

  //@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    //this.onNewPersonaje.emit(this.nuevo);
    this.dbzSrvice.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }

}
