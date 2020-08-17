import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
  pure: true
})
export class StatusColorPipe implements PipeTransform {

  transform(delayed: boolean): string {
    if (delayed) {
      return 'red';
    } else {
      return 'green';
    }
  }

}
