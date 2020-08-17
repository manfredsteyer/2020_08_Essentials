import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component'
import { FlightService, DefaultFlightService } from './flight-search/flight.service';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    {
       provide: FlightService,
       useClass: DefaultFlightService
    }
  ],
  declarations: [FlightSearchComponent, PassengerSearchComponent],
  exports: [FlightSearchComponent, PassengerSearchComponent]
})
export class FlightBookingModule { }