import { Injectable, signal } from '@angular/core'

export type GameState = 'playing' | 'win' | 'lose' | 'init'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public selectedWord = ''
  public hiddenWord = signal('')
  public usedAttempts = signal(0)
  public gameStatus = signal<GameState>('init')

  public readonly WORDS = [
    'PROGRAMACION', 'DESARROLLO', 'MAPAS',
    'SAL', 'NARANJA', 'CARRO', 'JUGUETE', 'NIÑO',
    'CAÑON', 'ESTERNOCLEIDOMASTOIDEO', 'GRANJA',
    'GAFAS', 'COMPUTADOR', 'PARANGUACUTIRIMICUARO'
  ]

  public readonly WORDS_LENGTH = this.WORDS.length

  public readonly LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  public readonly MAX_ATTEMPS = 9

  public initializeGame (): void {
    this.selectedWord = this._getRandomWord()
    this.gameStatus.set('playing')
    this.hiddenWord.set('_ '.repeat(this.selectedWord.length))
    this.usedAttempts.set(0)
  }

  public checkSelection (letter: string): void {
    if (!this.selectedWord.includes(letter)) {
      this.usedAttempts.update(value => value + 1)
      this._loseVerification()
      return
    }

    this._replaceLetter(letter)
    this._winVerification()
  }

  private _replaceLetter (letter: string): void {
    const ArrayWord = this.hiddenWord().split(' ')
    for (let i = 0; i < this.selectedWord.length; i++) {
      if (this.selectedWord[i] === letter) {
        ArrayWord[i] = letter
      }
    }
    this.hiddenWord.set(ArrayWord.join(' '))
  }

  private _winVerification (): void {
    const WordArray = this.hiddenWord().split(' ')
    const WordString = WordArray.join('')
    if (WordString === this.selectedWord) {
      this.gameStatus.set('win')
    }
  }

  private _loseVerification (): void {
    if (this.usedAttempts() >= this.MAX_ATTEMPS) {
      this.gameStatus.set('lose')
    }
  }

  private _getRandomWord (): string {
    const WORD_POSITION = Math.floor(Math.random() * this.WORDS_LENGTH)
    return this.WORDS[WORD_POSITION]
  }
}
