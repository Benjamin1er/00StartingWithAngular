import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public onomatopeias: string[] = [];

  private httpService:HttpService;

  constructor(param_service:HttpService) {
    this.httpService = param_service
  }
  
  onReceiveNewOnomatopia($event: string) {
    this.onomatopeias.push($event);
  }
  ngOnInit(): void {
    this.httpService.getData()
  }
}
