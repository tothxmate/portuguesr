import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-create-lesson',
  template: `
    <div class="main-wrapper">
      <div class="lessons-wrapper">
      </div>
    </div>
  `,
  styles: [`
    :host{
      display: flex;
      height: 100%;
    }
  `]
})
export class CreateLessonComponent implements OnInit {
  formElements = [
    { title: "General expressions", subtext: "33%"},
    { title: "Friends", subtext: "13%"},
    { title: "Family", subtext: "67%"}
  ];

  navigateToLesson() {
    this.router.navigate(['items']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
