import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  constructor() { }

  flourQuantity: number | undefined;
  saltQuantity: number | undefined;
  sugarQuantity: number | undefined;
  eggQuantity: number | undefined;
  numberOfCookies: number | undefined;
  
  cook = false;
  ngOnInit(): void {
  }
  startCooking() {
    this.cook = true;
  }

}
