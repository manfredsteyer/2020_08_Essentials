import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  message: string;

  // private http: HttpClient;

  constructor(private http: HttpClient) {
    // this.http = http;
   }

  ngOnInit(): void {
  }

  search(): void {
    // this.flights = [
    //   { id: 17, from: 'Frankfurt', to: 'Kognito', date: '2020-08-17T19:00+02:00', delayed: false},
    //   { id: 18, from: 'Frankfurt', to: 'Flagranti', date: '2020-08-17T19:30+02:00', delayed: false},
    //   { id: 19, from: 'Frankfurt', to: 'Mallorca', date: '2020-08-17T19:45+02:00', delayed: false},
    // ];


    const url = 'http://www.angular.at/api/flight/';
    const params = new HttpParams()
                        .set('from', this.from)
                        .set('to', this.to);

    const headers = new HttpHeaders()
                        .set('X-Info', 'Manfrd was here!')
                        .set('Accept', 'application/json');


    this.http.get<Flight[]>(url, { params, headers }).subscribe(
      flights => {
          this.flights = flights;
      }
    );

  }

  select(flight: Flight) {
    this.selectedFlight = flight;
  }

  save(): void {

    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
            .set('Accept', 'application/json');

    this.http
    .post<Flight>(url, this.selectedFlight, { headers })
    .subscribe({
      next: flight => {
        this.selectedFlight = flight;
        this.message = 'Success!';
      },
      error: errResponse => {
        console.error('Error', errResponse);
        this.message = 'Error: ';
      }
    });
  }

}
