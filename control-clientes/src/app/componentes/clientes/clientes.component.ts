import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { Clientes } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[];
  cliente: Clientes = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };

  constructor(private clienteServio: ClienteServicio,clienteServicio: ClienteServicio, private flashMessages: FlashMessagesService) { 
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
  agregar({value, valid}: {value: Clientes, valid: boolean}){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {  cssClass: 'alert-danger', timeout: 4000});
    }else{
      

     //this.clienteServio.agregarCliente(value);
    }
  }

}
