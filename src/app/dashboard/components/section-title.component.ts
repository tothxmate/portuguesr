import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'section-title',
  template: `
    <div class="section-title-wrapper">
      <div class="section-left">
        <h2>{{ title }}</h2>
        <p>{{ subtext }}</p>
      </div>
      <div class="section-right">
        <p>subtext</p>
      </div>
    </div>
  `,
  styles: [`
    :host{
      flex: 1;
      padding: 1vw;
    }
    .section-title-wrapper{
      height: 100%;
    }
    h2, p{
      margin: 0;
      padding: 10px;
    }
    .section-left{
      display:inline-block;
    }
    .section-right{
      float:right;
    }
  `]
})
export class SectionTitleComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() subtext: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
