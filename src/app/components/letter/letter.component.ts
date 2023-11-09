import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'letter',
  template: `
    <button
      type="button"
      class="letter"
      data-testid="letter"
      (click)="onClickLetter.emit()"
    >
      {{letter}}
    </button>
  `,
  styleUrl: './letter.component.scss'
})
export class LetterComponent {
  @Input({ required: true }) letter = ''
  @Output() onClickLetter = new EventEmitter<void>()
}
