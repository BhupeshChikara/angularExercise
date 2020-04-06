import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInnerText]'
})
export class InnerTextDirective {
  @Input('appInnerText') text:String

  constructor(private elementRef:ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.innerText=this.text
  }

}
