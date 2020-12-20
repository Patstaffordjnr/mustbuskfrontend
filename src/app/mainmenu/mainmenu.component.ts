import { Component, OnInit } from '@angular/core';
import { Menu } from './menuinterface'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';





@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']

})


export class MainmenuComponent implements OnInit {

  Menu: Menu = {
    id: '1',
    name: 'LISTITEMS'
  };



  constructor() { }

  ngOnInit(): void {
  }
}
