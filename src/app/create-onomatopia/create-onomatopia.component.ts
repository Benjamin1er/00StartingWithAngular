import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  
  public newOnomatopia: string = 'Ha';

  @Output()
  getOnomatopia:EventEmitter<any> = new EventEmitter();

  sendOnomatopiaToParent() {
    this.getOnomatopia.emit(this.newOnomatopia)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
