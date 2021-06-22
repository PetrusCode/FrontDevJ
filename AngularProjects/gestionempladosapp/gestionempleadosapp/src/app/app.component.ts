import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from './interfaces/empleado';
import { EmpleadosService } from './service/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestionempleadosapp';
  public empleados: Empleado[];

  public editarEmpleado: Empleado;
  public borrarEmpleado: Empleado;





  constructor(private empleadosService: EmpleadosService) {

  }
  ngOnInit(): void {
    this.tomarEmpleados();
  }


  public tomarEmpleados(): void {
    this.empleadosService.recibirEmpleados().subscribe(
      (respuesta: Empleado[]) => {

        this.empleados = respuesta;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAgregarEmpleado(agregarForm: NgForm): void {
    document.getElementById('agregar-formulario-empleado').click();

    this.empleadosService.agregarEmpleados(agregarForm.value).subscribe(
      (respuesta: Empleado) => {
        console.log(respuesta);
        this.tomarEmpleados;
        agregarForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        agregarForm.reset();
      }
    );
  }

  public onActualizarEmpleado(empleado: Empleado): void {

    this.empleadosService.actualizarEmpleados(empleado).subscribe(
      (respuesta: Empleado) => {
        console.log(respuesta);
        this.tomarEmpleados();

      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public onBorrarEmpleado(empleadoId: Empleado['id']): void {

    this.empleadosService.borrarEmpleados(empleadoId).subscribe(
      (respuesta: void) => {
        console.log(respuesta);
        this.tomarEmpleados();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  public buscarEmpleados(key: string): void {
    const resultados: Empleado[] = [];

    for (const empleado of this.empleados) {
      if (empleado.nombre.toLowerCase().indexOf(key.toLowerCase()) !== -1

        || empleado.telefono.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || empleado.puestoNombre.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || empleado.email.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        resultados.push(empleado);
      }
    }

    this.empleados = resultados;

    if (resultados.length === 0 || !key) {
      this.tomarEmpleados();
    }

  }
  public onOpenModal(empleadoModal: Empleado, mode: string): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal')

    if (mode === 'agregar') {
      button.setAttribute('data-target', '#agregarEmpleadoModal')
    }
    if (mode === 'editar') {
      this.editarEmpleado = empleadoModal;
      button.setAttribute('data-target', '#actualizarEmpleadoModal')
    }
    if (mode === 'borrar') {
      this.borrarEmpleado = empleadoModal;
      button.setAttribute('data-target', '#borrarEmpleadoModal')
    }

    container.appendChild(button);
    button.click();

  }



}
