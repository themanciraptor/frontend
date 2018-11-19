import { Injectable } from '@angular/core';
import { LoginData } from '../models/LoginData';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from '../models/RegisterData';
import { LoginResponse } from '../login-page/LoginResponse';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const BASE_URL = 'localhost:8080/';

// change it to your API end point - Riley/Hayden!

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginData) {
    // this.http.post(`${AUTH_URL}/login`, loginModel);
    return this.http.post(BASE_URL + 'login', loginModel);
  }

  register(registerModel: RegisterData) {
    console.log('Registering with ', registerModel);
    // this.http.post(`${AUTH_URL}/register`, registerModel);
    // this is how youll make the call, just in case!
    return this.http.post(BASE_URL + 'register', registerModel);
  }
}
