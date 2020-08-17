import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [CityPipe, StatusColorPipe],
    providers: [],
    exports: [CityPipe, StatusColorPipe],
})
export class SharedModule { }
