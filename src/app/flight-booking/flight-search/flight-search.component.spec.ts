import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from './../flight-booking.module';
import { HttpClientModule } from '@angular/common/http';
import { FlightService, DummyFlightService } from './flight.service';
import { By } from '@angular/platform-browser';

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule,
        HttpClientModule
      ],
      declarations: [
        /* FlightSearchComponent <-- already comes w/ FlightBookingModule */
      ],
      // providers: [
      //   {
      //     provide: FlightService,
      //     useClass: DummyFlightService
      //   }
      // ]
    })
    .overrideComponent(
      FlightSearchComponent, {
      set: {
        providers: [
          {
            provide: FlightService,
            useClass: DummyFlightService
        }
      ]
    }
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have no flights initially', () => {
    expect(component.selectedFlight).toBeUndefined();
  });

  it('should not load flights w/o from and to', () => {
    component.from = '';
    component.to = '';
    component.search();
    expect(component.flights.length).toBe(0);
    // nie flightService.find(...)
  });

  it('should load flights w/ from and to', () => {

    const flightService = fixture.debugElement.injector.get(FlightService);
    spyOn(flightService, 'find').and.callThrough();

    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();

    expect(component.flights.length).toBe(3);
    expect(flightService.find).toHaveBeenCalledWith('Graz', 'Hamburg');

    // nie flightService.find('Graz', 'Hamburg')

  });

});
