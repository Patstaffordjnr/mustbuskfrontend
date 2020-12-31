import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainmenuComponent } from './mainmenu/mainmenu.component'
import { LoginComponent } from './login/login.component'

import { HomeComponent } from './Home/home.component'

import { AuthGuard } from './_helpers';



const routes: Routes = [
  { path: 'mainmenu', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'http://localhost:4200/' }
];

export const appRoutingModule = RouterModule.forRoot(routes);










// const routes: Routes = [
//   { path: 'mainmenu', component: MainmenuComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'login', component: LoginComponent },

//       // otherwise redirect to home
//       { path: '**', redirectTo: '' }
// ];














// RouterModule.forRoot(
//   appRoutes,
//   { enableTracing: true } // <-- debugging purposes only
// )