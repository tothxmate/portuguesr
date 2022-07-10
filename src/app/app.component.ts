import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-wrapper">
      <app-navigation></app-navigation>
      <div class="router-outlet-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .app-wrapper { 
      background-color: var(--background-color);
      display: flex;
    }
    .router-outlet-wrapper {
      height: 100%;
    }
  `]
})
export class AppComponent {
  title = 'portuguesr';
}
