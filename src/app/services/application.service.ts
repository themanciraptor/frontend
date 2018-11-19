import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const BASE_URL = 'localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { 
  }

  getCollegeNames(): Observable<Object> {
    return this.http.get(BASE_URL + 'college');
  }
}
