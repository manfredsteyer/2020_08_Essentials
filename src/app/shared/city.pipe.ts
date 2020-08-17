import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string, lang: string): string {

    let short, long;

    switch (value) {

      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüddel Helmut Schmidt';
      break;

      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
      break;

      case 'München':
        short = 'MUC';
        long = 'Airport Munich';
      break;

      default:
        short = long = value;

    }

    if (fmt === 'long') {
      return long;
    }
    return short;

  }

}
