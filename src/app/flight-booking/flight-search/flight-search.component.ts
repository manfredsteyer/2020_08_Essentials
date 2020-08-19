import { Component, OnInit, Inject } from '@angular/core';
import { Flight } from '../../model/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService, DummyFlightService, DefaultFlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    { provide: FlightService, useClass: DefaultFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {

  from = 'Graz';
  to = 'Hamburg';
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket = {
    3: true,
    4: false,
    5: true
  };

  message: string;

  // private http: HttpClient;

  constructor(
    private flightService: FlightService,
    private http: HttpClient) {
    // this.http = http;
   }

  ngOnInit(): void {
  }

  search(): void {

    if (!this.from || !this.to) {
      return;
    }

    // this.flights = [
    //   { id: 17, from: 'Frankfurt', to: 'Kognito', date: '2020-08-17T19:00+02:00', delayed: false},
    //   { id: 18, from: 'Frankfurt', to: 'Flagranti', date: '2020-08-17T19:30+02:00', delayed: false},
    //   { id: 19, from: 'Frankfurt', to: 'Mallorca', date: '2020-08-17T19:45+02:00', delayed: false},
    // ];

    this.flightService.find(this.from, this.to).subscribe({
      next: flights => {
          this.flights = flights;
      },
      error: err => {
        console.error('err', err);
      }
    });

  }

  select(flight: Flight) {
    this.selectedFlight = flight;
  }

  save() {
    this.flightService.save(this.selectedFlight).subscribe(
      flight => {
        this.selectedFlight = flight;
      }
    );
  }

}
