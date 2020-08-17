import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';

// @Injectable({
//   providedIn: 'root'
// })
export abstract class FlightService {

                                  //   v---- .subscribe(...)
  abstract find(from: string, to: string): Observable<Flight[]>;

}

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight/';
    const params = new HttpParams()
                        .set('from', from)
                        .set('to', to);

    const headers = new HttpHeaders()
                        .set('X-Info', 'Manfrd was here!')
                        .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }

}

@Injectable()
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 17, from: 'Frankfurt', to: 'Kognito', date: '2020-08-17T19:00+02:00', delayed: false},
      { id: 18, from: 'Frankfurt', to: 'Flagranti', date: '2020-08-17T19:30+02:00', delayed: false},
      { id: 19, from: 'Frankfurt', to: 'Mallorca', date: '2020-08-17T19:45+02:00', delayed: false},
    ]);
  }
}
