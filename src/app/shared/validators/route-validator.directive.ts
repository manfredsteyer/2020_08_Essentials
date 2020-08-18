import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, FormGroup, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { FlightService } from 'app/flight-booking/flight-search/flight.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: 'form[route]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: RouteValidatorDirective,
      multi: true
    }
  ]
})
export class RouteValidatorDirective implements AsyncValidator {

  @Input() fromFieldName = 'from';
  @Input() toFieldName = 'to';

  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    const group = control as FormGroup;

    const from = group.controls[this.fromFieldName];
    const to = group.controls[this.toFieldName];

    if (!from || !to) {
      return of({});
    }

    return this.flightService.find(from.value, to.value).pipe(
      map(flights => flights.length > 0 ?
        {} :
        { route: 'no flights for this route'})
    );

  }


}
