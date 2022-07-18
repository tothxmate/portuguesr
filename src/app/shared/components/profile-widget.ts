import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'profile-widget',
  template: `
    <div class="widget-inner-wrapper" (click)="handleClick()">
      <div>
        <p>Welcome back,</p>
        <h2>{{ name }}</h2>
      </div>
      <div class="img-wrapper">
        <img src="./assets/arrow-down.png"/>
      </div>
    </div>
    <div *ngIf="showDropdown" class="widget-inner-wrapper dropdown">
        <app-button text="Logout" color="var(--tertiary-color)" (click)="logout()"></app-button>
    </div>
  `,
  styles: [`
    :host{
      padding-top: 1vw;
      padding-left: 1vw;
      display: flex;
      flex-direction: column;
    }
    .widget-inner-wrapper{
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      padding: 10px;
      padding-left: 20px;
    }
    .widget-inner-wrapper:hover{
      cursor: pointer;
    }
    h2, p{
      margin: 0;
      padding: 0;
    }
    .img-wrapper{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dropdown{
      text-align:center;
      margin-top: 10px;
    }
  `]
})
export class ProfileWidget {
  name: string;
  authService: any;
  showDropdown: boolean = false;

  constructor( authService: AuthService ){
    this.authService = authService
    this.name = JSON.parse(localStorage.getItem('user')!) ? JSON.parse(localStorage.getItem('user')!).displayName.split(" ")[0] : "";
  }

  logout(): void {
    this.authService.SignOut()
  }

  handleClick(){
    this.showDropdown = !this.showDropdown
  }
}
