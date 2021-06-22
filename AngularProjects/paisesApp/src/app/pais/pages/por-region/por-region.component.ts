import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
     button
     {
      margin-right: 5px;
     }
  `

  ]
})
export class PorRegionComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  termino: string = '';
  myError: boolean = false;
  paises: Pais[] = [];
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';
  getClass(region: string): string {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe
      ((paises: Pais[]) => {
        this.paises = paises;
      });
  }
  buscar(termino: string) {
    this.myError = false;
    this.termino = termino;

    this.paisService.buscarRegion(this.termino)
      .subscribe((region: Pais[]) => {
        this.paises = region;


      }, (err) => {
        this.myError = true;
        this.paises = [];
      })

  }



}
