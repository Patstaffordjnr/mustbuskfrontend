import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './services/user/User';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser!: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        if(this.authenticationService.currentUserValue) {
            this.currentUser = this.authenticationService.currentUserValue;
        }
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}