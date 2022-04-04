import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso[] =[];
  egresos: Egreso[] =[];

  constructor(
    private ingresoServicio: IngresoServicio, 
    private egresoServicio: EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }


  getIngresoTotal(){
    let total = 0;
    this.ingresos.forEach(ingreso => {
      total += ingreso.valor;
    });
    return total;
  }

  getEgresoTotal(){
    let total = 0;
    this.egresos.forEach(egreso => {
      total += egreso.valor;
    });
    return total;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal() * 100;
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
