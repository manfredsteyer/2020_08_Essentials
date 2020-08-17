import { Component, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { Passenger } from '../../model/passenger';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent implements OnInit {

  name: string;
  firstName: string;
  passengers: Array<Passenger> = [];
  selectedPassenger: Passenger;

  message: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  search(): void {

    const url = 'http://www.angular.at/api/passenger/';
    const params = new HttpParams()
                        .set('name', this.name)
                        .set('firstName', this.firstName);

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');


    this.http.get<Passenger[]>(url, { params, headers }).subscribe(
      passengers => {
          this.passengers = passengers;
      }
    );

  }

  select(passenger: Passenger) {
    this.selectedPassenger = passenger;
  }

  save(): void {

    const url = 'http://www.angular.at/api/passenger';

    const headers = new HttpHeaders()
            .set('Accept', 'application/json');

    this.http
    .post<Passenger>(url, this.selectedPassenger, { headers })
    .subscribe({
      next: passenger => {
        this.selectedPassenger = passenger;
        this.message = 'Success!';
      },
      error: errResponse => {
        console.error('Error', errResponse);
        this.message = 'Error: ';
      }
    });
  }

}
