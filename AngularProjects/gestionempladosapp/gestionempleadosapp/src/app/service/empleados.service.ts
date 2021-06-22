import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  [x: string]: any;
  private _serverUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }


  public recibirEmpleados(): Observable<Empleado[]> {

    return this.httpClient.get<any>(`${this._serverUrl}/empleado/all`);
  }

  public agregarEmpleados(empleado: Empleado): Observable<Empleado> {

    return this.httpClient.post<Empleado>(`${this._serverUrl}/empleado/add`, empleado);
  }

  public actualizarEmpleados(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(`${this._serverUrl}/empleado/update`, empleado);
  }
  public actualizarEmpleadosById(empleadoId: Empleado['id']): Observable<void> {
    return this.httpClient.put<void>(`${this._serverUrl}/empleado/update`, empleadoId);
  }
  public borrarEmpleados(empleadoId: Empleado['id']): Observable<void> {

    return this.httpClient.delete<void>(`${this._serverUrl}/empleado/delete/${empleadoId}`);
  }
}
