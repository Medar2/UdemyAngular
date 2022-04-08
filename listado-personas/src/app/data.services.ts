import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subscriber } from "rxjs";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices {
    baseUrl: string = 'https://listadopersonas-5e885-default-rtdb.firebaseio.com/datos.json';
    constructor(private httpClient: HttpClient){}

    guardarPersona(personas: Persona[]) {
        this.httpClient.put(this.baseUrl,personas)
        .subscribe ( response => {
            console.log("resultado guardar personas :" + response);
         },
                 error => console.log("Error al guardar persona" + error)  
        );
    }

    cargarPersonas (){
        return this.httpClient.get(this.baseUrl);
    }
    modificarPersona(index:number, persona: Persona){
        let url: string;
         url = this.baseUrl.replace('.json', '/' + index + '.json');
         this.httpClient.put(url, persona)
         .subscribe(
             response => console.log("resultado modificar persona :" + response),
                 error => console.log("Error al modificar persona" + error)
         );
    }
}