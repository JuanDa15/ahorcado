import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'letter',
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.scss'
})
export class LetterComponent {
  @Input({ required: true }) letter = ''
  @Output() onClickLetter = new EventEmitter<void>()
}
