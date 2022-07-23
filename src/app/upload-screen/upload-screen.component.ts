import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, of, delay } from 'rxjs';
import { finalize, catchError, switchMap } from 'rxjs/operators';

import { ImagesService } from '../services/images.service';
import { UploadableImage } from '../models/uploadableImage.model';

@Component({
  selector: 'app-upload-screen',
  templateUrl: './upload-screen.component.html',
  styleUrls: ['./upload-screen.component.less'],
})
export class UploadScreenComponent implements OnInit {
  counter: number = 0;
  uploadProgress: number = 0;
  uploadDetails: UploadableImage[] = [];
  images$ = new BehaviorSubject<UploadableImage[]>([]);
  uploadImages$ = this.images$.pipe(
    switchMap((images) =>
      forkJoin(
        images.map((image: UploadableImage) =>
          this.service.upload(image).pipe(
            delay(
              Math.random() * 10000
            ) /* Used just to mock the progress indicator functionality */,
            catchError((errors) => of(errors)),
            finalize(() => {
              this.calculateProgress(++this.counter, images.length);
            })
          )
        )
      )
    )
  );

  constructor(private service: ImagesService) {}

  ngOnInit(): void {}

  updateUploadDetails(details: UploadableImage[]): void {
    this.uploadDetails = details;
  }

  onUpload(): void {
    this.images$.next(this.uploadDetails);
  }

  calculateProgress(completedRequest: number, totalRequest: number) {
    this.uploadProgress = (completedRequest / totalRequest) * 100;
  }
}
