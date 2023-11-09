import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { LetterComponent } from './letter.component'
import { By } from '@angular/platform-browser'

fdescribe('LetterComponent', () => {
  let component: LetterComponent
  let fixture: ComponentFixture<LetterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetterComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(LetterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should render the letter', () => {
    component.letter = 'A'
    const letterDebug = fixture.debugElement.query(By.css('[data-testid=letter]'))
    const letterEle: HTMLButtonElement = letterDebug.nativeElement

    fixture.detectChanges()

    expect(letterEle.innerText).toBe('A')
  })
  it('should emit the letter when clicked', () => {
    component.letter = 'A'
    const letterDebug = fixture.debugElement.query(By.css('[data-testid=letter]'))

    component.onClickLetter.subscribe({
      next: (resp: undefined) => {
        expect(resp).toBeUndefined()
      }
    })

    fixture.detectChanges()
    letterDebug.triggerEventHandler('click', null)
  })
})
