import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from './user/User';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject!: BehaviorSubject<User>;
    currentUser!: Observable<User>;

    private readonly USER_STRING = 'currentUser';
    private readonly TOKEN_STRING = 'currentToken';

    constructor(private http: HttpClient) {
        const currentUserString = localStorage.getItem(this.USER_STRING);
        
        if (currentUserString) {
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(currentUserString));
            this.currentUser = this.currentUserSubject;
        }
    }

    public get currentUserValue(): User | null {
        if (this.currentUserSubject) {
            return this.currentUserSubject.value;
        } else {
            return null;
        }
    }

    public get currentTokenValue(): string | null {
        return  localStorage.getItem(this.TOKEN_STRING);
    }

    async login(username: string, password: string): Promise<String | void> {
        let headers = new HttpHeaders();
        const token = btoa(username + ':' + password);
        headers = headers.append("Authorization", "Basic " + token);
        headers = headers.append("Content-Type", "application/json");

        this.http.get<User>(`${environment.site}auth/user`, { headers: headers }).subscribe(resp => {

            localStorage.setItem(this.USER_STRING, JSON.stringify(resp));
            localStorage.setItem(this.TOKEN_STRING, token);
            this.currentUserSubject = new BehaviorSubject<User>(resp);
            this.currentUserSubject.next(resp);

            return resp;
        });
    }

    logout() {
        localStorage.removeItem(this.USER_STRING);
        localStorage.removeItem(this.TOKEN_STRING);
        this.currentUserSubject.unsubscribe();
    }
}





