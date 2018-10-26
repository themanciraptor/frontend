import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  private student: Observable<Student>;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.student = this.route.paramMap.pipe(
      map(params => params.get('studentId')),
      switchMap(studentId => this.studentService.getStudentInfo(studentId))
    );
    this.student.subscribe(console.log);
  }

}
