import { Injectable } from '@angular/core';
import {Student} from '../models/Student';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentTermData } from "../models/StudentTermData";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getRegistrationInfo(studentId: string): Observable<StudentTermData[]> {
    // Stub -- fake loading before returning stub info
    return timer(1000).pipe(
      switchMap(() => observableOf([
        {
          id: studentId,
          course: "CS372",
          enrollmentStatus: "ENROLLED",
          term: "Fall/2018",
          collegeId: "UofR"
        },
        {
          id: studentId,
          course: "CS427",
          enrollmentStatus: "ENROLLED",
          term: "Fall/2018",
          collegeId: "UofR"
        }
      ]))
    );
  }

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
