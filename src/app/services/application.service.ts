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
        'University of Butts',
        'Shit College',
        'Alberta School of Stink'
      ]))
    );
  }
}
