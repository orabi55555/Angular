import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent {
  ID=0;
  constructor(myRoute:ActivatedRoute){
    this.ID = myRoute.snapshot.params["id"];
  }
}
