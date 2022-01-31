import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  public developer: Developer = new Developer(
    "Ben",
    "Kenobi",
    "33",
    "Male",
    "Hello there",
    "https://images.theconversation.com/files/346421/original/file-20200708-3995-5ulgxa.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
      [
      new Skill("React", "https://img.icons8.com/office/16/000000/react.png", "https://fr.reactjs.org/"),
      new Skill("JavaScript", "https://img.icons8.com/color/48/000000/javascript--v1.png", "https://www.javascript.com/"),
    ]
 
  );
}
