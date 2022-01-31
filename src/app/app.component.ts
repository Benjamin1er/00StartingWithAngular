import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public onomatopeias: string[] = [];
  onReceiveNewOnomatopia($event: string) {
    this.onomatopeias.push($event);
  }
}
