import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightpipe',
  standalone: true
})
export class HighlightpipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
     let title = args[0];

     if(!title){
      return value;
     }
     const regex = new RegExp(title,'gi')
     const match = value.match(regex);

     if(!match){
      return value;
     }
    
     return value.replace(regex,`<mark>${match[0]}</mark>`)
  }
}
