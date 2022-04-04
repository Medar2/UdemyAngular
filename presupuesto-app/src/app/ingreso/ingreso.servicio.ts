import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 4000),
        new Ingreso("Venta de coche", 500)
    ];

    eliminarRegistro(ingreso: Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1); //elimina el elemento del array, el primer parametro es el indice, el segundo es el numero de elementos a eliminar
    }
}