import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/RegisterModel';

const AUTH_URL = 'google.ca';

// change it to your API end point - Riley/Hayden!


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginModel) {
    console.log('Logging in with ', loginModel);
    // this.http.post(`${AUTH_URL}/login`, loginModel);
    // this is how youll make the call, just in case!
  }

  register(registerModel: RegisterModel) {
    console.log('Registering with ', registerModel);
    // this.http.post(`${AUTH_URL}/register`, registerModel);
    // this is how youll make the call, just in case!
  }
}
