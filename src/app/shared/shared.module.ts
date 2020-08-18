import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { AsyncCityPipe } from './async-city.pipe';
import { FlightValidationErrorsComponent } from './flight-validation-errors/flight-validation-errors.component';
import { CityValidatorDirective } from './validators/city-validator.directive';
import { RoundtripDirective } from './validators/roundtrip.directive';
import { AsyncCityDirective } from './validators/async-city.directive';
import { RouteValidatorDirective } from './validators/route-validator.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CityPipe,
        StatusColorPipe,
        StatusFilterPipe,
        AsyncCityPipe,
        FlightValidationErrorsComponent,
        CityValidatorDirective,
        RoundtripDirective,
        AsyncCityDirective,
        RouteValidatorDirective
    ],
    providers: [],
    exports: [
        CityPipe,
        StatusColorPipe,
        StatusFilterPipe,
        AsyncCityPipe,
        FlightValidationErrorsComponent,
        CityValidatorDirective,
        RoundtripDirective,
        AsyncCityDirective,
        RouteValidatorDirective
    ],
})
export class SharedModule { }
