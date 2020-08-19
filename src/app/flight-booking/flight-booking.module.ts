import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component'
import { FlightService, DefaultFlightService } from './flight-search/flight.service';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightCardComponent } from './flight-search/flight-card/flight-card.component';
import { FlightStatusToggleComponent } from './flight-search/flight-status-toggle/flight-status-toggle.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  providers: [
    {
       provide: FlightService,
       useClass: DefaultFlightService
    }
  ],
  declarations: [
    FlightSearchComponent,
    PassengerSearchComponent,
    FlightCardComponent,
    FlightStatusToggleComponent,
    FlightEditComponent
  ],
  exports: [
    FlightSearchComponent,
    PassengerSearchComponent
  ]
})
export class FlightBookingModule { }
