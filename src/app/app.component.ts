import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-wrapper">
      <app-navigation *ngIf="isLoggedIn"></app-navigation>
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
  isLoggedIn: boolean = false;
  constructor( authService: AuthService ){
    this.isLoggedIn = authService.isLoggedIn
  }
  title = 'portuguesr';
}
