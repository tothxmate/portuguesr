import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnWordsComponent } from './learn-words/learn-words.component';
import { LearnGrammarComponent } from './learn-grammar/learn-grammar.component';
import { WidgetComponent } from './shared/components/widget.component';
import { SectionTitleComponent } from './dashboard/components/section-title.component';
import { CreateLessonComponent } from './learn-words/components/create-lesson.component';
import { LessonDetailsComponent } from './learn-words/components/lesson-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LearnWordsComponent,
    LearnGrammarComponent,
    WidgetComponent,
    SectionTitleComponent,
    CreateLessonComponent,
    LessonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
