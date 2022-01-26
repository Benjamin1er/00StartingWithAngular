import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'Faut pas respirer la compote ça fait tousser',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  public isVisible = true;

  constructor() { }

  ngOnInit(): void {
  }
  hideAge() {
    this.isVisible = !this.isVisible;
  }


}
