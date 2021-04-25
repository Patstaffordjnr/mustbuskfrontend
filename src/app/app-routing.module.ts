import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { AdminComponent } from 'src/ui/admin/admin.component';
import { BuskerComponent } from 'src/ui/busker/busker.component';
import { UserComponent } from 'src/ui/user/user.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserManagerComponent } from './pages/profile-manager/user-manager.component';




const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'busker', component: BuskerComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'registration', component: RegistrationComponent},
    { path: 'user-manager', component: UserManagerComponent},
    // { path: 'logged-in', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }