import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'page-create-lesson',
  template: `
    <div class="main-wrapper">
      <h1>Create lesson</h1>
      <div class="buttons-wrapper">
        <app-button color="var(--tertiary-color)" text="Upload image"></app-button>
        <app-button color="var(--secondary-color)" text="Done"></app-button>
      </div>
      <div class="form-wrapper">
        <form [formGroup]="translationForm">
        <table>
          <tr class="table-head-wrapper">
            <th>English</th>
            <th>Portuguese</th>
          </tr>
          <tr *ngFor="let number of formLength">
            <td>
              <input id="english" type="text" formControlName="english">
            </td>
            <td>
              <input id="portuguese" type="text" formControlName="portuguese">
            </td>
          </tr>
        </table>
        <button (click)="addFormElement()" class="more-button">+</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      height: 100%;
      width: 68vw;
    }
    .main-wrapper{
      width: 100%;
    }
    h1{
      display: inline-block;
    }
    .buttons-wrapper{
      margin-top: 32px;
      float: right;
    }
    .form-wrapper{
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      height: 100%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    form{
      height: calc(100vh - 100px);
      overflow-y: scroll;
    }
    table{
      width: 100%;
      padding: 1vw;
    }
    .table-head-wrapper{
      position:sticky;
      top:0;
      height: 50px;
    }
    th {
      text-align: left;
    }
    td {
      padding-right: 1vw;
      padding-top: 1vw;
    }
    input {
      border-radius: 10px;
      border-width: 1px;
      border-color: aliceblue;
      padding-left:12px;
      height: 28px;
      width: 90%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .more-button {
      float: right;
      margin-right: 1vw;
      font-size: 23px;
      color: green;
      border-radius: 100%;
      width: 32px;
      height: 32px;
      background-color: white;
      border-width: 1px;
      border-color: aliceblue;
    }
  `]
})
export class CreateLessonComponent implements OnInit {
  formLength = Array(1);
  translationForm = new FormGroup({
    english: new FormControl(''),
    portuguese: new FormControl(''),
  });

  navigateToLesson() {
    this.router.navigate(['items']);
  }

  addFormElement() {
    const newFormLength = this.formLength.length+1
    this.formLength = Array(newFormLength)
    console.warn(this.translationForm)
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
