import { Injectable } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class CocktailService {

    private service: HttpClient;

    constructor(param_service: HttpClient) {
        this.service = param_service;
    }
    public getCocktail(): Observable<ICocktail[]> {
        const obs1:Observable<any> = this.service.get("../assets/cocktails.json");
        const treatment = (param_data:any) => {
            return param_data as ICocktail[];
        };
        return obs1.pipe( map( treatment) );
    }
    
}
export interface ICocktail {
    name: string;
    price: string;
    picture: string;
}