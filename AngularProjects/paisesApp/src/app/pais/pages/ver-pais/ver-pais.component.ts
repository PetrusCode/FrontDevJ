import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Pais } from '../../interfaces/pais-interface';
@Component({
  selector: 'app-por-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activetedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    /*this.activetedRoute.params
      .subscribe(({ id }) => {
        console.log(id)
        this.paisService.getPaisPorCodigo(id)
          .subscribe(pais => {
            console.log(pais)
          });
      })*/

    this.activetedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);


  }

}

