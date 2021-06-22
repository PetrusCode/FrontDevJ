import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 1000000
        },
        {
            nombre: 'Vegeta',
            poder: 500000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log("Servicio inicializado");
    }

    agregarPersonaje(elemento: Personaje) {
        this._personajes.push(elemento);
    }
}