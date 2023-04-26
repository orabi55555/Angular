import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent {
  isRegistred: boolean = false;
  @Output() myEvent = new EventEmitter();
  validationForm= new FormGroup({
    name:new FormControl(null,[Validators.minLength(3)]),
    age:new FormControl(null,[Validators.min(20),Validators.max(40)]),
    email: new FormControl(null, [Validators.email])
  })

  Add(name:any,age:any,email:any){
    let newStudent = {name:name, age:age,email:email};
name:'';
age:'';
     this.myEvent.emit(newStudent);
  }
  get isAgeValid() {
    return this.validationForm.controls["age"].valid;
  }
  get isNameValid() {
    return this.validationForm.controls["name"].valid;
  }
  get isEmailValid() {
    return this.validationForm.controls["email"].valid;
  }
  add(){
    if(this.validationForm.valid){
      this.isRegistred=true;
    }

  }
}
