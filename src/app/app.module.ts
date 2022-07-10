import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnWordsComponent } from './learn-words/learn-words.component';
import { LearnGrammarComponent } from './learn-grammar/learn-grammar.component';
import { TileComponent } from './dashboard/components/tile.component';
import { SectionTitleComponent } from './dashboard/components/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LearnWordsComponent,
    LearnGrammarComponent,
    TileComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
