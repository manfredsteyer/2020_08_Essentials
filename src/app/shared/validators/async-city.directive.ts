import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { FlightService } from 'app/flight-booking/flight-search/flight.service';

@Directive({
  selector: 'input[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityDirective,
      multi: true
    }
  ]
})
export class AsyncCityDirective implements AsyncValidator {

  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {

    return this.flightService.find(control.value, '').pipe(
      delay(4000),
      map(flights => {
        return flights.length > 0 ? {} : { asyncCity: true };
      })
    );

  }

}
