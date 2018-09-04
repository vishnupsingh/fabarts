import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Summary } from './summary/summary.component';

@Injectable()
export class BodyContentService {

  constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary[]> {
      return this.http.get<Summary[]>('./assets/data/data.json')
      .pipe(
        tap(summaryList => console.log(`fetched summary list`)),
        catchError(this.handleError('getSummary', []))
      );
  }

  getSummaryFromApi(): Observable<Summary[]> {
    return this.http.get<Summary[]>('/api/values').pipe(
        tap(summaryList => console.log(`fetched summary list`)),
        catchError(this.handleError('getSummary', []))
      );
    }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
