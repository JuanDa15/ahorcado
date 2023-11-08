import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  title = 'ahorcado';
  diccPosition:number = 0;
  wordsDicc = ['PROGRAMACION','DESARROLLO','MAPAS','SAL','NARANJA','CARRO','JUGUETE','NIÑO',
                'CAÑON','ESTERNOCLEIDOMASTOIDEO','GRANJA','GAFAS','COMPUTADOR','PARANGUACUTIRIMICUARO'];
  word:string = '';
  hiddenWord:string = '';
  attempts:number = 9;
  usedAttempts:number = 0;
  status: 'win' | 'lose' | 'playing' = 'playing'
  message:string = '';

  letters = ['A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','Ñ','O','P','Q','R','S',
            'T','U','V','W','X','Y','Z'];

  constructor(){
    this.selectWord();
  }

  ngOnInit(): void {
  }

  setAttempts(attempts:number){
    this.attempts = attempts;
  }

  getAttempts():number{
    return this.attempts;
  }


  checkLetter(letter:string):void{
    if(!this.word.includes(letter)){
      this.usedAttempts += 1;
    }
    this.replaceWord(letter);
  }

  selectWord(){
    this.diccPosition = Math.floor(Math.random() * 13);
    this.word = this.wordsDicc[this.diccPosition];
    this.hiddenWord = '_ '.repeat(this.word.length);
  }

  winVerification(){
    const WordArray = this.hiddenWord.split(' ');
    const WordString = WordArray.join('');
    if(WordString == this.word){
      this.message = 'Ganaste';
      this.status = 'win';
      this.hideInterface();
    }

    if(this.usedAttempts >= this.attempts){
      this.usedAttempts = 9;
      this.message = 'Perdiste';
      this.status = 'lose';
      this.hideInterface();
    }
  }

  hideInterface(){
    if(['win','lose'].includes(this.status)){
      const lettersBox = document.querySelector('.letters__container');
      if(lettersBox != null){lettersBox.classList.add('hide');}
    }
  }

  replaceWord(letter:string){
    const ArrayWord = this.hiddenWord.split(' ');

    for(let i = 0; i < this.word.length; i++){
      if(this.word[i] === letter){
        ArrayWord[i] = letter;
      }
    }

    this.hiddenWord = ArrayWord.join(' ');
    this.winVerification();
  }

  restartGame(){
    this.status = 'playing';
    this.usedAttempts = 0;
    document.querySelector('.letters__container')?.classList.remove('hide');
    this.selectWord();
  }
}
