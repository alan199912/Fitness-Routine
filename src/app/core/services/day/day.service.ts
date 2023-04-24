import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { QUERY_GET_DAYS } from '@graphql/queries/day.queries';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Day, GetDaysResponse } from '@app/core/models/day.models';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  constructor(private readonly apollo: Apollo) {}

  public getDays(): Observable<Day[]> {
    return this.apollo
      .query<GetDaysResponse>({
        query: QUERY_GET_DAYS,
      })
      .pipe(
        catchError((error) => throwError(() => error.message)),
        map((result) => result.data?.days)
      );
  }
}
