import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentTermData } from '../models/StudentTermData';
import { Document } from '../models/Document';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  getRegistrationInfo(studentId: string): Observable<StudentTermData[]> {
    // Stub -- fake loading before returning stub info
    return timer(1000).pipe(
      switchMap(() => observableOf([
        {
          id: studentId,
          enrollmentStatus: 'ENROLLED',
          term: 'Fall/2018',
          institution: 'University of Regina'
        },
        {
          id: studentId,
          enrollmentStatus: 'APPLIED',
          term: 'Fall/2018',
          institution: 'Yale'
        }
      ]))
    );
  }

  getStudentInfo(studentId: string): Observable<Student> {
    // Stub -- fake loading before returning stub info
    return timer(1000).pipe(
      switchMap(() => observableOf({
        firstName: 'Peen',
        lastName: 'Weinerstein',
        email: 'peen.weinerstein@gmail.com',
        studentId: studentId,
        address: '69 Mountain Bunker, City of Failure, USA'
      }))
    );
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
