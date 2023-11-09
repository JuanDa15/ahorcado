import { Component, inject } from '@angular/core'
import { SettingsService } from '../services/settings.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public settings = inject(SettingsService)

  constructor () {
    this.settings.initializeGame()
  }

  checkLetter (letter: string): void {
    this.settings.checkSelection(letter)
  }
}
