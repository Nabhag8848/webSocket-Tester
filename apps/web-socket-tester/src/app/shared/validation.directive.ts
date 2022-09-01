import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[webSocketTesterValidation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidationDirective, multi: true },
  ],
})
export class ValidationDirective implements Validator {
  constructor(private customValidator: CustomValidationService) {}

  validate(control: AbstractControl): { [key: string]: boolean } | null {
    const x = this.customValidator.urlPatternValidator()(control);
    console.log(x);
    return x;
  }
}
