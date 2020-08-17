import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

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

  getFormattedNameFromServer(airportName: string, fmt: string): Observable<string> {

    let url;

    if (fmt === 'long') {
      url = 'http://angular-at.azurewebsites.net/api/airport/fullName';
    } else {
      url = 'http://angular-at.azurewebsites.net/api/airport/code';
    }

    const params = { name: airportName };
    const headers = { Accept: 'application/json' };

    return this.http.get<string>(url, {params, headers});

  }
}
