import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterfruits',
  standalone: true,
})
export class FilterfruitsPipe implements PipeTransform {
  transform(value: any[], ...args: any[]): any[] {
    const userinput: any = args[0];
    return value.filter((a) => a.toLowerCase().includes(userinput.toLowerCase())
    );
  }
}
