import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  urlPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value.inputUrl) {
        return null;
      }
      const pattern =
        '^(wss?://)(([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})|([a-zA-Z]+)):[0-9]{1,5}$';
      const regex = new RegExp(pattern);
      const isValidUrl = regex.test(control.value.inputUrl);
      console.log(control.value);
      console.log(isValidUrl);
      return isValidUrl ? null : { invalidUrl: true };
    };
  }
}
