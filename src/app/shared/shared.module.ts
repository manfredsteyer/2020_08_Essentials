import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { AsyncCityPipe } from './async-city.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [CityPipe, StatusColorPipe, StatusFilterPipe, AsyncCityPipe],
    providers: [],
    exports: [CityPipe, StatusColorPipe, StatusFilterPipe, AsyncCityPipe],
})
export class SharedModule { }
