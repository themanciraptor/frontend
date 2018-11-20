import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentTermData } from '../models/StudentTermData';
import { Document } from '../models/Document';

const BASE_URL = 'localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getRegistrationInfo(studentId: string): Observable<any> {
    let data = this.http.get(`${BASE_URL}/studentterm`);
    return data;
  }

  getStudentInfo(studentId: string): Observable<any> {
    let data = this.http.get(`${BASE_URL}/student`);
    console.log(data);
    return data;
  }

  getDocuments(studentId: string): Observable<Document[]> {
    return timer(1000).pipe(
      switchMap(() => observableOf([
        {
          name: 'portfolio.pdf'
        },
        {
          name: 'headshot.jpg'
        }
      ]))
    );
  }
}
