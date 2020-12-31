import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { RegisterComponent } from './register/register.component'


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';
import { appRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './Home/home.component';
// import { LoginComponent } from './login';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    RegisterComponent,
  




  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,



  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    
    
],
bootstrap: [AppComponent]
})



export class AppModule { }
