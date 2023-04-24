import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '@enviroment/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('TOKEN');

    const headers = request.headers
      .set('Authorization', `Bearer ${token}`)
      .set('client_id', environment.client_id)
      .set('client_secret', environment.client_secret);

    const authReq = request.clone({ headers });

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.router.navigate(['/']);
        }

        return throwError(error);
      })
    );
  }
}
