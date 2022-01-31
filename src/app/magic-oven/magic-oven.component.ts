import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.scss']
})
export class MagicOvenComponent implements OnInit {

  @Input()
  numberOfCookies: number | undefined

  @Input()
  flour: number | undefined

  @Input()
  salt: number | undefined

  @Input()
  sugar: number | undefined

  @Input()
  egg: number | undefined

  @Input()
  startCooking: boolean | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
