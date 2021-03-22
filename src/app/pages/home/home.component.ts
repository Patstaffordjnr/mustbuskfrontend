import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/services/user/User';
import { UserService } from '../../services/user/user.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        if(this.authenticationService.currentUser){
            this.authenticationService.currentUser.subscribe(user => {
                console.log(user.email);
            });
        }
    };
}