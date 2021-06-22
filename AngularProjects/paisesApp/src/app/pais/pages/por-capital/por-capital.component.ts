import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  myError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.myError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe((paises: Pais[]) => {

        this.paises = paises;

      }, (err) => {
        this.myError = true;
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.myError = false;
  }

}
