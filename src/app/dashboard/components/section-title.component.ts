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
        <p class="subtext-right">{{ subtextRight }}</p>
      </div>
    </div>
  `,
  styles: [`
    :host{
      flex: 1;
      margin: 1vw;
    }
    .section-title-wrapper{
      height: 100%;
      padding: 30px 0px 0px 0px;
      display: flex;
    }
    h2, p{
      margin: 0;
    }
    .section-right{
      margin-left: auto;
      margin-top: auto;
      margin-bottom: 2vw;
    }
    .subtext-right{
      font-weight:900;
    }
  `]
})
export class SectionTitleComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() subtext: string | undefined;
  @Input() subtextRight: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
