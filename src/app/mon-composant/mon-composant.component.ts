import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.scss']
})
export class MonComposantComponent implements OnInit {

  name = "Bob";

  imageSrc = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit(): void {
  }

  direBonjour() {
    console.log("Bonjour")
  }

}
