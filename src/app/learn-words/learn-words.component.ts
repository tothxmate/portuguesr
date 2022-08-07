import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearnWordsService } from './learn-words.service';

@Component({
  selector: 'page-learn-words',
  template: `
    <div class="main-wrapper">
      <h1>Lessons</h1>
      <div class="lessons-wrapper" *ngIf="areLessonsLoaded">
        <widget (click)="navigateToLesson(lessonName.key)" *ngFor="let lessonName of lessonNames" [title]="lessonName.value" [editable]="true" (showEditScreen)="navigateToLessonDetails(lessonName.key)"></widget>
        <widget (click)="navigateToCreateLesson()" title="+" [centered]="true" [titleBig]="true" class="add-lesson"></widget>
      </div>
      <app-loading-indicator *ngIf="!areLessonsLoaded"></app-loading-indicator>
    </div>
  `,
  styles: [`
    :host{
      display: flex;
      height: 100%;
    }
    .main-wrapper{
      width: 68vw;
      display: flex;
      flex-direction: column;
    }
    .lessons-wrapper{
      display: flex;
    }
    widget{
      height: 150px;
      width: 25%;
      display: inline-block;
    }
    widget:hover{
      cursor:pointer;
    }
    .add-lesson{
      text-align:center;
    }
  `]
})
export class LearnWordsComponent implements OnInit {
  lessonNames: any[] = [];
  areLessonsLoaded: boolean = false;

  navigateToCreateLesson() {
    this.router.navigate(['create-lesson']);
  }

  navigateToLessonDetails(lessonNumber: string) {
    this.router.navigate(['lesson-details', lessonNumber]);
  }

  navigateToLesson(lessonNumber: string) {
    this.router.navigate(['lesson', lessonNumber]);
  }

  constructor(private router: Router, private learnWordsService: LearnWordsService) {
    this.learnWordsService.getLessonNames().subscribe(actions => {
      this.areLessonsLoaded = true
      actions.forEach((action:any) => {
        this.lessonNames.push({key: action.key, value: action.payload.val()})
      });
    });
  }

  ngOnInit(){
  }

}
