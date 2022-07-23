import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { UploadFormComponent } from '../upload-form/upload-form.component';

@Component({
  selector: 'app-upload-screen',
  templateUrl: './upload-screen.component.html',
  styleUrls: ['./upload-screen.component.less'],
})
export class UploadScreenComponent implements OnInit {
  @ViewChildren(UploadFormComponent)
  imageForms!: QueryList<UploadFormComponent>;
  imageFormUUIDs: string[] = [uuidv4()];

  constructor() {}

  ngOnInit(): void {}

  removeImageForm(uuid: string): void {
    console.log(uuid);
    this.imageFormUUIDs = this.imageFormUUIDs.filter(
      (imageUUID) => imageUUID !== uuid
    );
  }
  addNewImageForm(): void {
    this.imageFormUUIDs = [...this.imageFormUUIDs, uuidv4()];
  }

  uploadImages(): void {
    this.imageForms.forEach((form) => form.uploadImage());
  }
}
