import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { getLessonKey } from 'src/app/shared/helper';
import { Lesson } from '../interfaces/Lesson'
import { Translation } from '../interfaces/Translation';
import { LearnWordsService } from '../learn-words.service';

@Component({
  selector: 'page-lesson',
  template: `
    <div class="main-wrapper">
      <h1>{{lessonOver ? 'Finish' : activeWord.english}}</h1>
      <h3 *ngIf="guessingStatus === 2" class="correct-word">{{activeWord.portuguese}}</h3>
      <h3 *ngIf="guessingStatus === 1" class="correct-message">Correct!</h3>
      <input type="text" #guessInput>
      <app-button (click)="lessonOver ? navigateToResults() : validateResult()" color="var(--secondary-color)" [text]="lessonOver ? 'End' : 'Next'"></app-button>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      height: 100%;
      width: 68vw;
    }
    .main-wrapper{
      width: 100%;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;
    }
    h1{
      font-size: 4rem;
    }
    .correct-word{
      color: var(--tertiary-color)
    }
    .correct-message{
      color: var(--secondary-color)
    }
    input{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 4rem;
      border-radius: 10px;
      border-width: 1px;
      border-color: aliceblue;
      padding-left:12px;
      height: 40px;
      width: 70%;
      text-align:center;
      font-size: 2rem;
    }
  `]
})
export class LessonComponent{   
  @ViewChild('guessInput')
  guessInput!: ElementRef;
  
  words: Translation[] = [];
  activeWord: Translation = {english: "", portuguese: ""}
  lessonOver: boolean;
  lessonKey: string;
  guessingStatus: number;

  constructor(private router: Router, private learnWordsService: LearnWordsService ){
    this.lessonOver = false
    this.guessingStatus = 0;
    this.lessonKey = getLessonKey(router)!;
    this.learnWordsService.getLessonContent(this.lessonKey).subscribe((data: Translation[]) => {
      this.words = data
      this.getRandomWord()
    })
  } 

  validateResult(){
    const inputValue = this.guessInput.nativeElement.value
    if(inputValue!==this.activeWord.portuguese){
      this.guessingStatus = 2
    }else{
      this.guessingStatus = 1
    }
    setTimeout(()=>{
      this.guessingStatus = 0
      this.getRandomWord()
    },2000)
  }

  getRandomWord(){
    if(!this.words.length){
      this.lessonOver = true
    }
    this.activeWord = this.words[Math.floor(Math.random()*this.words.length)];
    this.words = this.words.filter((translation: Translation) => translation !== this.activeWord)
  }

  navigateToResults(){
    this.router.navigate(['learn-words']);
  }
}
