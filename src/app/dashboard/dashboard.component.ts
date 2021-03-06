import { Component, OnInit } from '@angular/core';

type Tile = {
  title: string,
  subtext: string
}

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="main-wrapper">
      <div class="statistics-wrapper">
          <widget *ngFor="let tile of statistics" [title]="tile.title" [subtext]="tile.subtext" [reversed]="true" [centered]="true"></widget>
      </div>
      <section-title title="Learn new words everyday!" subtext="What are you waiting for? Start your lesson by clicking the button below!" subtextRight="Latest lessons"></section-title>
      <div class="lessons-wrapper">
          <widget title="Start a new lesson" [titleBig]="true" titleColor="var(--tertiary-color)"></widget>
          <div class="lessons-inner-wrapper">
            <div class="lessons-wrapper">
              <widget title="Friends" [progress]="12" image="../assets/test/boy-iso-clay.png"></widget>
              <widget title="School" [progress]="44" image="../assets/test/1.jpeg"></widget>
            </div>
            <div class="lessons-wrapper">
              <widget title="Culture" [progress]="66"></widget>
              <widget title="Nationalities" [progress]="92"></widget>
            </div>
          </div>
      </div>
      <div class="news-wrapper">
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
    .statistics-wrapper{
      display: flex;
      flex: 1;
    }
    widget{
      flex: 1; 
    }
    .lessons-wrapper{
      display: flex;
      flex: 8;
    }
    .lessons-inner-wrapper{
      display: flex;
      flex: 2;
      flex-direction: column;
    }
    .side-wrapper{
      width: 15vw;
      display:flex;
    }
    .news-wrapper{
      flex:8
    }
  `]
})
export class DashboardComponent implements OnInit {
  statistics: Tile[] = [
    { subtext: "Words learned", title: "33"},
    { subtext: "Finished lessons", title: "22"},
    { subtext: "Learning streak", title: "11"},
    { subtext: "Hours spent", title: "44"},
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
