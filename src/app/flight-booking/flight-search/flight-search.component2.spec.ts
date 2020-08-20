import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlightService, DummyFlightService } from './flight.service';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
  });

  it('should load flights when user entered from and to (HttpClientTestingModule)', () => {
    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();

    const httpTestingController: HttpTestingController
      = TestBed.inject(HttpTestingController);

    const req = httpTestingController.expectOne('http://www.angular.at/api/flight?from=Graz&to=Hamburg');
    // req.request.method === 'GET'

    req.flush([{ id: 22, from: 'Graz', to: 'Hamburg', date: '' }]);

    expect(component.flights.length).toBe(1);

  });

});
