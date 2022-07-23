import { Component, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploaderComponent,
      multi: true,
    },
  ],
})

// https://github.com/NetanelBasal/ng-file-upload
export class FileUploaderComponent implements ControlValueAccessor {
  file: File | null = null;
  onChange: Function = () => {};

  @HostListener('change', ['$event.target.files']) async emitFiles(
    event: FileList
  ) {
    const file = event && event.item(0);
    try {
      const base64file = await this.encodeImageFileAsURL(file as File);
      this.onChange(base64file);
    } catch {
      this.onChange(null);
    }

    this.file = file;
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}
  writeValue(value: null): void {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}

  ngOnInit(): void {}

  encodeImageFileAsURL(file: File) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}
