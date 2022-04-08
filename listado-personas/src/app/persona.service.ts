import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = []; 

  saludar = new EventEmitter<number>();

  constructor(private loggingService:LoggingService, private dataServices: DataServices){}

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)
    if(this.personas == null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersona(this.personas);
  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona: Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }
  
  eliminarPersona(index:number){
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    //guardar arrelo de personas para regenerar el indice
    this.modificarPersonas();

  }

  modificarPersonas(){
    if(this.personas != null){
      this.dataServices.guardarPersona(this.personas);
    }
  }
  obtenerPersonas () {
    return this.dataServices.cargarPersonas();

  }

}
