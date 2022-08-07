import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lesson } from './interfaces/Lesson';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { finalize } from 'rxjs/operators';
import { rejects } from 'assert';
import { Translation } from './interfaces/Translation';

@Injectable({
  providedIn: 'root',
})
export class LearnWordsService {
  db: AngularFireDatabase;
  lessonNames: Observable<string[]>;
  lessonContent: Observable<Translation[]> | undefined;
  lessonNamesRef: AngularFireList<unknown>;
  lessonContentRef: AngularFireList<unknown>;
  downloadURL: Observable<string> | undefined;
  imageUrl: BehaviorSubject<string | undefined>;

  constructor(db: AngularFireDatabase, private storage: AngularFireStorage) { 
    this.db = db;
    this.lessonNames = db.list<string>('lessons/lessonNames').valueChanges();
    this.lessonNamesRef = db.list('lessons/lessonNames');
    this.lessonContentRef = db.list('lessons/lessonContent');
    this.imageUrl = new BehaviorSubject<string | undefined>("");
  }

  getLessonNames(): Observable<any>{
    return this.lessonNamesRef.snapshotChanges();
  }

  getLessonNameByKey(key: string): Observable<any>{
    return this.db.object<any>('lessons/lessonNames/'+key).valueChanges();
  }

  getLessonContent(lessonId: string): Observable<Translation[]>{
    this.lessonContent = this.db.list<Translation>('lessons/lessonContent/'+lessonId).valueChanges();
    return this.lessonContent!
  }

  postLesson(lesson: Lesson): void{
    const newLessonName = this.lessonNamesRef.push(lesson.name)
    this.lessonContentRef.update(newLessonName.key!,lesson.translations)
  }

  deleteLesson(key: string): void{
    this.lessonNamesRef.remove(key)
    this.lessonContentRef.remove(key)
  }

  uploadImage(file: File):any{
    var n = Date.now();
    const filePath = `LessonsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`LessonsImages/${n}`, file);
    return new Promise(resolve => {
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                resolve(this.setImageUrl(url))
              }
            });
          })
        ).subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    });
  }

  getImageUrl(): Observable<string | undefined> {
    return this.imageUrl.asObservable();
  }
  setImageUrl(newValue:any): void {
    this.imageUrl.next(newValue);
  }
}