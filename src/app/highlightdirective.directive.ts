import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightdirective]',
  standalone: true
})
export class HighlightdirectiveDirective {

  constructor(private el:ElementRef) { 
    // this.el.nativeElement.style.backgroundcolor = "yellow"
    }

  
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

}
