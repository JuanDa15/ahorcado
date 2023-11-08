import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { AttemptsCounterComponent } from './attempts-counter.component'

fdescribe('AttemptsCounterComponent', () => {
  let component: AttemptsCounterComponent
  let fixture: ComponentFixture<AttemptsCounterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttemptsCounterComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(AttemptsCounterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
