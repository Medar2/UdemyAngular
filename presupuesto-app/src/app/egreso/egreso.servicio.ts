import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos: Egreso[] = [
        new Egreso("Renta de un Departamento", 900),
        new Egreso("Ropa", 200)
    ];

    eliminarRegistro(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1); //elimina el elemento del array, el primer parametro es el indice, el segundo es el numero de elementos a eliminar
    }


}