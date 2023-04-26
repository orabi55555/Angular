import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styles: []
})
export class UserTableComponent {

  // ngOnChanges(changes: SimpleChanges): void {

  //   if(this.studentFromParent){
  //     this.studentsFromParent.push(this.studentFromParent);//[undefined]
  //   }

  // }


  studentsFromParent:{name:string, age:number,email:string}[] = [
    { name: "orabi", age: 24, email: "orabi@gmail.com" },
    { name: "ahmed", age: 25, email: "ahmed@gmail.com" },
    { name: "hesham", age: 27, email: "hesham@gmail.com" },
    { name: "mostafa", age: 24, email: "mostafa@gmail.com" },
  ]

}
