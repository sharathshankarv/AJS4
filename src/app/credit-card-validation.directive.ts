import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCreditCardValidation]'
})
export class CreditCardValidationDirective {  
  constructor(private el: ElementRef) { }

  @HostListener('blur') onblur(){

    let value:number = this.el.nativeElement.value;
    
  }

}
