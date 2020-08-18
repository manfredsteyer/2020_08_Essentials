
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function validateCity(allowed: string[]): ValidatorFn {

    return (c: AbstractControl): ValidationErrors => {
        if (allowed.includes(c.value)) {
            return {};
        }
        return { city: true };
    };

}
