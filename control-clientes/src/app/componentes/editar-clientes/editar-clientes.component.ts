import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Clientes } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

  clientes: Clientes[];
  cliente: Clientes = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };

  id!: string;

  constructor(private clienteServio: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    this.clientes =[];
}


  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.clienteServio.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente;


    });

  }


}
