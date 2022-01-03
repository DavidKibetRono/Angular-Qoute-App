import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'lightblue';
    this.elem.nativeElement.style.border = '1px solid black';

  }

}


