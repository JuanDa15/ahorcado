import { Component, Input } from '@angular/core';

@Component({
  selector: 'hidden-word',
  templateUrl: './hidden-word.component.html',
  styleUrl: './hidden-word.component.scss'
})
export class HiddenWordComponent {
  @Input({ required: true }) hiddenWord = ''
}
