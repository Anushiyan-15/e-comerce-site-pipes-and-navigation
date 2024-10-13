import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetdirective]',
  standalone: true
})
export class AlphabetdirectiveDirective {
      constructor(private el:ElementRef){

      }

      @HostListener('input',['$event'])onInput(event:KeyboardEvent){
        const input = event.target as HTMLInputElement;
        input.value = input.value.toUpperCase();
        let regex = /^[a-zA-Z]+$/
        let strarray = input.value.split('');
        let returnaray:string[]=[]
        strarray.forEach(ele=>{
          if(regex.test(ele)){
            returnaray.push(ele);
          }
        })
        input.value=returnaray.join('');
      }
}
