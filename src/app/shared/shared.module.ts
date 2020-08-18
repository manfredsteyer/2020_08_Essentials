import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { AsyncCityPipe } from './async-city.pipe';
import { FlightValidationErrorsComponent } from './flight-validation-errors/flight-validation-errors.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CityPipe, StatusColorPipe, StatusFilterPipe, AsyncCityPipe, FlightValidationErrorsComponent],
    providers: [],
    exports: [CityPipe, StatusColorPipe, StatusFilterPipe, AsyncCityPipe],
})
export class SharedModule { }
