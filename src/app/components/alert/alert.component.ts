import { Component, Input } from '@angular/core'
import { type GameState } from 'src/app/services/settings.service'

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

  @Input({ required: true }) status: GameState = 'playing'
}
