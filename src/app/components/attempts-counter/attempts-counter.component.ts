import { Component, Input } from '@angular/core';

@Component({
  selector: 'attempts-counter',
  templateUrl: './attempts-counter.component.html',
  styleUrl: './attempts-counter.component.scss'
})
export class AttemptsCounterComponent {
  @Input({ required: true }) usedAttempts: number = 0;
  @Input({ required: true }) attempts: number = 0;
}
