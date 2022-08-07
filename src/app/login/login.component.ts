import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'page-login',
  template: `
    <div class="main-wrapper">
        <img src="../assets/logo.png" class="logo">
        <div class="google-btn-wrapper">
          <div class="google-btn" (click)="login()">
            <div class="google-icon-wrapper">
              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p class="btn-text"><b>Sign in with Google</b></p>
          </div>
        </div>
    </div>
  `,
  styles: [`
    .main-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100%;
    }
    img{
      margin-bottom: 3%;
    }
    .google-btn-wrapper{
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 30px;
    }
    .google-btn {
      width: 184px;
      height: 42px;
      background-color: #4285f4;
      border-radius: 2px;
      box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
    }
    .google-btn:hover {
      box-shadow: 0 0 6px #4285f4;
      cursor:pointer;
    }
    .google-btn:active {
      background: #1669F2;
    }
    .google-icon-wrapper {
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        background-color: #fff;
    }
    .google-icon {
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
    .btn-text {
      float: right;
      margin: 11px 11px 0 0;
      color:  #fff;
      font-size: 14px;
      letter-spacing: 0.2px;
      font-family: "Roboto";
    }
  `]
})
export class LoginComponent implements OnInit{
  authService: any;
  router: any;
  constructor( authService: AuthService, router: Router ) { 
    this.authService = authService
    this.router = router;
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.router.navigate(['learn-words'])
    }
  }

  login(): void {
    this.authService.GoogleAuth()
  }
}
