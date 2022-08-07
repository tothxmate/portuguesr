import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class WriteDialogueService {
  db: AngularFireDatabase;
  grammarContent: Observable<any>;
  grammarContentRef: AngularFireObject<unknown>;

  constructor(db: AngularFireDatabase, private storage: AngularFireStorage) { 
    this.db = db;
    this.grammarContent = db.object('grammar').valueChanges();
    this.grammarContentRef = db.object('grammar');
  }

  getGrammarServiceContent(): Observable<any>{
    return this.grammarContent
  }

  postGrammarServiceContent(htmlString: any): void{
    this.grammarContentRef.update({content: htmlString})
  }
}