import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searcharray',
  standalone: true
})
export class SearcharrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
