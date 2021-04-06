import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/services/user/User';
import { UserService } from '../../services/user/user.service';
import { Role } from '../../services/user/Role'


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    role = Role;
    

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        if(this.authenticationService.currentUser){
            this.authenticationService.currentUser.subscribe(user => {
                console.log(user.email);
            });

           
        }
    };

    enableLinkForRole(role: Role): boolean {

        let enable = false
        if(this.authenticationService.currentUser){
            this.authenticationService.currentUser.subscribe(user => {
              debugger;

              let test = user.roles as Set<Role>;

              enable = user.roles.has(role);
              console.log(enable)
            }    
            )};
            return enable;
    }
}