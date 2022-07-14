import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget',
  template: `
    <div class="widget-inner-wrapper">
        <h2>{{ title }}</h2>
        <p>{{ subtext }}</p>
    </div>
  `,
  styles: [`
    :host{
      flex: 1;
      padding: 1vw;
    }
    .widget-inner-wrapper{
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      height: 100%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    h2, p{
      margin: 0;
      padding: 10px;
    }
  `]
})
export class WidgetComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() subtext: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
