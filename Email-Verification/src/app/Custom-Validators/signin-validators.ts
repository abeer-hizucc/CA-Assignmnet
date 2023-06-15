import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

export class SigninValidators {
  static asyncCheckConfirmPassword: AsyncValidatorFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
    return new Observable((observer) => {
      setTimeout(() => {
        if (control.value !== control.parent?.get('password')?.value) {
          observer.next({ 'confirmPassword': true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 2000);
    });
  };
}
