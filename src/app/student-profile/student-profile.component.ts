import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';
import { StudentTermData } from '../models/StudentTermData';
import { Document } from './../models/Document';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  student$: Observable<Student>;
  studentTermData$: Observable<StudentTermData[]>;
  documents$: Observable<Document[]>;

  studentTermData$$: BehaviorSubject<StudentTermData[]>;

  displayedColumns: string[] = ['institution', 'term', 'status'];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.studentTermData$$ = new BehaviorSubject<StudentTermData[]>(null);

    const studentId = this.route.paramMap.pipe(
      map(params => params.get('studentId'))
    );
    this.student$ = studentId.pipe(
      switchMap(id => this.studentService.getStudentInfo(id))
    );
    this.studentTermData$ = studentId.pipe(
      switchMap(id => this.studentService.getRegistrationInfo(id))
    );
    this.documents$ = studentId.pipe(
      switchMap(id => this.studentService.getDocuments(id))
    );

    this.studentTermData$.subscribe(data => this.studentTermData$$.next(data));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogApply, {width: '600px'});
    dialogRef.afterClosed().subscribe((result: StudentTermData) => {
      this.studentTermData$$.next(this.studentTermData$$.getValue().concat(result))
    });
  }

}

@Component({
  selector: 'dialog-apply',
  templateUrl: 'dialog-apply.html',
})
export class DialogApply {

  selectedInstitution: string;
  selectedTerm: string;

  institutions: string[] = ['University of Butts', 'Shit College', 'Alberta School of Stink'];
  terms: string[] = ['Fall/2018', 'Winter/2019', 'Spring/2019', 'Summer/2019'];

  constructor(public dialogRef: MatDialogRef<DialogApply>) {}

  applyDisabled() {
    return !this.selectedInstitution || !this.selectedTerm;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  get applyDialogResult(): StudentTermData {
    return {
      id: null,
      institution: this.selectedInstitution,
      term: this.selectedTerm,
      enrollmentStatus: 'APPLIED'
    };
  }

}
