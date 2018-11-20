import { Injectable } from '@angular/core';
import { LoginData } from '../models/LoginData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterData } from '../models/RegisterData';
import { LoginResponse } from '../login-page/LoginResponse';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

const AUTH_URL = 'localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

// change it to your API end point - Riley/Hayden!

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginData): Observable<any> {
    console.log (loginModel);
    return this.http.post(`${AUTH_URL}/login`, loginModel, httpOptions);
  }

  register(registerModel: RegisterData): Observable<any> {
    console.log('Registering with ', registerModel);
    return this.http.post(`${AUTH_URL}/register`, registerModel, httpOptions);
  }
}