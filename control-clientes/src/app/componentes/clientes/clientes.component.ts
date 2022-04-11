import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[];

  constructor(private clienteServio: ClienteServicio) { 
    this.clientes =[];
  }
  
  
  ngOnInit(): void {
    this.clienteServio.getClientes().subscribe(cliente => {
      this.clientes = cliente
    })
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    
    if(this.clientes){
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }

}
