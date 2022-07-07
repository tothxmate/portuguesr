import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-wrapper">
      <app-navigation></app-navigation>
    </div>
  `,
  styles: [`
    .app-wrapper { 
      background-color: var(--background-color);
      display: flex;
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'portuguesr';
}
