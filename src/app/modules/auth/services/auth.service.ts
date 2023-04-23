import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, throwError } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

const MUTATION_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

interface LoginResponse {
  login: string;
}

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

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('TOKEN');
  }
}
