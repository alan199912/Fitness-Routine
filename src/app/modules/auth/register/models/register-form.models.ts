import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export abstract class RegisterForm {
  public registerForm: FormGroup;

  constructor(protected fb: FormBuilder) {
    this.registerForm = this.createForm();
  }

  public createForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
