import { Injectable } from '@angular/core';
import { Observable, of as observableOf, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getCollegeNames(): Observable<string[]> {
    // Stub -- fake loading before returning stub info
    return timer(1000).pipe(
      switchMap(() => observableOf([
        'British University of Technology and Tacos',
        'American National University of Schooling',
        'Alberta School of Science'
      ]))
    );
  }
}
