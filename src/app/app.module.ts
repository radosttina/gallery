import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';
import { ImagesService } from './services/images.service';
import { UploadButtonComponent } from './upload-button/upload-button.component';

@NgModule({
  declarations: [AppComponent, ImageListComponent, ImageComponent, UploadButtonComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ImagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
