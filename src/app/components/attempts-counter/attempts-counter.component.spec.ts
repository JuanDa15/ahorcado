import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { AttemptsCounterComponent } from './attempts-counter.component'
import { By } from '@angular/platform-browser'

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
  it('should display attempts', () => {
    component.attempts = 9
    component.usedAttempts = 1
    fixture.detectChanges()
    const usedAttemptsDeb = fixture.debugElement.query(By.css('[data-testid=used-attempts]'))
    const totalAttemptsDeb = fixture.debugElement.query(By.css('[data-testid=total-attempts]'))
    const usedAttempts: HTMLSpanElement = usedAttemptsDeb.nativeElement
    const totalAttempts: HTMLSpanElement = totalAttemptsDeb.nativeElement

    expect(usedAttempts.innerText).toBe('1')
    expect(totalAttempts.innerText).toBe('9')
  })
})
