import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { HttpClient } from '@angular/common/http';

const AUTH_URL = 'google.ca';
// change it to your API end point - Riley/Hayden!

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel){
   console.log('Login in with ', loginModel);
   // this.http.post(AUTH_URL, loginModel);
      // this is how youll make the call, just in case!
  }
}
