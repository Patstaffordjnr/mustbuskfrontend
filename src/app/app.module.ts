import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './helpers/error.interceptor.ts'
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { AdminComponent } from '../ui/admin/admin.component';
import { UserComponent } from '../ui/user/user.component';
import { BuskerComponent } from '../ui/busker/busker.component';


import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserManagerComponent } from './pages/profile-manager/user-manager.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { UserPaginationComponent } from './pages/profile-manager/user-pagination/user-pagination.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapsComponent } from './maps/maps.component'










@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        NgxPaginationModule,
        GoogleMapsModule,
        HttpClientJsonpModule,
    
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AdminComponent,
        UserComponent,
        BuskerComponent,
        RegistrationComponent,
        UserManagerComponent,
        UserPaginationComponent,
        MapsComponent,

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }