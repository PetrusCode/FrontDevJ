import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li
    {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  mostrarSugerencias: boolean = false;
  termino: string = " ";
  myError: boolean = false;
  paises: Pais[] = [];

  paisesSugeridos: Pais[] = [];


  constructor(private paisService: PaisService) { }




  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.myError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe((paises: Pais[]) => {

        this.paises = paises;
      }, (err) => {
        this.myError = true;
        this.paises = [];
      });

  }

  sugerencias(termino: string) {
    this.myError = false;
    this.termino = termino;

    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe((paises: Pais[]) => this.paisesSugeridos = paises.splice(0.5),
        (err) => this.paisesSugeridos = []);
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);

  }
}
