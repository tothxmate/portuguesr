import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnGrammarComponent } from './learn-grammar/learn-grammar.component';
import { LearnWordsComponent } from './learn-words/learn-words.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'learn-words', component: LearnWordsComponent },
  { path: 'learn-grammar', component: LearnGrammarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
