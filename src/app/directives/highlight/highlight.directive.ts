import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'red'
    this.elementRef.nativeElement.style.width = '25%'
  }
  @HostListener('mouseover') handleMouseover() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue'
  }
  @HostListener('mouseleave') handleMouseleave() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow'
  }
  @HostListener('click') handleMouseclick() {
    this.elementRef.nativeElement.style.width = '100%'
    this.elementRef.nativeElement.style.transition = 'all .3s'
    this.elementRef.nativeElement.classList.add('active')
   }
}

//HostListener: dùng để nghe các sự kiện
