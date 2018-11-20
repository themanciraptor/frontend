import { Injectable } from '@angular/core';
import { LoginData } from '../models/LoginData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterData } from '../models/RegisterData';
import { LoginResponse } from '../login-page/LoginResponse';
import { Observable, of as observableOf, timer } from 'rxjs';
import { RegisterResponse } from './RegisterResponse';
import { environment } from 'src/environments/environment.prod';

const AUTH_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${AUTH_URL}/login`, loginModel);
  }

  register(registerModel: RegisterData): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${AUTH_URL}/register`, registerModel);
  }
}