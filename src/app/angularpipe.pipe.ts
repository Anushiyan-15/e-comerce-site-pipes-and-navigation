import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angularpipe',
  standalone: true
})
export class AngularpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
