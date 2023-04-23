import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingRoutineComponent } from './training-routine.component';
import { TrainingRoutineFormComponent } from './training-routine-form/training-routine-form.component';

const routes: Routes = [
  { path: 'form/:id', component: TrainingRoutineFormComponent },
  { path: ':id', component: TrainingRoutineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutineRoutingModule {}
