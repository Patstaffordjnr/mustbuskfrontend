import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  name = new FormControl('');

  updateName() {
    this.name.setValue('Paddy');
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}


// export class NameEditorComponent {
//   name = new FormControl('');
// }