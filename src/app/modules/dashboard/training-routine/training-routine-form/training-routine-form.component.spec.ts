import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRoutineFormComponent } from './training-routine-form.component';

describe('TrainingRoutineFormComponent', () => {
  let component: TrainingRoutineFormComponent;
  let fixture: ComponentFixture<TrainingRoutineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingRoutineFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingRoutineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
