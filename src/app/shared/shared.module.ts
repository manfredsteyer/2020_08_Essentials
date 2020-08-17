import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [CityPipe, StatusColorPipe, StatusFilterPipe],
    providers: [],
    exports: [CityPipe, StatusColorPipe, StatusFilterPipe],
})
export class SharedModule { }
