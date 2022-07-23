import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image.model';
import { environment } from 'src/environments/environment';
import { catchError, of, retry, delay } from 'rxjs';
import { UploadableImage } from '../models/uploadableImage.model';
import { UploadStatus } from '../models/uploadstatus.model';

const API_PATH = environment.apiPath;

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  images$ = this.http.get<Image[]>(`${API_PATH}/images`).pipe(
    catchError(() => of([])),
    retry(3)
  );

  constructor(private http: HttpClient) {}

  upload(image: UploadableImage) {
    return this.http.post<UploadStatus>(`${API_PATH}/images`, image);
  }
}
