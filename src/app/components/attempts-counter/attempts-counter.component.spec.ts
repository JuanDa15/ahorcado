import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptsCounterComponent } from './attempts-counter.component';

describe('AttemptsCounterComponent', () => {
  let component: AttemptsCounterComponent;
  let fixture: ComponentFixture<AttemptsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttemptsCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttemptsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
