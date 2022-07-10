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
          <tile *ngFor="let tile of statistics" [title]="tile.title" [subtext]="tile.subtext"></tile>
      </div>
      <section-title title="Learn new words everyday!" subtext="What are you waiting for? Start your lesson by clicking the button below!"></section-title>
      <div class="lessons-wrapper">
          <tile title="tttttttt" subtext="sssssss"></tile>
          <div class="lessons-inner-wrapper">
            <div class="lessons-wrapper">
              <tile title="tttttttt" subtext="sssssss"></tile>
              <tile title="tttttttt" subtext="sssssss"></tile>
            </div>
            <div class="lessons-wrapper">
              <tile title="tttttttt" subtext="sssssss"></tile>
              <tile title="tttttttt" subtext="sssssss"></tile>
            </div>
          </div>
      </div>
      <div class="news-wrapper">
      </div>
    </div>
    <div class="side-wrapper">
      <tile height="100px" title="test" subtext="2222"></tile>
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
