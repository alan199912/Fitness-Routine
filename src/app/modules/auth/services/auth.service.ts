import { Injectable } from '@angular/core';
import { GetIdByTokenResponse, LoginResponse, VerifyTokenResponse } from '@app/core/models/auth.models';
import { Apollo } from 'apollo-angular';
import { Observable, catchError, filter, map, throwError } from 'rxjs';
import { MUTATION_LOGIN, MUTATION_REGISTER } from '@graphql/mutations/auth.mutations';
import { QUERY_GET_ID_BY_TOKEN, QUERY_VERIFY_TOKEN } from '@graphql/queries/auth.queries';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly apollo: Apollo) {}

  public login(email: string, password: string): Observable<string | undefined> {
    return this.apollo
      .mutate<LoginResponse>({
        mutation: MUTATION_LOGIN,
        variables: {
          email,
          password,
        },
      })
      .pipe(
        catchError((error) => throwError(() => error.message)),
        filter((result) => !!result.data),
        map((result) => result.data?.login)
      );
  }

  public isAuthenticated(): Observable<boolean> {
    return this.apollo
      .query<VerifyTokenResponse>({
        query: QUERY_VERIFY_TOKEN,
      })
      .pipe(map((result) => result.data?.verifyToken));
  }

  public register(username: string, email: string, password: string) {
    return this.apollo
      .mutate({
        mutation: MUTATION_REGISTER,
        variables: {
          username,
          email,
          password,
        },
      })
      .pipe(catchError((error) => throwError(() => error.message)));
  }

  public getIdByToken(): Observable<string> {
    return this.apollo
      .query<GetIdByTokenResponse>({
        query: QUERY_GET_ID_BY_TOKEN,
      })
      .pipe(
        catchError((error) => throwError(() => error.message)),
        map((result) => result.data?.getIdByToken)
      );
  }
}
