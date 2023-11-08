import { Component, Input } from '@angular/core'

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  public readonly messages: Record<string, string> = {
    win: 'Ganaste',
    lose: 'Perdiste'
  }

  @Input({ required: true }) status: 'win' | 'lose' | 'playing' = 'playing'
}
