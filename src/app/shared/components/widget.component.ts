import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'widget',
  template: `
    <div 
      [ngStyle]="{
        'flex-direction': reversed ? 'column-reverse' : 'column', 
        'justify-content' : centered ? 'center' : 'end'
      }"
      [ngClass]="['widget-inner-wrapper', href ? 'hoverable' : '']"
    >
        <h2 [ngStyle]="{
          'font-size': titleBig && '42px',
          'color': titleColor && titleColor
        }">{{ title }}</h2>
        <p *ngIf="subtext">{{ subtext }}</p>
        <div *ngIf="progress" class="progress-wrapper">
          <progress [value]="progress" max="100"> </progress>
          <small>{{ progress }}%</small>
        </div>
        <img *ngIf="image" [src]="image"/>
        <img *ngIf="editable" src="../assets/cogwheel.png" class="settings-icon" (click)="showEditScreen.emit()">
    </div>
  `,
  styles: [`
    :host{
      padding: 1vw;
    }
    .widget-inner-wrapper{
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      height: 100%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      padding: 10px;
      padding-left: 20px;
      position: relative;
      overflow: hidden;
    }
    .widget-inner-wrapper:hover > .settings-icon{
      display:block;
    }
    .hoverable:hover{
      cursor: pointer;
    }
    h2, p{
      margin: 0;
      padding: 0;
    }
    img{
      position: absolute;
      right: 0;
      top:0;
      height: 100%;
      z-index: 0;
    }
    .progress-wrapper{
      display: flex;
      flex-direction: row;
      z-index: 1;
    }
    small{
      margin-left: 10px;
      margin-top: -2px;
    }
    progress::-moz-progress-bar { background-color: var(--secondary-color); }
    progress::-webkit-progress-value { background-color: var(--secondary-color); }
    progress { color: var(--secondary-color); }
    .settings-icon{
      width: 30px;
      height: 30px;
      top: auto;
      right: 10px;
      bottom: 13px;
      display: none;
    }
  `]
})
export class WidgetComponent{
  @Input() title: string | undefined;
  @Input() subtext: string | undefined;
  @Input() reversed: boolean | undefined;
  @Input() centered: boolean | undefined;
  @Input() titleBig: boolean | undefined;
  @Input() titleColor: string | undefined;
  @Input() image: string | undefined;
  @Input() progress: number | undefined;
  @Input() progressColor: string | undefined;
  @Input() href: string | undefined;
  @Input() editable: boolean | undefined;
  @Output() showEditScreen = new EventEmitter();
}
