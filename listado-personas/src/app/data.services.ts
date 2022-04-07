import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subscriber } from "rxjs";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient){}

    guardarPersona(personas: Persona[]) {
        this.httpClient.put('https://listadopersonas-5e885-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe ( response => {
            console.log("resultado guardar personas :" + response);
         },
                 error => console.log("Error al guardar persona" + error)  
        );
    }
}