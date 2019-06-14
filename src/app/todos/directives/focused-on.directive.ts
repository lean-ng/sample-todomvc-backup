import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[focusedOn]'
})
export class FocusedOnDirective implements OnChanges {

  @Input('focusedOn')
  focused: boolean;

  constructor(private elt: ElementRef) { }

  ngOnChanges() {
    if (this.focused) {
      this.elt.nativeElement.focus();
    }
  }
}
