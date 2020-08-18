import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundtripDirective,
      multi: true
    }
  ]
})
export class RoundtripDirective implements Validator {

  constructor() { }

  @Input() fromFieldName = 'from';
  @Input() toFieldName = 'to';

  validate(control: AbstractControl): ValidationErrors {
    const group = control as FormGroup;

    const from = group.controls[this.fromFieldName];
    const to = group.controls[this.toFieldName];

    if (!from || !to) {
      return {};
    }

    if (from.value === to.value) {
      return {
        roundtrip: true
      };
    }

    return {};

  }

}
