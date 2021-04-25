import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  profileForm = this.fb.group({
    userName: [''],
    activeUsers: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });


  

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  onSubmit(){

console.log(this.profileForm.value);

  }
}
