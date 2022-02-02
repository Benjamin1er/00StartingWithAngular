import { Injectable } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    private service: HttpClient;

    constructor(param_service: HttpClient) {
        this.service = param_service;
    }
    public getData() {
        // Création de l'observable
        this.service.get('https://jsonplaceholder.typicode.com/todos/1')
        // Abonnement à l'observable (et donc déclenchement de la requête) 
        .subscribe((data) => {
                // Réponse du serveur
                console.log(data);
        });
    }
}
