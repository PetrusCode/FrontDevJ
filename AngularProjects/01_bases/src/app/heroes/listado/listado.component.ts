import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Ironman', 'spiderman', 'hulk', 'Superman'];
  borrado: string = "";

  borrarHeroe(heroes: string[]) {

    const heroeBorrado = this.heroes.splice((heroes.length) - 1);
    console.log('se ha borrado correctamente...' + heroeBorrado);
    this.borrado = heroeBorrado.toString();
    //document.getElementById('hero').innerHTML = heroeBorrado.toString();
  }



  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
