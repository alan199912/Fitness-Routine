import { Injectable } from '@angular/core';
import { QUERY_GET_USER } from '@graphql/queries/user.queries';
import { ChooseDayResponse, GetUserResponse, User } from '@app/core/models/user.models';
import { Apollo } from 'apollo-angular';
import { Observable, catchError, map, throwError } from 'rxjs';
import { MUTATION_CHOOSE_DAY } from '@graphql/mutations/user.mutations';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly apollo: Apollo) {}

  public getUser(): Observable<User> {
    return this.apollo
      .query<GetUserResponse>({
        query: QUERY_GET_USER,
      })
      .pipe(
        catchError((error) => throwError(() => error.message)),
        map((result) => result.data?.getUser)
      );
  }

  public chooseDay(id: number): Observable<User | undefined> {
    return this.apollo
      .mutate<ChooseDayResponse>({
        mutation: MUTATION_CHOOSE_DAY,
        variables: {
          dayId: id,
        },
      })
      .pipe(
        catchError((error) => throwError(() => error.message)),
        map((result) => result.data?.choiseDay)
      );
  }
}
