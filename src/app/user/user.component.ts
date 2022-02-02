import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userForm = new FormGroup({
    username: new FormControl(''),
    credentials: new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    }),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl('')
    })
      
  })


  

  constructor() {
  
  }

  
  ngOnInit(): void {
  }

  createUser(): void {
    console.log(this.userForm.value)
  }

}
