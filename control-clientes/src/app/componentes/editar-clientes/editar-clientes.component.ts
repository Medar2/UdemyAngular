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
<<<<<<< HEAD
  ) { }
=======
    ) { 
    this.clientes =[];
    this.cliente = this.clientes[0];
}
>>>>>>> 99920c8de7702a69273a57d9aec1abf0306cb3cd


  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.clienteServio.getCliente(this.id).subscribe(cliente => {
<<<<<<< HEAD
      this.cliente = cliente;
=======
      this.cliente == cliente;


>>>>>>> 99920c8de7702a69273a57d9aec1abf0306cb3cd
    });

  }

  guardar({ value, valid }: { value: Clientes, valid: boolean }) {
    if (!valid) {
      this.flashMessages.show('Por favor llene el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      value.id = this.id;
      this.clienteServio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar() {
    if (confirm('¿Está seguro de eliminar este cliente?')) {
      this.clienteServio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
 