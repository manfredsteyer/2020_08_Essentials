import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportService } from './airport.service';

@Pipe({
  name: 'asyncCity',
  pure: true
})
export class AsyncCityPipe implements PipeTransform {

  constructor(private airportService: AirportService) {
  }

  transform(value: string, fmt: string): Observable<string> {
    return this.airportService.getFormattedNameFromServer(value, fmt);
  }

}
