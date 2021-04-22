import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from './User';
import { RoleName } from './role/RoleName';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.site}${environment.apiUrl}home`);
    }

    public getRoleNames(user: User) : Array<RoleName> {
        const roleNames: Array<RoleName> = new Array();
        for (let role of user.roles) { 
            roleNames.push(role.roleName);
        } 
        return roleNames;
    }

    async addUser(user: User): Promise<User> {
        return this.http.post<User>(`${environment.site}${environment.apiUrl}${environment.version}/admin`, user).toPromise();
    }
}