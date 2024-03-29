import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

type MenuItem = {
  title: string,
  icon: string,
  routerLink: string
}

@Component({
  selector: 'app-navigation',
  template: `
    <div class="navigation-container">
      <img src="../assets/logo.png" class="logo">
      <ul class="navigation-ul">
        <li *ngFor="let navigationItem of navigationItems">
          <a [routerLink]="navigationItem.routerLink">
            <img [src]="navigationItem.icon" class="menu-item-icon">
            {{ navigationItem.title }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .navigation-container {
      width: 12vw;
      margin: 1vw;
      margin-right: 3vw;
      height: 100%;
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      padding: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      flex-direction: column;
    }
    .logo{
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .navigation-ul {
      padding-left: 1.2rem;
    }
    .navigation-ul li {
      list-style: none;
      padding-top: 8%;
      padding-bottom: 8%;
    }
    .menu-item-icon{
      vertical-align: -7px;
    }
    a{
      text-decoration: none;
      color: var(--text-color);
    }
  `]
})

export class NavigationComponent {
  navigationItems: MenuItem[] = [
    //{ title: "Dashboard", icon: "../assets/menu-item-dashboard.png", routerLink: ""},
    { title: "Learn words", icon: "../assets/menu-item-learn-words.png", routerLink: "learn-words"},
    { title: "Learn grammar", icon: "../assets/menu-item-learn-grammar.png", routerLink: "learn-grammar"},
    { title: "Write a dialogue", icon: "../assets/menu-item-write-dialogue.png", routerLink: "write-dialogue"}
  ];
}
