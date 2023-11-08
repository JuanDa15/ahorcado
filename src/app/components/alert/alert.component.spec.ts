import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { AlertComponent } from './alert.component'
import { By } from '@angular/platform-browser'
import { type DebugElement } from '@angular/core'

fdescribe('AlertComponent', () => {
  let component: AlertComponent
  let fixture: ComponentFixture<AlertComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AlertComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should render the correct text', () => {
    const newStatus = 'win'
    component.status = newStatus
    fixture.detectChanges()
    const alertDebug: DebugElement = fixture.debugElement.query(By.css('[data-testid=alert]'))
    const alertElement: HTMLParagraphElement = alertDebug.nativeElement
    expect(alertElement.textContent).toBe(component.messages[newStatus])
  })
  it('should not render th alert element', () => {
    const newStatus = 'playing'
    component.status = newStatus
    fixture.detectChanges()
    const alertDebug: DebugElement = fixture.debugElement.query(By.css('[data-testid=alert]'))
    expect(alertDebug).toBeFalsy()
  })
})
