import { Component, Input } from '@angular/core'

@Component({
  selector: 'hidden-word',
  template: `
    <div
      class="word__container"
    >
      <h1 data-testid="hidden-word" > {{hiddenWord}}</h1>
    </div>
  `,
  styles: `
    .word__container {
      display: flex;
      justify-content: center;
      font-size: 1rem;
      margin: .8rem .2rem;
    }
  `
})
export class HiddenWordComponent {
  @Input({ required: true }) hiddenWord = ''
}
