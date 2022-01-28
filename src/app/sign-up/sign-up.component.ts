import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  user: User = new User();

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user)
  }

}
