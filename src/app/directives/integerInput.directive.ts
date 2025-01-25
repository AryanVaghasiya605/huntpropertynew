import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class StrictNumberOnlyDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
   
    var key = event.charCode ? event.charCode : event.keyCode;
    console.log(event.key)
    const pattern = /[0-9]/; // without ., for integer only
    let inputChar = String.fromCharCode(event.which ? event.which : event.keyCode);
    // if(event.key == 'Unidentified'){
    //     event.preventDefault();
    //     return false;
    // }
    if (!pattern.test(inputChar) && event.key === 'Unidentified') {
       // console.log('inputChar', inputChar)
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }

}