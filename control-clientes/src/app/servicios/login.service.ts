import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map } from "rxjs/operators";

//No olvidar registar en el app.module.ts en providers: [LoginService]
@Injectable() // Decorador para indicar que esta clase es un servicio y para poder inyectarla en otros componentes
export class LoginService {

    constructor(private authService: AngularFireAuth) { }

    login(email: string, password: string) {    
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password).then(userData => resolve(userData),
                err => reject(err));
        });
    }

    getAuth() {
        return this.authService.authState.pipe(
            map(auth => auth)
            );
    }

    logout() {
        this.authService.signOut();
    }

    
}