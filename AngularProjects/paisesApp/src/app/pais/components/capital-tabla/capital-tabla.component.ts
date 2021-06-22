import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styles: [
  ]
})
export class CapitalTablaComponent implements OnInit {


  @Input() paises: Pais[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
