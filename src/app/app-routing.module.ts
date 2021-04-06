import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

import { GuestuiComponent } from '../ui/guestui/guestui.component'; 
import { UseruiComponent } from '../ui/userui/userui.component';
import { BuskeruiComponent } from '../ui/buskerui/buskerui.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'Guest', component: GuestuiComponent, canActivate: [AuthGuard] },
    { path: 'User', component: UseruiComponent, canActivate: [AuthGuard] },
    { path: 'Busker', component: BuskeruiComponent, canActivate: [AuthGuard] },
   
    
    // { path: 'logged-in', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }