import { Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


})
export class LoginComponent {
  // loginComponent = new FormControl('');
  profileForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {

    console.log(this.profileForm.controls['email'].value);
  }


}

// @Component({
//   selector: 'app-reactive-favorite-color',
//   template: `
//     Favorite Color: <input type="text" [formControl]="favoriteColorControl">
//   `
// })
// export class FavoriteColorComponent {
//   favoriteColorControl = new FormControl('');
// }