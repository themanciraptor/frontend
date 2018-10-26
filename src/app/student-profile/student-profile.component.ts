import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  private studentId: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.studentId = this.route.paramMap.pipe(
      map(params => params.get('studentId'))
    );
    this.studentId.subscribe(console.log);
  }

}
