import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tile',
  template: `
    <div class="tile-inner-wrapper">
        <h2>{{ title }}</h2>
        <p>{{ subtext }}</p>
    </div>
  `,
  styles: [`
    :host{
      flex: 1;
      padding: 1vw;
    }
    .tile-inner-wrapper{
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      height: 100%;
    }
    h2, p{
      margin: 0;
      padding: 10px;
    }
  `]
})
export class TileComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() subtext: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
