import { Injectable } from '@angular/core';
import { LoginData } from '../models/LoginData';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from '../models/RegisterData';

const AUTH_URL = 'google.ca';

// change it to your API end point - Riley/Hayden!


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

    login(loginModel: LoginData) {
        console.log('Logging in with ', loginModel);
        // this.http.post(`${AUTH_URL}/login`, loginModel);
        // this is how youll make the call, just in case!
    }

    register(registerModel: RegisterData) {
        console.log('Registering with ', registerModel);
        // this.http.post(`${AUTH_URL}/register`, registerModel);
        // this is how youll make the call, just in case!
    }
}
