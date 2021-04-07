import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleName } from './user/RoleName';
import { User } from './user/User';

@Injectable({ providedIn: 'root' })
export class UtilService {
    constructor() { }

    public getRoleNames(user: User) : Set<RoleName> {
        const roleNames: Set<RoleName> = new Set();
        for (let role of user.roles) { 
            roleNames.add(role.roleName);
        } 
        return roleNames;
    }
}