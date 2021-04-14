import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from 'src/app/services/user/role/Role';
import { RoleName } from 'src/app/services/user/role/RoleName';
import { User } from 'src/app/services/user/User';
import { UtilService } from 'src/app/services/util.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    roleName = RoleName;
    userRoles!: Set<RoleName>;  

    constructor(private authenticationService: AuthenticationService, private utilService: UtilService) { }

    ngOnInit() {
        this.loading = true;
        if(this.authenticationService.currentUser){
            this.authenticationService.currentUser.subscribe(user => {
                this.userRoles = this.utilService.getRoleNames(user);
            })
        }; 
    }

    enableLinkForRole(roleName: RoleName): boolean {
        let enable = false
        if (this.userRoles) {
            enable = this.userRoles.has(roleName);
        }
        return enable;        
    }
}