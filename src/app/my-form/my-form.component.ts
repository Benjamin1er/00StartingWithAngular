import { Component, OnInit } from '@angular/core';
import { Order } from './Order';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
  model: Order = new Order();

  constructor() { }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }
}