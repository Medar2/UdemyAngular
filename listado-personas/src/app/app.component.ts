import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyCQ69N0j78uc60o5e-n2KL_XAiF_QLo42E",
    authDomain: "listado-personas.firebaseapp.com",
   })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }

}
