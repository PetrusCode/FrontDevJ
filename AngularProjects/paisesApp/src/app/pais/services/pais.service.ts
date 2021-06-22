import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population');

  }


  constructor(private http: HttpClient) {



  }
  buscarPais(termino: string): Observable<Pais[]> {

    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/capital/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }


  buscarRegion(region: string): Observable<Pais[]> {


    const url = `${this._apiUrl}/region/${region}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams })
      .pipe(
        tap(console.log)
      );
  }

  getPaisPorCodigo(id: string): Observable<Pais> {
    const url = `${this._apiUrl}/alpha/${id}`;

    return this.http.get<Pais>(url);
  }
}
