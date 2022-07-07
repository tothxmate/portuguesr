import { Component } from '@angular/core';

type MenuItem = {
  title: String,
  icon: String
}

@Component({
  selector: 'app-navigation',
  template: `
    <div class="navigation-container">
      <img src="../assets/logo.png" class="logo">
      <ul class="navigation-ul">
        <li *ngFor="let navigationItem of navigationItems">
          <img [src]="navigationItem.icon" class="menu-item-icon">
          {{ navigationItem.title }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .navigation-container {
      width: 15vw;
      height: 100%;
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      flex: 1;
      padding: 1rem;
    }
    .logo {
      width: 100%;
    }
    .navigation-ul {
      padding-left: 10px;
    }
    .navigation-ul li {
      list-style: none;
      padding-top: 8%;
      padding-bottom: 8%;
    }
    .menu-item-icon{
      vertical-align: -7px;
    }
  `]
})

export class NavigationComponent {
  navigationItems: MenuItem[] = [
    { title: "Dashboard", icon: "../assets/menu-item-dashboard.png"},
    { title: "Learn words", icon: "../assets/menu-item-learn-words.png"},
    { title: "Learn grammar", icon: "../assets/menu-item-learn-grammar.png"},
    { title: "Media", icon: "../assets/menu-item-media.png"},
    { title: "Community", icon: "../assets/menu-item-community.png"}
  ];
  constructor(){
    console.log(this.navigationItems)
  }
}
