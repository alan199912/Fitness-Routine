import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { TrainingRoutineForm } from './models/training-routine-form-models';

@Component({
  selector: 'app-training-routine-form',
  templateUrl: './training-routine-form.component.html',
  styleUrls: ['./training-routine-form.component.scss'],
})
export class TrainingRoutineFormComponent extends TrainingRoutineForm {
  constructor(protected override fb: FormBuilder) {
    super(fb);
  }

  public setRoutine(): void {
    console.log(this.trainingRoutineForm.value);
  }
}
