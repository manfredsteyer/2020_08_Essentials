import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightService, DefaultFlightService, DummyFlightService } from './flight-search/flight.service';

const DEBUG = true;

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent,
      PassengerSearchComponent
   ],
   providers: [
      {
         provide: FlightService,
         useClass: DefaultFlightService
         // useFactory: (http: HttpClient) => {
         //    if (DEBUG) {
         //       return new DummyFlightService();
         //    } else {
         //       return new DefaultFlightService(http);
         //    }
         // },
         // deps: [HttpClient]
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
