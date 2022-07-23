import { FormGroup, FormControl, Validators } from '@angular/forms';

class ImageFormBuilder {
  private counter: number = 0;

  createNewImageFormGroup = (): [name: string, control: FormGroup] => {
    this.counter += 1;
    return [
      `image${this.counter}`,
      new FormGroup({
        title: new FormControl('', { nonNullable: true }),
        tags: new FormControl('', { nonNullable: true }),
        file: new FormControl('', Validators.required),
      }),
    ];
  };
}

export default ImageFormBuilder;
