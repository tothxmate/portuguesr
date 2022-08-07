import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Translation } from '../interfaces/Translation';
import { LearnWordsService } from '../learn-words.service';

@Component({
  selector: 'page-create-lesson',
  template: `
    <div class="main-wrapper">
      <form [formGroup]="form">  
        <div class="top-wrapper">
          <input class="lesson-name" placeholder="Create lesson" formControlName="name">
          <div class="buttons-wrapper">
            <input type="file" class="file-upload" accept="image/png, image/gif, image/jpeg" (change)="onFileSelected($event)" #fileUpload>
            <!--<app-button color="var(--tertiary-color)" text="Upload image" (click)="fileUpload.click()"></app-button>-->
            <app-button color="var(--secondary-color)" text="Done" (click)="submitForm()"></app-button>
          </div>
        </div>
        <div class="form-wrapper">
          <table>
            <tr class="table-head-wrapper">
              <th>English</th>
              <th>Portuguese</th>
              <button (click)="addControl()" class="more-button">+</button>
            </tr>
            <tr *ngFor="let control of  translationFieldsAsFormArray.controls ;let i = index;" formArrayName='translations'>
              <td [formGroupName]="i">
                <input type="text" formControlName="portuguese">
              </td>
              <td [formGroupName]="i">
                <input type="text" formControlName="english">
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      height: 100%;
      width: 68vw;
    }
    .main-wrapper{
      width: 100%;
    }
    .top-wrapper{
      margin-top: 32px;
      margin-bottom: 32px;
    }
    .lesson-name{
      font-size: 32pt;
      background: white;
      border: none;
      display: inline-block;
      width: 50%;
      height: 100%;
    }
    .buttons-wrapper{
      float: right;
    }
    .file-upload{
      display:none;
    }
    app-button{
      margin-left: 1vw;
    }
    .form-wrapper{
      background-color: var(--main-color);
      border-radius: var(--border-radius);
      height: 100%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      height: calc(100vh - 120px);
      overflow-y: scroll;
      position: relative;
    }
    table{
      width: 100%;
      padding: 1vw;
    }
    .table-head-wrapper{
      position:sticky;
      top:0;
      height: 50px;
      background: white;
    }
    th {
      text-align: left;
    }
    td {
      padding-right: 1vw;
      padding-top: 1vw;
    }
    input {
      border-radius: 10px;
      border-width: 1px;
      border-color: aliceblue;
      padding-left:12px;
      height: 28px;
      width: 90%;
      /*box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;*/
    }
    .more-button {
      float: right;
      margin-right: 1vw;
      font-size: 23px;
      color: green;
      border-radius: 100%;
      width: 32px;
      height: 32px;
      background-color: white;
      border-width: 1px;
      border-color: aliceblue;
      position: absolute;
      right: 10px;
      top: 8px;
    }
  `]
})
export class CreateLessonComponent implements OnInit{    
  learnWordsService: LearnWordsService;
  fileName = '';
  imageFile: File | undefined;
  imageUrl: string | undefined;

  constructor(private fb: FormBuilder, learnWordsService: LearnWordsService) {
    this.learnWordsService = learnWordsService;
  }

  ngOnInit(): void {
    this.addControl()
    this.learnWordsService.getImageUrl().subscribe((value:any) => {
      this.imageUrl = value;
    });
  }

  form: any = this.fb.group({
    name: "",
    translations: this.fb.array([])
  });

  get translationFieldsAsFormArray(): any {
    return this.form.get('translations') as FormArray;
  }

  translation(): any {
    return this.fb.group({
      portuguese: this.fb.control(''),
      english: this.fb.control('')
    });
  }

  addControl(): void {
    this.translationFieldsAsFormArray.push(this.translation());
  }

  remove(i: number): void {
    this.translationFieldsAsFormArray.removeAt(i);
  }

  filterEmptyTranslationValue(translationValues: Translation[]): Translation[]{
    return translationValues.filter((translation: any) => translation.portuguese || translation.english)
  }

  async submitForm(): Promise<void> {
    const filteredTranslations = this.filterEmptyTranslationValue(this.form.value.translations)
    this.form.value.translations = filteredTranslations

    if(this.imageFile){
      await this.learnWordsService.uploadImage(this.imageFile)
      this.form.value.imageUrl = this.imageUrl;
    }

    this.learnWordsService.postLesson(this.form.value)
  }

  onFileSelected(event:any) {
    this.imageFile = event.target.files[0];
  }
}
