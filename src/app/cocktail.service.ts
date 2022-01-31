import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CocktailService {

    constructor() {}
    public getCocktail():ICocktail[] {
        return [
            {
                name: "Rose",
                price: "12€",
                picture: "https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg"
            },
            {
                name: "Spice 75",
                price: "14€",
                picture: "https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg"
            },
            {
                name: "Greyhound",
                price: "12€",
                picture: "https://www.thecocktaildb.com/images/media/drink/g5upn41513706732.jpg"
            },

        ]
    }
    
}

interface ICocktail {
    name: string;
    price: string;
    picture: string;
}