import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearnWordsService } from './learn-words.service';
import { Lesson } from './interfaces/Lesson'

@Component({
  selector: 'page-learn-words',
  template: `
    <div class="main-wrapper">
      <div class="lessons-wrapper">
        <widget (click)="navigateToLessonDetails(tile.id)" *ngFor="let tile of lessons" [title]="tile.name" class="tile"></widget>
        <widget (click)="navigateToCreateLesson()" title="+" class="tile add-lesson"></widget>
      </div>
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
      flex: 8;
    }
    .tile{
      height: 150px;
    }
    .tile:hover{
      cursor:pointer;
    }
    .add-lesson{
      text-align:center;
    }
  `]
})
export class LearnWordsComponent implements OnInit {
  lessons: Lesson[] = [];

  navigateToCreateLesson() {
    this.router.navigate(['create-lesson']);
  }

  navigateToLessonDetails(lessonNumber: number) {
    this.router.navigate(['lesson-details/'+lessonNumber]);
  }

  constructor(private router: Router, private learnWordsService: LearnWordsService ) {
    this.learnWordsService.getLessons().subscribe((data: Lesson[]) => this.lessons = data)
  }

  ngOnInit(){

  }

}
