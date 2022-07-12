import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Tile = {
  id: number,
  title: string,
  subtext: string
}

@Component({
  selector: 'page-learn-words',
  template: `
    <div class="main-wrapper">
      <div class="lessons-wrapper">
        <tile (click)="navigateToLessonDetails(tile.id)" *ngFor="let tile of lessons" [title]="tile.title" [subtext]="tile.subtext" class="tile"></tile>
        <tile (click)="navigateToCreateLesson()" title="+" class="tile add-lesson"></tile>
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
  lessons: Tile[] = [
    { id: 1, title: "General expressions", subtext: "33%"},
    { id: 2, title: "Friends", subtext: "13%"},
    { id: 3, title: "Family", subtext: "67%"}
  ];

  navigateToCreateLesson() {
    this.router.navigate(['create-lesson']);
  }

  navigateToLessonDetails(lessonNumber: number) {
    this.router.navigate(['lesson-details/'+lessonNumber]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
