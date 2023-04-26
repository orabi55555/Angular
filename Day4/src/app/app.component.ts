import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day4';
  oneStudent :any;
  getData(data:any){
    this.oneStudent=data;
  }
}
