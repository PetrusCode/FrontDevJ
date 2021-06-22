import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { CapitalTablaComponent } from './components/capital-tabla/capital-tabla.component';
import { CapitalInputComponent } from './components/capital-input/capital-input.component';


@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    CapitalTablaComponent,
    CapitalInputComponent

  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    CapitalTablaComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ]
})
export class PaisModule { }
