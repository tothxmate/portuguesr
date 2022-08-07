import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { LearnGrammarService } from './learn-grammar.service';

@Component({
  selector: 'page-learn-grammar',
  template: `
    <div class="main-wrapper">
        <h1>Learn grammar</h1>
        <app-button (click)="saveContent()" color="var(--secondary-color)" text="Save"></app-button>
        <div class="NgxEditor__Wrapper" *ngIf="isContentLoaded">
          <ngx-editor-menu [editor]="editor"> </ngx-editor-menu>
          <ngx-editor
            [editor]="editor"
            [(ngModel)]="html"
            [disabled]="false"
            [placeholder]="'Type here...'"
          ></ngx-editor>
        </div>
        <app-loading-indicator *ngIf="!isContentLoaded"></app-loading-indicator>
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
  editor: Editor;
  html: string = '';
  isContentLoaded: boolean = false;
  learnGrammarService: LearnGrammarService
  constructor(learnGrammarService: LearnGrammarService) { 
    this.editor = new Editor();
    this.learnGrammarService = learnGrammarService
    this.learnGrammarService.getGrammarServiceContent().subscribe((data:any)=>{
      this.isContentLoaded = true
      this.html = data.content
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  saveContent():void {
    this.learnGrammarService.postGrammarServiceContent(this.html)
  }
}
