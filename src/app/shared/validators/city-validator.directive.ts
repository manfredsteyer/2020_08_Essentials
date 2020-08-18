import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {

  @Input() city = [];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;

    if (this.city.includes(value)) {
      return {};
    }

    return {
      city: {
        value: value,
        accepted: this.city,
        tryAgain: 2023
      }
    };

  }


}
