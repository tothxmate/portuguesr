import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button 
      [ngStyle]="customStyle"
      [style.backgroundColor]="color">{{ text }}</button>
  `,
  styles: [`
    :host{
        flex: 1;
    }
    button {
        border-radius: 8px;
        border-width: 0;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        list-style: none;
        margin: 0;
        padding: 10px 12px;
        text-align: center;
        transition: all 200ms;
        vertical-align: baseline;
        white-space: nowrap;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }
  `]
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Input() customStyle: { [klass: string]: any; } | null = null;

  constructor() {

   }

  ngOnInit(): void {

  }

}
