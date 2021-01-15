import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject!: BehaviorSubject<User>;
    private currentUser!: Observable<User>;
    
    private readonly USER_STRING = 'currentUser';

    constructor(private http: HttpClient){
        const currentUserString = localStorage.getItem(this.USER_STRING);
        if (currentUserString) {                    
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(currentUserString));
            this.currentUser = this.currentUserSubject.asObservable();    
        } 
    }

    public get currentUserValue(): User | null {
        if(this.currentUserSubject) {
            return this.currentUserSubject.value;
        } else {
            return null;
        }
    }

    async login(username: string, password: string): Promise<User | null> {
        let headers = new HttpHeaders();
        const token = btoa(username + ':' + password);
        headers = headers.append("Authorization", "Basic " + token);
        headers = headers.append("Content-Type", "application/json");

        this.http.get(`${environment.site}auth/user`, {headers: headers}).subscribe(resp => {
        });

        return null;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(this.USER_STRING);
        this.currentUserSubject.unsubscribe();
    }
}