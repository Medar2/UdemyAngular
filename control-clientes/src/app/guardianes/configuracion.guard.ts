import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { ConfiguracionServicio } from "../servicios/configuracion.service";

@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(private router: Router,
        private ConfiguracionServicio: ConfiguracionServicio){}

    canActivate(){
        return this.ConfiguracionServicio.getConfiguracion().pipe(
            map(configuracion => {
                if(configuracion.permitirRegistro){
                    return true;
                }else{
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        );
    }
        // let configuracion = this.ConfiguracionServicio.getConfiguracion();
        // if(configuracion){
        //     return true;
        // }else{
        //     this.router.navigate(['/login']);
        //     return false;
        // }
    
}