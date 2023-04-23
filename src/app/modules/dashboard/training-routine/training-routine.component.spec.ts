import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRoutineComponent } from './training-routine.component';

describe('TrainingRoutineComponent', () => {
  let component: TrainingRoutineComponent;
  let fixture: ComponentFixture<TrainingRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingRoutineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
