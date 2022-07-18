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
      <div class="right-section">
        <profile-widget></profile-widget>
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
    .right-section{
      width: 100%;
      padding-right: 1vw;
    }
  `]
})
export class AppComponent {
  isLoggedIn: boolean = false;
  authService: any;

  constructor( authService: AuthService ){
    this.authService = authService
    this.isLoggedIn = authService.isLoggedIn
  }
}
