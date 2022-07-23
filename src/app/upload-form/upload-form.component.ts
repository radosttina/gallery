import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { UploadableImage } from '../models/uploadableImage.model';
import { ImagesService } from '../services/images.service';

enum UPLOAD_STATUSES {
  READY_FOR_UPLOAD = 'READY_FOR_UPLOAD',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.less'],
})
export class UploadFormComponent implements OnInit {
  @Input() uuid: string = '';
  @Output() remove = new EventEmitter<string>();

  uploadStatus: UPLOAD_STATUSES = UPLOAD_STATUSES.READY_FOR_UPLOAD;
  UPLOAD_STATUSES = UPLOAD_STATUSES;

  imageForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    tags: new FormControl('', { nonNullable: true }),
    file: new FormControl('', Validators.required),
  });

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {}

  uploadImage(): void {
    this.uploadStatus = UPLOAD_STATUSES.LOADING;
    this.imageService
      .upload(this.imageForm.value as UploadableImage)
      .subscribe({
        next: () => (this.uploadStatus = UPLOAD_STATUSES.SUCCESS),
        error: () => (this.uploadStatus = UPLOAD_STATUSES.ERROR),
        complete: () => console.log('complete'),
      });
  }

  removeImage(): void {
    this.remove.emit(this.uuid);
  }
}
