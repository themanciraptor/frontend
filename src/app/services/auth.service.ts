import { Injectable } from '@angular/core';
import { LoginData } from '../models/LoginData';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from '../models/RegisterData';
import { LoginResponse } from '../login-page/LoginResponse';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RegisterResponse } from './RegisterResponse';

const AUTH_URL = 'google.ca';

// change it to your API end point - Riley/Hayden!

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginData): Observable<LoginResponse> {
    // this.http.post(`${AUTH_URL}/login`, loginModel);
    return timer(1000).pipe(
      switchMap(() => observableOf({
        success: true,
        userId: '112',
        sessionId: 'cool-session-id'
      }))
    );
  }

  register(registerModel: RegisterData): Observable<RegisterResponse> {
    // this.http.post(`${AUTH_URL}/register`, registerModel);
    return timer(1000).pipe(
      switchMap(() => observableOf({success: true}))
    );
  }
}
