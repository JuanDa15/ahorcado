import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { HiddenWordComponent } from './hidden-word.component'
import { By } from '@angular/platform-browser'

describe('HiddenWordComponent', () => {
  let component: HiddenWordComponent
  let fixture: ComponentFixture<HiddenWordComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiddenWordComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(HiddenWordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should render the word', () => {
    const wordToRender = '_ _ _ _ _ _ A'
    component.hiddenWord = wordToRender
    const wordDebug = fixture.debugElement.query(By.css('[data-testid=hidden-word]'))
    const wordEle: HTMLHeadElement = wordDebug.nativeElement
    fixture.detectChanges()
    expect(wordEle.innerText).toBe(wordToRender)
  })
})
