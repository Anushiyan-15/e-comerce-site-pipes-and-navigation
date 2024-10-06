import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
  standalone: true,
  pure:false
})

export class TitlecasePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('')
                .map(word=>word.charAt(0).toUpperCase() + 
              word.slice(1).toLowerCase()).join('');
  }
}

// @Pipe({
//   name: 'filterfruits',
//   standalone: true,
// })
// export class FilterfruitsPipe implements PipeTransform {
//   transform(value: any[], ...args: any[]): any[] {
//     const userinput: any = args[0];
//     return value.filter((a) =>
//       a.toLocaleLowerCase().includes(userinput.toLocaleLowerCase())
//     );
//   }
// }





