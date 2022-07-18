import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-learn-grammar',
  template: `
    <div class="main-wrapper">
        <h1>Learn grammar</h1>
        <app-button color="var(--secondary-color)" text="Edit"></app-button>
    </div>
  `,
  styles: [`
    .main-wrapper{
      width: 68vw;
    }
    h1{
      display:inline-block;
    }
    app-button{
      margin-top: 1vw;
      float:right;
    }
  `]
})
export class LearnGrammarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}
