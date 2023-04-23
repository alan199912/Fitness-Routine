import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TrainingRoutineRoutingModule } from './training-routine-routing.module';
import { TrainingRoutineFormComponent } from './training-routine-form/training-routine-form.component';
import { TrainingRoutineComponent } from './training-routine.component';

@NgModule({
  declarations: [TrainingRoutineFormComponent, TrainingRoutineComponent],
  imports: [CommonModule, TrainingRoutineRoutingModule, FormsModule, ReactiveFormsModule],
})
export class TrainingRoutineModule {}
