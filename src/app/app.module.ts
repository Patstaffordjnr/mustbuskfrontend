import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { MainmenuComponent } from './mainmenu/mainmenu.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
