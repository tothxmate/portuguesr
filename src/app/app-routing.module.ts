import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnGrammarComponent } from './learn-grammar/learn-grammar.component';
import { CreateLessonComponent } from './learn-words/components/create-lesson.component';
import { LearnWordsComponent } from './learn-words/learn-words.component';
import { LoginComponent } from './login/login.component';
import { LessonComponent } from './learn-words/components/lesson.component';
import { LessonDetailsComponent } from './learn-words/components/lesson-details.component';
import { WriteDialogueComponent } from './write-dialogue/write-dialogue.component';

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'learn-words', component: LearnWordsComponent, canActivate: [AuthGuard] },
  { path: 'learn-grammar', component: LearnGrammarComponent, canActivate: [AuthGuard] },
  { path: 'create-lesson', component: CreateLessonComponent, canActivate: [AuthGuard] },
  { path: 'lesson-details/:id', component: LessonDetailsComponent, canActivate: [AuthGuard] },
  { path: 'lesson/:id', component: LessonComponent, canActivate: [AuthGuard] },
  { path: 'write-dialogue', component: WriteDialogueComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
