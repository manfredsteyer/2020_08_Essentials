import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor() { }

  getFormattedName(airportName: string, fmt: string): string {
    let short, long;

    switch (airportName) {

      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüddel Helmut Schmidt';
      break;

      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
      break;

      case 'München':
        short = 'MUC';
        long = 'Airport Munich';
      break;

      default:
        short = long = airportName;

    }

    if (fmt === 'long') {
      return long;
    }
    return short;
  }
}
