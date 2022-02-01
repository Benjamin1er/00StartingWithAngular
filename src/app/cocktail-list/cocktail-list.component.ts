import { Component, OnInit } from '@angular/core';
import { CocktailService, ICocktail } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails:ICocktail[] = [];
  private service:CocktailService;
  public test = () => console.log(this.cocktails);
  constructor(param_service:CocktailService) { 
    this.service = param_service
  }

  public ngOnInit(): void {
    this.service.getCocktail().subscribe(
      (param:ICocktail[]) => {
        this.cocktails = param;
      }
    )
  }
}
