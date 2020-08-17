import { Pipe, PipeTransform } from '@angular/core';
import { AirportService } from './airport.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  constructor(private airportService: AirportService) {
  }

  transform(value: string, fmt: string, lang: string): string {
    return this.airportService.getFormattedName(value, fmt);
  }

}
