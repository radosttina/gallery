import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';
import { ImagesService } from './services/images.service';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { HomeComponent } from './home/home.component';
import { UploadScreenComponent } from './upload-screen/upload-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageComponent,
    UploadButtonComponent,
    UploadFormComponent,
    HomeComponent,
    UploadScreenComponent,
    FileUploaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
