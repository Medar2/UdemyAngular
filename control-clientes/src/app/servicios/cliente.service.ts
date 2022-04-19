
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Clientes } from '../modelo/cliente.model';

@Injectable()
export class ClienteServicio {
    clienteColeccion: AngularFirestoreCollection<Clientes>;
    // clienteDoc: AngularFirestoreDocument<Clientes>;
     clientes: Observable<Clientes[]>;
    // cliente: Observable<Clientes>;

    constructor(private db: AngularFirestore){
        this.clienteColeccion = db.collection('clientes',ref => ref.orderBy('nombre', 'asc'));
        this.clientes = new Observable;
    }

    getClientes(): Observable<Clientes[]>{
        //this.clientes 
        this.clientes = this.clienteColeccion.snapshotChanges().pipe(
            map( cambios => {
                return cambios.map( accion => {
                    const datos =accion.payload.doc.data() as Clientes;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
         return this.clientes;
    }

    agregarCliente(cliente:Clientes){
        this.clienteColeccion.add(cliente);
    }
    
}