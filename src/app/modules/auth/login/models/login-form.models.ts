import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export abstract class LoginForm {
  public loginForm: FormGroup;

  constructor(protected fb: FormBuilder) {
    this.loginForm = this.createForm();
  }

  public createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
