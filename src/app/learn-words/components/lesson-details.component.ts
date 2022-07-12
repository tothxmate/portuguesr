import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-lesson-details',
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
export class LessonDetailsComponent implements OnInit {
  
  navigateToLesson() {
    this.router.navigate(['items']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
