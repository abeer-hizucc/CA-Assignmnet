import { AbstractControl } from '@angular/forms';

export function ValidateImage(control: AbstractControl): { [key: string]: any } | null {
  const file = control.value;
  const MAX_SIZE = 5242880; // 5MB in bytes

  if (file) {
    if (file.size > MAX_SIZE) {
      return { 'maxSizeExceeded': true };
    }

    const acceptedExtensions = ['image/jpeg', 'image/jpg'];

    if (file && file.type && !acceptedExtensions.includes(file.type)) {
      return { 'invalidFileExtension': true };
    }
  }

  return null;
}