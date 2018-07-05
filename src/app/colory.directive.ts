import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {
  @HostBinding('style.color') myColor: string;
  // @HostListener()
  constructor() {
    this.myColor = 'red';
  }

}
