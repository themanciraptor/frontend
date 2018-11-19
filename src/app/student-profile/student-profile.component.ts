import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';
import { StudentTermData } from '../models/StudentTermData';
import { Document } from './../models/Document';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ApplicationService } from '../services/application.service';

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
      switchMap(id => this.studentService.getRegistrationInfo(id)),
      catchError(err => observableOf([{id: null, enrollmentStatus: null,
        term: null, institution: 'Error getting term data'}]))
    );
    this.documents$ = studentId.pipe(
      switchMap(id => this.studentService.getDocuments(id))
    );

    this.studentTermData$.subscribe((data: StudentTermData[]) => this.studentTermData$$.next(data));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogApplyComponent, {width: '600px'});
    dialogRef.afterClosed().subscribe((result: StudentTermData) => {
      if (result) {
        this.studentTermData$$.next(this.studentTermData$$.getValue().concat(result));
      }
    });
  }

}

@Component({
  selector: 'app-dialog-apply',
  templateUrl: 'dialog-apply.html',
  styles: [`
    .form {
        display: flex;
        justify-content: center;
    }
    mat-form-field {
        margin-left: 8px;
        margin-right: 8px;
    }
    .select-institution {
        flex: 1 0 auto;
    }
    mat-spinner {
        margin: auto;
    }
  `]
})
export class DialogApplyComponent {

  selectedInstitution: string;
  selectedTerm: string;

  institutions$: Observable<string[]>;
  terms: string[] = ['Fall/2018', 'Winter/2019', 'Spring/2019', 'Summer/2019'];

  constructor(
    public dialogRef: MatDialogRef<DialogApplyComponent>,
    applicationService: ApplicationService
  ) {
    this.institutions$ = applicationService.getCollegeNames();
  }

  applyDisabled() {
    return !(this.selectedInstitution && this.selectedTerm);
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
