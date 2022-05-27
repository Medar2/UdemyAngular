import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Configuracion } from "../modelo/configuracion.model";

@Injectable()
export class ConfiguracionServicio {
    configuracionDoc: AngularFirestoreDocument<Configuracion>;
    configuracion: Observable<Configuracion>;

    //Id unico de la coleccion configuracion
    id = "1";
    //Obtiene la configuracion

    constructor(private db: AngularFirestore) { }

    getConfiguracion() {
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges();
        return this.configuracion;
    }

    //Actualiza la configuracion
    modificarConfiguracion(configuracion: Configuracion) {
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);        
    }

}