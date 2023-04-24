import { Component } from '@angular/core';
import { LoginForm } from './models/login-form.models';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends LoginForm {
  constructor(
    protected override fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    super(fb);
  }

  public loginSubmit(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (token) => {
        if (token) localStorage.setItem('TOKEN', token);

        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
