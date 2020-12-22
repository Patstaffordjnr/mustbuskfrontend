import { Component, OnInit } from '@angular/core';
import { Menu } from './menuinterface'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Mainmenu } from './mainmenu'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']

})




export class MainmenuComponent implements OnInit {

  Menu = Mainmenu;




  constructor() { }

  ngOnInit(): void {
  }
}

console.log(Mainmenu);