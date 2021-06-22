import { Component } from '@angular/core';
import { GifsService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']

})
export class ResultadosComponent {

  constructor(private gifService: GifsService) { }


  get resultadosService() {
    return this.gifService.resultado;
  }

}
