import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from '@app/modules/auth/services/auth.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
