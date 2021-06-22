import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsRespond } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private api_key: string = 'uKf0EGrTAn7jcDskRkWW8y4t4Jxxr5x4';
  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];



  public resultado: Gif[] = [];



  get historial() {

    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {

      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);




      localStorage.setItem("historial", JSON.stringify(this._historial));
    } else if (this._historial == this._historial.splice(0, 11)) {
      localStorage.deleteItem("historial");
    }


    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', query);

    //Peticion http usando modulo http
    this.http.get<SearchGifsRespond>(`${this._servicioUrl}/search`, { params })
      .subscribe((respuesta) => {
        //console.log(respuesta.data);
        this.resultado = respuesta.data;

        localStorage.setItem("resultado", JSON.stringify(this.resultado));

      });

    /*Peticion Http 0 llamada usando promesas
    fetch('api.giphy.com/v1/gif.s/search?api_key=uKf0EGrTAn7jcDskRkWW8y4t4Jxxr5x4&q=dragon ball z').
      then(res => {
        res.json().then(data => {
          console.log(data);
        })
      });*/
  }

}
