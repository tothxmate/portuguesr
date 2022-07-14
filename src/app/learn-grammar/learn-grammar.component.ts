import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-learn-grammar',
  template: `
    <div class="main-wrapper">
        <h1>Learn grammar</h1>
        <app-button color="var(--secondary-color)" text="Edit"></app-button>
        <angular-editor [placeholder]="'Enter text here...'"></angular-editor>
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
      float:right;
    }
  `]
})
export class LearnGrammarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}
