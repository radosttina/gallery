import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UploadableImage } from '../models/uploadableImage.model';
import { debounce, interval } from 'rxjs';
import ImageFormBuilder from '../helpers/ImageFormBuilder';

const DEBOUNCE_INTERVAL_MS = 500;

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.less'],
})
export class UploadFormComponent implements OnInit {
  @Output() formUpdate = new EventEmitter<UploadableImage[]>();

  newImagesCount: number = 1;
  uploadedImages: UploadableImage[] = [];

  uploadFormGroup = new FormGroup({});

  //TODO: Dependency Injection?
  imageFormBuilder = new ImageFormBuilder();

  constructor() {
    this.uploadFormGroup.addControl(
      ...this.imageFormBuilder.createNewImageFormGroup()
    );
  }

  ngOnInit(): void {
    this.uploadFormGroup.valueChanges
      .pipe(debounce((_) => interval(DEBOUNCE_INTERVAL_MS)))
      .subscribe((formValue) => {
        console.log(formValue);
        this.formUpdate.emit(Object.values(formValue));
      });
  }

  logFile(event: Event): void {
    console.log(event);
  }

  getImageFormNames(): string[] {
    return Object.keys(this.uploadFormGroup.controls);
  }

  addNewImageForm(): void {
    this.uploadFormGroup.addControl(
      ...this.imageFormBuilder.createNewImageFormGroup()
    );
  }
}
