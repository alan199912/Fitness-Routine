import { Component } from '@angular/core';
import { RegisterForm } from './models/register-form.models';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends RegisterForm {
  constructor(
    protected override fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    super(fb);
  }

  public registerSubmit(): void {
    console.log(this.registerForm.value);
    this.authService
      .register(
        this.registerForm.value.username,
        this.registerForm.value.email,
        this.registerForm.value.password
      )
      .subscribe({
        next: () => {
          alert('Registration successful!');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
