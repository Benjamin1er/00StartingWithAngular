import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zip = new FormControl('');
  city = new FormControl('');

  public submitted = false;
  
  public user = (
    {
      username: '',
      email: '',
      password: '',
      address: {
        street: '',
        zip: '',
        city: ''
      }
    })

  constructor() { }

  
  ngOnInit(): void {
  }
  createUser(): void {
    this.user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      address: {
        street: this.street.value,
        zip: this.zip.value,
        city: this.city.value
      }
    }
    this.submitted = true;
    console.log(this.user);
  }

}
