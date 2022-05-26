import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router:Router,
              private flashMessages: FlashMessagesService,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  Registro(){
    this.loginService.registrarse(this.email,this.password)
    .then(res => {
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.flashMessages.show(err.message,{
        cssClass: 'alert-danger',
        timeout: 4000
      });
    });
  }

}
