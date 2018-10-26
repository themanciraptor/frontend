import { Injectable } from '@angular/core';
import {Student} from '../models/Student';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentInfo(studentId: string): Observable<Student> {
    // Stub -- fake loading before returning stub info
    return timer(1000).pipe(
      switchMap(() => observableOf({
        firstName: "Peen",
        lastName: "Weinerstein",
        email: "peen.weinerstein@gmail.com",
        studentId: studentId
      }))
    );
  }
}
