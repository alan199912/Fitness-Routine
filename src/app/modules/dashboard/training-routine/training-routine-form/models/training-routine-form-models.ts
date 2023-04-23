import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export abstract class TrainingRoutineForm {
  public trainingRoutineForm: FormGroup;

  constructor(protected fb: FormBuilder) {
    this.trainingRoutineForm = this.createForm();
  }

  public createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      series: ['', Validators.required],
      repetitions: ['', Validators.required],
      time: ['', Validators.required],
      rest: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }
}
