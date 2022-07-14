import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lesson } from './interfaces/Lesson';

@Injectable({
  providedIn: 'root',
})
export class LearnWordsService {
  constructor(private http: HttpClient) { }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>("https://localhost:7177/api/Lessons");
  }
}