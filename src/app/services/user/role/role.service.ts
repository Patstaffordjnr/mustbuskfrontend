import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Role } from './Role';


@Injectable({ providedIn: 'root' })
export class RoleService {

        api = '';

    constructor(private http: HttpClient) {
        this.api = `${environment.site}${environment.apiUrl}${environment.version}/`;
     }

    async getRoles() {
        return this.http.get<Role[]>(`${this.api}admin/roles`).toPromise();
    }
}
