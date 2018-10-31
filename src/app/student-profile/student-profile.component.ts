import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';
import { StudentTermData } from "../models/StudentTermData";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  student: Observable<Student>;
  studentTermData: Observable<StudentTermData[]>;

  displayedColumns: string[] = ['institution', 'term', 'status'];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    const studentId = this.route.paramMap.pipe(
      map(params => params.get('studentId'))
    );
    this.student = studentId.pipe(
      switchMap(id => this.studentService.getStudentInfo(id))
    );
    this.studentTermData = studentId.pipe(
      switchMap(id => this.studentService.getRegistrationInfo(id))
    );
  }

}
