//Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnWordsComponent } from './learn-words/learn-words.component';
import { LearnGrammarComponent } from './learn-grammar/learn-grammar.component';
import { WidgetComponent } from './shared/components/widget.component';
import { SectionTitleComponent } from './dashboard/components/section-title.component';
import { CreateLessonComponent } from './learn-words/components/create-lesson.component';
import { LessonDetailsComponent } from './learn-words/components/lesson-details.component';
import { ButtonComponent } from './shared/components/button.component';
import { LoginComponent } from './login/login.component';

//Services
import { AuthService } from "./shared/services/auth.service";

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
    LessonDetailsComponent,
    ButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // Firebase services
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
