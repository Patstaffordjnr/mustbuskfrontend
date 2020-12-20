import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainmenuComponent } from './mainmenu/mainmenu.component'
import { LoginComponent } from './login/login.component'


const routes: Routes = [
  { path: 'mainmenu', component: MainmenuComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }


// RouterModule.forRoot(
//   appRoutes,
//   { enableTracing: true } // <-- debugging purposes only
// )