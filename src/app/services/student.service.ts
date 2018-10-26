import { Injectable } from '@angular/core';
import {Student} from '../models/Student';
import { Observable, of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentInfo(studentId: string): Observable<Student> {
    return observableOf({
      firstName: "Peen",
      lastName: "Weinerstein",
      email: "peen.weinerstein@gmail.com",
      studentId: studentId
    });
  }
}
